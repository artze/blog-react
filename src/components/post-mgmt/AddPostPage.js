import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/app/Header';
import PostForm from './PostForm'
import { addPost } from '../../redux/actions/posts';

class AddPostPage extends React.Component {
    onSubmit = (post) => {
        this.props.addPost(post);
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <Header />
                <h1>Add Post</h1>
                <PostForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addPost: (post) => dispatch(addPost(post))
})

export default connect(undefined, mapDispatchToProps)(AddPostPage);
