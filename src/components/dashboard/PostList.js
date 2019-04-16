import React from 'react';
import { connect } from 'react-redux';

import PostListItem from './PostListItem';
import { getPostSummaryListSelector } from '../../redux/selectors/posts';
import { getPostsWithSearchFilterSelector } from '../../redux/selectors/search';

const PostList = (props) => (
    <div>
        { props.postSummaryList.map((post) => (
            <PostListItem key={post.id} post={post} />
        )) }
    </div>
)

const mapStateToProps = (state) => ({
    postSummaryList: getPostSummaryListSelector(getPostsWithSearchFilterSelector(state.posts, state.search))
})

export default connect(mapStateToProps)(PostList);
