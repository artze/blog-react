import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const PostListItem = (props) => (
    <div>
        <Link to={`/post/${props.post.id}`}>
            <h3>{props.post.title}</h3>
            <p>{moment(props.post.createdAt).format('D MMM YYYY')}</p>
        </Link>
        <Link to={`/edit/${props.post.id}`}>
            <span>Edit Post</span>
        </Link>
    </div>
)

export default PostListItem;
