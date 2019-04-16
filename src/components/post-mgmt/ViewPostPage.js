import React from 'react';
import { connect } from 'react-redux';
import { getPostByIdSelector } from '../../redux/selectors/posts';
import Header from '../app/Header';

const ViewPostPage = (props) => (
    <div>
        <Header />
        <h1>{props.post.title}</h1>
        <p>{props.post.content}</p>
    </div>
)

const mapStateToProps = (state, ownProps) => ({
    post: getPostByIdSelector(state.posts, ownProps.match.params.id)
})

export default connect(mapStateToProps)(ViewPostPage);