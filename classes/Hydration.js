class Hydration {
    constructor(userHydrationData) {
        this.userHydrationData = userHydrationData;
    }
    flOzOnAGivenDay(date) {
        let dateData = this.userHydrationData.find(dataObject => {
            return dataObject.date == date;
        });
        return dateData.numOunces;
    }
    lastWeekOfWaterData() {
        let sortedData = this.userHydrationData.sort((a, b) =>a - b);
        let lastSeven = sortedData.slice(-7);
        //
        console.log(lastSeven);
        //
        let lastSevenOzOnly = lastSeven.map(object => {
            return object.numOunces;
        })
        return lastSevenOzOnly;
    };
};

module.exports = Hydration;