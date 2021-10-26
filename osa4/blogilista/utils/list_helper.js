const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    const likes = blogs.map(x => x.likes)
    const reducer = (sum, next) => {return sum + next}
    return likes.reduce(reducer)
}

const favouriteBlog = (blogs) => {
    const reducer = (prev, next) => {
        return (prev.likes > next.likes) ? prev : next
    }
    return blogs.reduce(reducer)
}

module.exports = {
    dummy, totalLikes, favouriteBlog
}