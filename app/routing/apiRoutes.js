var friends = require("../data/friendsData");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {
        //This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 
    })

}