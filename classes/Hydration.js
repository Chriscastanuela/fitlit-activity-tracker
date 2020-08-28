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

        let lastSeven = sortedData.slice(-7);/**/

        console.log("LastSeven", lastSeven);

        let noId = lastSeven.map(index => {
            let newIndex = {
                date: index.date,
                numOunces: index.numOunces,
            };
            return newIndex;
        });
        console.log(noId);
        return noId;
    };
    // lastWeekOfWaterData() {
    //     let sortedData = this.userHydrationData.sort((a, b) =>a - b);
    //     let lastSeven = sortedData.slice(-7);
    //     //
    //     console.log(lastSeven);
    //     //
    //     let lastSevenOzOnly = lastSeven.map(object => {
    //         return object.numOunces;
    //     })
    //     console.log(lastSevenOzOnly);
    //     return lastSevenOzOnly;
    // };
};

module.exports = Hydration;