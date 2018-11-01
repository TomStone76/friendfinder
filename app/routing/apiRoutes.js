var friendsData = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });


    function detectNum(obj) {
        for (var index in obj) {
            if (!isNaN(obj[index])) {
                obj[index] = Number(obj[index]);
            } else if (typeof obj === "object") {
                detectNum(obj[index]);
            }
        }
    }

    // app.post("/api/friends", function (req, res) {
    //     console.log("post route working");
    //     console.log(req.body);
    //     friendsData.push(req.body);
    //     console.log(friendsData)
    //     for (var i = 0; i < friendsData.length; i++) {
    //         var arrNums = friendsData[i].scores.map(Number);
    //         console.log(arrNums);
    //     }
    //     console.log(friendsData.slice(-1)[0]);
    //     res.json(friendsData[0]);
    // });


    app.post("/api/friends", function (req, res) {
        console.log("post route working");
        friendsData.push(req.body);
        for (var i = 0; i < friendsData.length; i++) {
            var arrNums = friendsData[i].scores.map(Number);
            console.log(friendsData[i].name);
            console.log(arrNums);
        }
    });
}