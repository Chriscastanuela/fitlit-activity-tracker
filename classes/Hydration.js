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
};

module.exports = Hydration;