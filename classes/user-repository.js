class UserRepository {
    constructor(data) {
        this.userObjects = data;
    }
    returnData(userId) {
        return this.userObjects.find(index => {
            return index.id == userId;
        });
    };
    avgStepGoalOfAllUsers() {
        var sum = this.userObjects.reduce((avg, object) => {

            avg += object.dailyStepGoal;
            return avg;

        }, 0)

        let average = sum / this.userObjects.length;

        return average;
    }
};

if (typeof module !== "undefined") {
module.exports = UserRepository;
};
