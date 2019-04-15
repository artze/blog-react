import uuid from 'uuid';
import moment from 'moment';

export const addPost = ({title, content}) => ({
    type: 'ADD_POST',
    post: {
        id: uuid(),
        title,
        content,
        createdAt: moment().format('x')
    }
})

export const editPost = (id, updatedPost) => ({
    type: 'EDIT_POST',
    post: {
        id,
        ...updatedPost
    }
})

export const deletePost = (id) => ({
    type: 'DELETE_POST',
    post: {
        id
    }
})
