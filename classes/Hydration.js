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

/*

passing in a date

sort through our array, stop when date found

give us ounces for that date

*/