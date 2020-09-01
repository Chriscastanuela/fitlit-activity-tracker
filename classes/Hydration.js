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

        let noId = lastSeven.map(index => {
            let newIndex = {
                date: index.date,
                numOunces: index.numOunces,
            };
            return newIndex;
        });
        return noId;
    };
};

if (typeof module !== "undefined") {
    module.exports = Hydration;
};