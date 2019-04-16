const defaultSearchState = {
    title: ''
}

export default (state = defaultSearchState, action) => {
    switch(action.type) {
        case 'SEARCH_BY_TITLE':
        return {
            ...state,
            title: action.search.title
        }

        default: 
        return state;
    }
}