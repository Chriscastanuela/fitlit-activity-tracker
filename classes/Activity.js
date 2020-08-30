const ActivityRepository = require("./Activity-Repository");

class Activity {
    constructor(data) {
        this.data = data;
    };
};

module.exports = Activity;
if (typeof module !== "undefined") {
    module.exports = Activity;
};
/*
For a specific day (specified by a date), 
    return the miles a user has walked based on their number of steps (use their strideLength to help calculate this)
For a user, (identified by their userID) 
    how many minutes were they active for a given day (specified by a date)?
For a user, 
    how many minutes active did they average for a given week (7 days)?
For a user, 
    did they reach their step goal for a given day (specified by a date)?
For a user, 
    find all the days where they exceeded their step goal
For a user, 
    find their all-time stair climbing record
//
//
Make a metric of your own! Document it, calculate it, and display it.
//
//
*/