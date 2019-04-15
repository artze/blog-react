export const getPostSummaryListSelector = (posts) => {
    return posts.map((post) => ({
        id: post.id,
        title: post.title,
        createdAt: post.createdAt
    }))
}

export const getPostByIdSelector = (posts, id) => {
    return posts.find((post) => post.id === id)
}