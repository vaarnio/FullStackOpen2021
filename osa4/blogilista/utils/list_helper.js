const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    const likes = blogs.map(x => x.likes)
    const reducer = (sum, next) => {return sum + next}
    return likes.reduce(reducer)
}

module.exports = {
    dummy, totalLikes
}