class User {
    constructor(object) {
        this.id = object.id;
        this.name = object.name;
        this.address = object.address;
        this.email = object.email;
    }
}

module.exports = User;