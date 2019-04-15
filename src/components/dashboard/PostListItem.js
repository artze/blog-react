import React from 'react';
import { Link } from 'react-router-dom';

const PostListItem = (props) => (
    <div>
        <Link to={`/edit/${props.id}`}>
            <h3>{props.title}</h3>
        </Link>
    </div>
)

export default PostListItem;