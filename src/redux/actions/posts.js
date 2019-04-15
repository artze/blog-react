import uuid from 'uuid';

export const addPost = ({title, content}) => ({
    type: 'ADD_POST',
    post: {
        id: uuid(),
        title,
        content
    }
})
