class Activity {
    constructor(data) {
        this.data = data;
    };
    milesWalked(date, user) {
        let dateData = this.data.find(oneDate => oneDate.date == date);
        let stepsNeeded = 5280/user.strideLength;
        let roundedStepsNeeded = Math.floor(stepsNeeded);
        let milesWalked = dateData.numSteps/roundedStepsNeeded;
        let roundedMilesWalked = Math.floor(milesWalked);
        return roundedMilesWalked;
    }
    stepsTakenOnAGivenDate(date) {
        let dateData = this.data.find(dataObject => dataObject.date == date)
        return dateData.numSteps;
    };
    oneUserMinutesActiveOnAGivenDate(date) {
        let dateData = this.data.find(dataObject => dataObject.date == date)
        return dateData.minutesActive;
    };
    averageMinutesActiveForAGivenWeek(startDate, endDate) {
        let sevenDayData = this.data.filter(data => data.date >= startDate && data.date <= endDate);
        let sevenDayMinutes = sevenDayData.map(oneData => oneData.minutesActive);
        let average = sevenDayMinutes.reduce((acc, index) => {
            return acc += index;
        }, 0)/7;
        return average;
    };
    averageMinutesActiveForTheLastWeek() {
        let justTheMinutes = this.data.map(oneData => oneData.minutesActive)
        let lastSeven = justTheMinutes.slice(-7);
        let average = lastSeven.reduce((acc, index) => {
            return acc += index;
        }, 0)/7;
        return average;
    };
    didTheyBeatTheirStepGoalOnThisDate(date, user) {
        let dateData = this.data.find(data => data.date == date);
        if (dateData.numSteps >= user.dailyStepGoal) {
            return "Yes"
        } else {return "No"}
    }
    daysWhereTheyBeatStepGoal(user) {
        let arrayOfStepGoalVictoryData = this.data.filter(oneData => {
            return oneData.numSteps >= user.dailyStepGoal
        });
        let justTheDates = arrayOfStepGoalVictoryData.map(oneIndex => oneIndex.date);
        return justTheDates;
    }
    stairRecord() {
        let flightCounts = this.data.map(flightCount => flightCount.flightsOfStairs);
        let sortedFlightCount = flightCounts.sort((a,b) => a-b);
        let highest = sortedFlightCount.slice(-1)[0];
        return highest;
    }
    findSevenDayStepCount(startDate, endDate) {
        let sevenDayData = this.data.filter(day => day.date >= startDate && day.date <= endDate)
        let sevenDaysOfSteps = sevenDayData.map(day => day.numSteps);
        return sevenDaysOfSteps;
    };
};

if (typeof module !== "undefined") {
    module.exports = Activity;
};