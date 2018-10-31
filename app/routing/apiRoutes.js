var friends = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {
        console.log("post route working");
        console.log(req.body);
        friendsData.push(req.body);
    });
}