var friends = require('../data/friends');

module.exports = function (app) {

    app.get("/api/friends", function(req, res){
        res.json(friends);
    })

    app.post("/api/submit", function(req, res){
        var newUser = req.body
        var thisDiff = 0;

        var bestMatch = {
            name: "",
            photo: "",
            minDiff: Infinity 
        }

        for(var i = 0; i < friends.length; i++){
            // Ahmed
            var thisFriend = friends[i];
            for(var j = 0; j < newUser.scores.length; j++){
                // whatever you put in question 1
                // whatever you put in question 2
                // whatever you put in question 3
                var newQuestionScore = parseInt(newUser.scores[j]);
                // Ahmed score for question 1
                // Ahmed score for question 2
                // Ahmed score for question 3
                var friendsScore = thisFriend.scores[j];
                // the difference for each question between ahmed and myself
                var diff = Math.abs(newQuestionScore - friendsScore);
                // adding the difference for each question to find total difference
                thisDiff = thisDiff + diff
            }
            console.log(thisDiff)
            // thisdiff = total difference you and Ahmed
            // thisDiff has to be less than infinity
            if(thisDiff < bestMatch.minDiff){
                bestMatch.name = thisFriend.name
                bestMatch.photo = thisFriend.photo
                bestMatch.minDiff = thisDiff
            }
        }

        res.json(bestMatch)
    })

}