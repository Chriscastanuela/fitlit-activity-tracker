class User {
    constructor(object) {
        this.id = object.id;
        this.name = object.name;
        this.address = object.address;
        this.email = object.email;
        this.strideLength = object.strideLength;
        this.dailyStepGoal = object.dailyStepGoal;
        this.friends = object.friends;
    }
}

module.exports = User;