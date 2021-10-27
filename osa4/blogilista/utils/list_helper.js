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

const mostBlogs = (blogs) => {
    if(blogs.length === 0 || blogs === undefined){
        return null
    }
    const authors = []
    //add authors of blogs to array if they aren't there already, add 1 to their blog count if already there
    blogs.forEach(b => (authors.map(a => a.author).includes(b.author)
        ? authors.filter(a => a.author === b.author)[0].blogs += 1
        : authors.push({
            author: b.author,
            blogs: 1
        })
    ))

    //list is reduced to one author who has most blogs
    return authors.reduce(function(prev, next) {
        return (prev.blogs > next.blogs) ? prev : next
    })
}

const mostLikes = (blogs) => {
    if(blogs.length === 0 || blogs === undefined){
        return null
    }
    const authors = []

    blogs.forEach(b => (authors.map(a => a.author).includes(b.author)
        ? authors.filter(a => a.author === b.author)[0].likes += b.likes
        : authors.push({
            author: b.author,
            likes: b.likes
        })
    ))

    return authors.reduce(function(prev, next) {
        return (prev.likes > next.likes) ? prev : next
    })
}

module.exports = {
    dummy, totalLikes, favouriteBlog, mostBlogs, mostLikes
}