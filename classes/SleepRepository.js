class SleepRepository {
    constructor(sleepData) {
        this.sleepData = sleepData;
    }
}

if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}
