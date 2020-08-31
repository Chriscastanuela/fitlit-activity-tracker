const ActivityRepository = require("./Activity-Repository");

class Activity {
    constructor(data, user) {
        this.data = data;
        this.user = user
    };
    /*4.*/averageMinutesActiveForAGivenWeek(startDate, endDate) {
        let sevenDayData = this.data.filter(data => data.date >= startDate && data.date <= endDate);
        let sevenDayMinutes = sevenDayData.map(oneData => oneData.minutesActive);
        let average = sevenDayMinutes.reduce((acc, index) => {
            return acc += index;
        }, 0)/7;
        return average;
    };
    /*5.*/averageMinutesActiveForTheLastWeek() {
        let justTheMinutes = this.data.map(oneData => oneData.minutesActive)
        let lastSeven = justTheMinutes.slice(-7);
        let average = lastSeven.reduce((acc, index) => {
            return acc += index;
        }, 0)/7;
        return average;
    };
    /*6.*/didTheyBeatTheirStepGoalOnThisDate(date) {
        /**/let dateData = this.data.find(data => data.date == date);
        /**/if (dateData.numSteps >= this.user.dailyStepGoal) {
            return "Yes"
        } else {return "No"}
    }
    /*7.*/daysWhereTheyBeatStepGoal() {
        // 
    }
    /*8.*/stairRecord(user) {
        let flightCounts = this.data.map(flightCount => flightCount.flightsOfStairs);
        let sortedFlightCount = flightCounts.sort((a,b) => a-b);
        let highest = sortedFlightCount.slice(-1)[0];
        return highest;
    }
};

module.exports = Activity;
if (typeof module !== "undefined") {
    module.exports = Activity;
};
/*
3. For a specific day (specified by a date), 
    return the miles a user has walked based on their number of steps (use their strideLength to help calculate this)
6. For a user, 
    did they reach their step goal for a given day (specified by a date)?
7. For a user,
    find all the days where they exceeded their step goal
*/