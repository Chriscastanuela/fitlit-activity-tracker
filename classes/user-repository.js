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
            console.log(avg);
            return avg;

        }, 0)

        let avg = sum / this.userObjects.length;

        return avg;
    }
};

if (typeof module !== "undefined") {
module.exports = UserRepository;
};
