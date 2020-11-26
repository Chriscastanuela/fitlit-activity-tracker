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
    returnFirstName() {
        var arrayOfNames = this.name.split(" ");
        var firstName = arrayOfNames[0];
        return firstName;
    }
}

if (typeof module !== "undefined") {
module.exports = User;
};