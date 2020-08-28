class HydrationRepository {
    constructor(hydrationData) {
        this.hydrationData = hydrationData;
    }
    averageFlOzAllTime(userId) {
        let userHydrationDataList = this.hydrationData.filter(hydrationObj => {
            return hydrationObj.userID == userId;
        });
        let sum = userHydrationDataList.reduce((avg, object) => {
            avg += object.numOunces;
            return avg;
        }, 0);
        let average = sum / userHydrationDataList.length;
        return average;
    }
}

module.exports = HydrationRepository;