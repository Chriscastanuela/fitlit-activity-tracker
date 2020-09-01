// const Hydration = require("../classes/Hydration");
// const Activity = require("../classes/Activity");

var userGreeting = document.querySelector(".Hi-User");
var userStepGoalDis = document.querySelector(".Step-Goals");
var userProfileImage = document.querySelector(".Main-User-Icon");
var friendOne = document.querySelector(".Friend-1");
var friendTwo = document.querySelector(".Friend-2");
var friendThree = document.querySelector(".Friend-3");
var friendFour = document.querySelector(".Friend-4");
var friendOneIcon = document.querySelector(".icon-1");
var friendTwoIcon = document.querySelector(".icon-2");
var friendThreeIcon = document.querySelector(".icon-3");
var friendFourIcon = document.querySelector(".icon-4");
var friendOneIcon = document.querySelector(".Friend-Name-1");
var friendTwoIcon = document.querySelector(".Friend-Name-2");
var friendThreeIcon = document.querySelector(".Friend-Name-3");
var friendFourIcon = document.querySelector(".Friend-Name-4");
var userInfoCard = document.querySelector(".Mid");
var todaySleep = document.querySelector("#S-L");
let weekSleep = document.querySelector("#S-M");
let avgSleep = document.querySelector("#S-R");

let userRepository = new UserRepository(userData);
let currentUser = new User(userRepository.returnData(20))
let sleepRepository = new SleepRepository(sleepData);
let userSleep = new UserSleep(sleepData);
let activityRepository = new ActivityRepository(activityData);
let activity = new Activity(activityRepository.allDataOfOneUser(1));

function displayNewUser() {
    userGreeting.innerHTML = `<p>Hello ${currentUser.returnFirstName()}!</p>`;
    userInfoCard.innerHTML = `<div class="userContainer">
    <h4><b>${currentUser.returnFirstName()}'s info</b></h4>
    <p>${currentUser.address}</p>
    <p>${currentUser.email}</p>
    <p>Stride length: ${currentUser.strideLength}</p>
    <p>Your goal is: ${currentUser.dailyStepGoal}</p>
    <p>Average goal of all users: ${userRepository.avgStepGoalOfAllUsers()}</p>
    </div>`
}

function displayUserLastDayOfSleep(date, id){
    todaySleep.innerHTML = `<p>Amount of sleep in the last 24 hours: ${userSleep.findDailySleep(date, id)} hours</p>
    <p>Quality of sleep in the last 24 hours: ${userSleep.findDailySleepQuality(date, id)}</p>`
}

function displayUserLastWeekOfSleep(startDate, endDate, userId) {
    weekSleep.innerHTML = `<p>Sleep insights for the past week: ${userSleep.findUserWeeklyData(startDate, endDate, userId)}</p>`
}

function displayAllTimeSleepAverages(user) {
    avgSleep.innerHTML = `<p>Average sleep quality: ${userSleep.findAvgDailySleepQuality(user)}</p>
    <p>Average hours slept: ${userSleep.findAvgDailySleep(user)}</p>`
}

window.onload = displayNewUser();
window.onload = displayUserLastDayOfSleep("2019/09/22", currentUser.id);
window.onload = displayUserLastWeekOfSleep("2019/09/15", "2019/09/22", currentUser.id)
window.onload = displayAllTimeSleepAverages(currentUser.id);
/*
Latest week's sleep
    Hours slept
    quality of sleep last day

For a user, their all-time average sleep quality and all-time average number of hours slept
*/