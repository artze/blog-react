import uuid from 'uuid';

const defaultPostValues = [
    {
        id: uuid(),
        title: 'The Very First',
        content: 'A quick brown fox jumps over the lazy dog.',
        createdAt: 321654654
    },
    {
        id: uuid(),
        title: 'The Second',
        content: 'The second coming is upon us.',
        createdAt: 54894651111
    }
]

export default (state = defaultPostValues, action) => {
    switch(action.type) {
        case 'ADD_POST':
        return [...state, action.post];

        case 'EDIT_POST':
        return state.map((post) => {
            if(post.id === action.post.id) {
                return {
                    ...post,
                    ...action.post
                }
            }
            return post;
        });

        case 'DELETE_POST':
        return state.filter((post) => post.id !== action.post.id);

        default: 
        return state;
    }
}