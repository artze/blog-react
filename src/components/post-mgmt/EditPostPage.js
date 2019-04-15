import React from 'react';
import { connect } from 'react-redux';
import Header from '../app/Header';
import PostForm from '../post-mgmt/PostForm';
import { getPostByIdSelector } from '../../redux/selectors/posts';
import { editPost, deletePost } from '../../redux/actions/posts';

class EditPostPage extends React.Component {
    onSubmit = (updatedPost) => {
        this.props.editPost(updatedPost)
        this.props.history.push('/');
    }

    onDeletePost = () => {
        this.props.deletePost();
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <Header />
                <h1>Edit Post</h1>
                <PostForm
                    post={this.props.post}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onDeletePost}>Remove Post</button>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    post: getPostByIdSelector(state.posts, ownProps.match.params.id)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    editPost: (updatedPost) => dispatch(editPost(ownProps.match.params.id, updatedPost)),
    deletePost: () => dispatch(deletePost(ownProps.match.params.id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage);
