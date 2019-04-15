import React from 'react';
import { connect } from 'react-redux';

import PostListItem from './PostListItem';
import { getPostSummaryListSelector } from '../../redux/selectors/posts';

const PostList = (props) => (
    <div>
        { props.postSummaryList.map((post) => (
            <PostListItem key={post.id} post={post} />
        )) }
    </div>
)

const mapStateToProps = (state) => ({
    postSummaryList: getPostSummaryListSelector(state.posts)
})

export default connect(mapStateToProps)(PostList);
