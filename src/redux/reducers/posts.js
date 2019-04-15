const defaultPostValues = [
    {
        id: 1,
        title: 'The Very First',
        content: 'A quick brown fox jumps over the lazy dog.'
    },
    {
        id: 2,
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