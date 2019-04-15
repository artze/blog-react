import uuid from 'uuid';

const defaultPostValues = [
    {
        id: uuid(),
        title: 'The Very First',
        content: 'A quick brown fox jumps over the lazy dog.'
    },
    {
        id: uuid(),
        title: 'The Second',
        content: 'The second coming is upon us.'
    }
]

export default (state = defaultPostValues, action) => {
    switch(action.type) {
        case 'ADD_POST':
        return [...state, action.post];

        default: 
        return state;
    }
}