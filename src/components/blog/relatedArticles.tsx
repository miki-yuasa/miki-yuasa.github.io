exports.defaultConfig = {
    keywords: 100,
    tags: 50,
    threshold: 50,
    number: 5,
}
exports.extractRelatedArticles = extractRelatedArticles

function extractRelatedArticles(articles, article, config) {
    const tags = article.node.frontmatter.tags
    const keywords = article.node.frontmatter.keywords
    const temp_arr = []
    articles.map(e => {
        let score = 0
        const frontmatter = e.node.frontmatter
        const temp_keywords = frontmatter.keywords
        const temp_tags = frontmatter.tags
        // except itself
        if (article.node.frontmatter.title === frontmatter.title) {
            return
        }
        // keywords 
        if (temp_keywords === keywords) {
            score += config.keywords
        }
        // tags
        temp_tags.map(e => {
            tags.map(f => {
                if (e === f) {
                    score += config.tags
                }
            })
        })
        // eliminate articles with low relation
        if (score < config.threshold) {
            return
        }
        const temp = {
            title: frontmatter.title,
            slug: frontmatter.slug,
            date: frontmatter.date,
            score: score,
        }
        temp_arr.push(temp)
    })
    // sort based on the score and date
    temp_arr.sort(function (a, b) {
        const temp_date_a = new Date(a.date).getTime()
        const temp_date_b = new Date(b.date).getTime()
        // the first sort key is the relevance
        if (a.score > b.score) {
            return -1
        }
        if (a.score < b.score) {
            return 1
        }
        // the second key is the date
        if (temp_date_a > temp_date_b) {
            return -1
        }
        if (temp_date_a < temp_date_b) {
            return 1
        }
        return 0
    })
    const arr = temp_arr.slice(0, config.number)
    return arr
}