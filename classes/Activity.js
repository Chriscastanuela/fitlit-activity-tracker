class Activity {
    constructor(data) {
        this.data = data;
    };
    /*3.*/milesWalked(date, user) {
        /*3.*/
        let dateData = this.data.find(oneDate => oneDate.date == date);
        let stepsNeeded = 5280/user.strideLength;
        let roundedStepsNeeded = Math.floor(stepsNeeded);
        let milesWalked = dateData.numSteps/roundedStepsNeeded;
        let roundedMilesWalked = Math.floor(milesWalked);
        return roundedMilesWalked;
    }
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
    /*6.*/didTheyBeatTheirStepGoalOnThisDate(date, user) {
        /**/let dateData = this.data.find(data => data.date == date);
        /**/if (dateData.numSteps >= user.dailyStepGoal) {
            return "Yes"
        } else {return "No"}
    }
    /*7.*/daysWhereTheyBeatStepGoal(user) {
        let arrayOfStepGoalVictoryData = this.data.filter(oneData => {
            return oneData.numSteps >= user.dailyStepGoal
        });
        let justTheDates = arrayOfStepGoalVictoryData.map(oneIndex => oneIndex.date);
        return justTheDates;
    }
    /*8.*/stairRecord() {
        let flightCounts = this.data.map(flightCount => flightCount.flightsOfStairs);
        let sortedFlightCount = flightCounts.sort((a,b) => a-b);
        let highest = sortedFlightCount.slice(-1)[0];
        return highest;
    }
};

if (typeof module !== "undefined") {
    module.exports = Activity;
};