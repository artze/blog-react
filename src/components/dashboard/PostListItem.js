import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const PostListItem = (props) => (
    <div>
        <Link to={`/edit/${props.post.id}`}>
            <h3>{props.post.title}</h3>
            <p>{moment(props.post.createdAt).format('D MMM YYYY')}</p>
        </Link>
    </div>
)

export default PostListItem;
