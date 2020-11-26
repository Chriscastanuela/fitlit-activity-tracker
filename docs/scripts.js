var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

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
let todayHydration = document.querySelector("#H-L");
let weekHydration = document.querySelector("#H-M");
let todaySteps = document.querySelector("#SC-L");
let todayMinutes = document.querySelector("#M-L");
let weekSteps = document.querySelector("#SC-M");
let avgSteps = document.querySelector("#SC-R");
let todaysDate = document.querySelector(".Current-Date");

//----------------------------Class Instantiations
let userNumber = Math.floor(Math.random()*userData.length)+1;
let userRepository = new UserRepository(userData);
let currentUser = new User(userRepository.returnData(userNumber))
let sleepRepository = new SleepRepository(sleepData, currentUser.id);
let userSleep = new UserSleep(sleepData);
let activityRepository = new ActivityRepository(activityData);
let activity = new Activity(activityRepository.allDataOfOneUser(currentUser.id));
let hydrationRepository = new HydrationRepository(hydrationData);
let hydration = new Hydration(hydrationRepository.returnData(currentUser.id));

//---------------------------Function Declarations
function displayDate(date) {
    todaysDate.innerHTML = `${date}`
}

function displayNewUser() {
    userGreeting.innerHTML += `<h2>Hello ${currentUser.returnFirstName()}!</h2>`;
    userInfoCard.innerHTML += `<div class="userContainer">
    <h4><b class='topRightName'>${currentUser.returnFirstName()}</b></h4><br>
    <ul>
    <li>${currentUser.address}</li>
    <li>${currentUser.email}</li>
    <li>Stride length: ${currentUser.strideLength}</li>
    <li>Your goal is: ${currentUser.dailyStepGoal}</li>
    <li>Average goal of all users: ${userRepository.avgStepGoalOfAllUsers()}</li>
    </ul>
    </div>`
}

function displayUserLastDayOfSleep(date, id){
    todaySleep.innerHTML = `<p>Amount of sleep in the last 24 hours: ${userSleep.findDailySleep(date, id)} hours</p>
    <p>Quality of sleep in the last 24 hours: ${userSleep.findDailySleepQuality(date, id)}</p>`
}

function displayUserLastWeekOfSleep(startDate, endDate, userId) {
    let nineSixteen = userSleep.findUserWeeklyData(startDate, endDate, userId)[0].hoursSlept;
    let nineSeventeen = userSleep.findUserWeeklyData(startDate, endDate, userId)[1].hoursSlept;
    let nineEighteen = userSleep.findUserWeeklyData(startDate, endDate, userId)[2].hoursSlept;
    let nineNineteen = userSleep.findUserWeeklyData(startDate, endDate, userId)[3].hoursSlept;
    let nineTwenty = userSleep.findUserWeeklyData(startDate, endDate, userId)[4].hoursSlept;
    let nineTwentyOne = userSleep.findUserWeeklyData(startDate, endDate, userId)[5].hoursSlept;
    let nineTwentyTwo = userSleep.findUserWeeklyData(startDate, endDate, userId)[6].hoursSlept;
    
    weekSleep.innerHTML = `<p>Sleep insights for the past week: <br><br>
    ${userSleep.findUserWeeklyData(startDate, endDate, userId)[0].date}: ${nineSixteen} hours slept<br>
    ${userSleep.findUserWeeklyData(startDate, endDate, userId)[1].date}: ${nineSeventeen} hours slept<br>
    ${userSleep.findUserWeeklyData(startDate, endDate, userId)[2].date}: ${nineEighteen} hours slept<br>
    ${userSleep.findUserWeeklyData(startDate, endDate, userId)[3].date}: ${nineNineteen} hours slept<br>
    ${userSleep.findUserWeeklyData(startDate, endDate, userId)[4].date}: ${nineTwenty} hours slept<br>
    ${userSleep.findUserWeeklyData(startDate, endDate, userId)[5].date}: ${nineTwentyOne} hours slept<br>
    ${userSleep.findUserWeeklyData(startDate, endDate, userId)[6].date}: ${nineTwentyTwo} hours slept<br>`
    var ctx = document.getElementById('sleepChart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        labels: ["2019/09/16", "2019/09/17", "2019/09/18", "2019/09/19", "2019/09/20", "2019/09/21", "2019/09/22"],
        datasets: [{
            label: 'Hours of sleep',
            data: [
                nineSixteen,
                nineSeventeen,
                nineEighteen,
                nineNineteen,
                nineTwenty,
                nineTwentyOne,
                nineTwentyTwo
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
});
}

function displayAllTimeSleepAverages(user) {
    avgSleep.innerHTML = `<p>Average sleep quality: ${userSleep.findAvgDailySleepQuality(user)}</p>
    <p>Average hours slept: ${userSleep.findAvgDailySleep(user)}</p>`
}

function displayTodayHydration(date) {
    todayHydration.innerHTML = `Today you drank ${hydration.flOzOnAGivenDay(date)} ounces of water`
}

function displayWeeklyyHydration() {
    let nineSixteen = hydration.lastWeekOfWaterData()[0].numOunces;
    let nineSeventeen = hydration.lastWeekOfWaterData()[1].numOunces;
    let nineEighteen = hydration.lastWeekOfWaterData()[2].numOunces;
    let nineNineteen = hydration.lastWeekOfWaterData()[3].numOunces;
    let nineTwenty = hydration.lastWeekOfWaterData()[4].numOunces;
    let nineTwentyOne = hydration.lastWeekOfWaterData()[5].numOunces;
    let nineTwentyTwo = hydration.lastWeekOfWaterData()[6].numOunces;

    weekHydration.innerHTML = `Weekly hydration info: <br><br>
    ${(hydration.lastWeekOfWaterData()[0].date)}: ${nineSixteen} ounces<br>
    ${(hydration.lastWeekOfWaterData()[1].date)}: ${nineSeventeen} ounces<br>
    ${(hydration.lastWeekOfWaterData()[2].date)}: ${nineEighteen} ounces<br>
    ${(hydration.lastWeekOfWaterData()[3].date)}: ${nineNineteen} ounces<br>
    ${(hydration.lastWeekOfWaterData()[4].date)}: ${nineTwenty} ounces<br>
    ${(hydration.lastWeekOfWaterData()[5].date)}: ${nineTwentyOne} ounces<br>
    ${(hydration.lastWeekOfWaterData()[6].date)}: ${nineTwentyTwo} ounces`
    var ctx = document.getElementById('hydrationChart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2019/09/16", "2019/09/17", "2019/09/18", "2019/09/19", "2019/09/20", "2019/09/21", "2019/09/22"],
        datasets: [{
            label: 'Ounces of Water',
            data: [nineSixteen,nineSeventeen,nineEighteen,nineNineteen,nineTwenty,nineTwentyOne,nineTwentyTwo],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    min: 0,
                    max: 120,
                    stepSize: 20,
                }
            }]
        }
    }
});
}

function displayTodaySteps(date, user) {
    todaySteps.innerHTML = `Today you took ${activity.stepsTakenOnAGivenDate(date)} steps and walked ${activity.milesWalked(date, user)} miles.<br><br>`
    avgSteps.innerHTML = `Everyone else's step data: <br><br>
    Average minutes active: ${activityRepository.allUsersMinutesActiveOnAGivenDate(date)}<br>
    Average stairs climbed: ${activityRepository.stairsClimbedOnAGivenDate(date)}<br><br>`
}

function displayTodayMinutesActive(date) {
    todayMinutes.innerHTML = `Today you were active for ${activity.oneUserMinutesActiveOnAGivenDate(date)} minutes`
}

function displayWeekSteps(startDate, endDate) {
    let theSteps = activity.findSevenDayStepCount(startDate, endDate);

    weekSteps.innerHTML = `Step counts for the past week: </br>
    2019/09/15: ${theSteps[0]} steps taken</br>
    2019/09/16: ${theSteps[1]} steps taken</br>
    2019/09/17: ${theSteps[2]} steps taken</br>
    2019/09/18: ${theSteps[3]} steps taken</br>
    2019/09/19: ${theSteps[4]} steps taken</br>
    2019/09/20: ${theSteps[5]} steps taken</br>
    2019/09/21: ${theSteps[6]} steps taken</br>
    `
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["2019/09/15", "2019/09/16", "2019/09/17", "2019/09/18", "2019/09/19", "2019/09/20", "2019/09/21"],
        datasets: [{
            label: 'Number of Steps',
            data: [theSteps[0],theSteps[1],theSteps[2],theSteps[3],theSteps[4],theSteps[5],theSteps[6]],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    min: 0,
                    max: 20000,
                    // stepSize: 100,
                }
            }]
        }
    }
});
}

//------------------------------------------Onload
window.onload = displayDate(date);
window.onload = displayNewUser();
window.onload = displayUserLastDayOfSleep("2019/09/22", currentUser.id);
window.onload = displayUserLastWeekOfSleep("2019/09/16", "2019/09/22", currentUser.id)
window.onload = displayAllTimeSleepAverages(currentUser.id);
window.onload = displayTodayHydration("2019/09/22");
window.onload = displayWeeklyyHydration();
window.onload = displayTodaySteps("2019/09/22", currentUser);
window.onload = displayTodayMinutesActive("2019/09/22");
window.onload = displayWeekSteps("2019/09/15", "2019/09/21");