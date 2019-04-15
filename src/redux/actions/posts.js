import uuid from 'uuid';

export const addPost = ({title, content}) => ({
    type: 'ADD_POST',
    post: {
        id: uuid(),
        title,
        content
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
