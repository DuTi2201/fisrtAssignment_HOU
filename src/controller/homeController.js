const handleHome =(req, res) => {
    return res.render("home.ejs");
}

const handleUserPage = (req, res) => {
    return res.render("users.ejs")
}

module.exports = {
    handleHome, handleUserPage
}