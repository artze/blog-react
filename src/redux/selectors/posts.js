export const getPostSummaryListSelector = (state) => {
    return state.posts.map((post) => ({
        id: post.id,
        title: post.title
    }))
}