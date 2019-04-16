export const getPostsWithSearchFilterSelector = (posts, searchFilter) => {
    return posts.filter((post) => {
        const titleMatch = post.title.toLowerCase().indexOf(searchFilter.title.toLowerCase()) > -1;
        return titleMatch;
    })
}