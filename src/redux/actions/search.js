export const searchByTitle = (title) => {
    return {
        type: 'SEARCH_BY_TITLE',
        search: {
            title
        }
    }
}