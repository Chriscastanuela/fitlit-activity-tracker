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
let todayDate = document.querySelector(".Current-Date");

//----------------------------Class Instantiations
let userRepository = new UserRepository(userData);
let currentUser = new User(userRepository.returnData(20))
let sleepRepository = new SleepRepository(sleepData);
let userSleep = new UserSleep(sleepData);
let activityRepository = new ActivityRepository(activityData);
let activity = new Activity(activityRepository.allDataOfOneUser(1));
let hydrationRepository = new HydrationRepository(hydrationData);
let hydration = new Hydration(hydrationRepository.returnData(20));

//---------------------------Function Declarations
function displayDate(date) {
    todayDate.innerHTML = `${date}`
}

function displayNewUser() {
    userGreeting.innerHTML += `<h2>Hello ${currentUser.returnFirstName()}!</h2>`;
    userInfoCard.innerHTML += `<div class="userContainer">
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
    weekSleep.innerHTML = `<p>Sleep insights for the past week: <br><br>
    ${userSleep.findUserWeeklyData(startDate, endDate, userId)[0].date}: ${userSleep.findUserWeeklyData(startDate, endDate, userId)[0].hoursSlept} hours slept<br>
    ${userSleep.findUserWeeklyData(startDate, endDate, userId)[1].date}: ${userSleep.findUserWeeklyData(startDate, endDate, userId)[1].hoursSlept} hours slept<br>
    ${userSleep.findUserWeeklyData(startDate, endDate, userId)[2].date}: ${userSleep.findUserWeeklyData(startDate, endDate, userId)[2].hoursSlept} hours slept<br>
    ${userSleep.findUserWeeklyData(startDate, endDate, userId)[3].date}: ${userSleep.findUserWeeklyData(startDate, endDate, userId)[3].hoursSlept} hours slept<br>
    ${userSleep.findUserWeeklyData(startDate, endDate, userId)[4].date}: ${userSleep.findUserWeeklyData(startDate, endDate, userId)[4].hoursSlept} hours slept<br>
    ${userSleep.findUserWeeklyData(startDate, endDate, userId)[5].date}: ${userSleep.findUserWeeklyData(startDate, endDate, userId)[5].hoursSlept} hours slept<br>
    ${userSleep.findUserWeeklyData(startDate, endDate, userId)[6].date}: ${userSleep.findUserWeeklyData(startDate, endDate, userId)[6].hoursSlept} hours slept<br>`
    var ctx = document.getElementById('sleepChart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        labels: ["16", "17", "18", "19", "20", "21", "22"],
        datasets: [{
            label: 'Hours of sleep',
            data: [6.1,5.3,4.2,6.7,10.5,7.7,10.9],
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
    todayHydration.innerHTML = `Today's hydration info: ${hydration.flOzOnAGivenDay(date)} ounces`
}

function displayTodayHydration(date) {
    todayHydration.innerHTML = `Today's you drank ${hydration.flOzOnAGivenDay(date)} ounces of water`
}

function displayWeeklyyHydration() {
    weekHydration.innerHTML = `Weekly hydration info: <br><br>
    ${(hydration.lastWeekOfWaterData()[0].date)}: ${hydration.lastWeekOfWaterData()[0].numOunces} ounces<br>
    ${(hydration.lastWeekOfWaterData()[1].date)}: ${hydration.lastWeekOfWaterData()[1].numOunces} ounces<br>
    ${(hydration.lastWeekOfWaterData()[2].date)}: ${hydration.lastWeekOfWaterData()[2].numOunces} ounces<br>
    ${(hydration.lastWeekOfWaterData()[3].date)}: ${hydration.lastWeekOfWaterData()[3].numOunces} ounces<br>
    ${(hydration.lastWeekOfWaterData()[4].date)}: ${hydration.lastWeekOfWaterData()[4].numOunces} ounces<br>
    ${(hydration.lastWeekOfWaterData()[5].date)}: ${hydration.lastWeekOfWaterData()[5].numOunces} ounces<br>
    ${(hydration.lastWeekOfWaterData()[6].date)}: ${hydration.lastWeekOfWaterData()[6].numOunces} ounces`
    var ctx = document.getElementById('hydrationChart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        labels: ["16", "17", "18", "19", "20", "21", "22"],
        datasets: [{
            label: 'Ounces of Water',
            data: [23,75,22,60,66,34,96],
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
    // ${activity.findSevenDayStepCount(startDate, endDate)}
    weekSteps.innerHTML = `Step counts for the past week: ${activity.findSevenDayStepCount(startDate, endDate)}`
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        labels: ["2019/09/15", "2019/09/16", "2019/09/17", "2019/09/18", "2019/09/19", "2019/09/20", "2019/09/21"],
        datasets: [{
            label: 'Number of Steps',
            data: [11067,4901,9974,12083,14000,5711,8072],
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
                    max: 16000,
                    // stepSize: 100,
                }
            }]
        }
    }
});
}

//------------------------------------------Onload
window.onload = displayNewUser();
window.onload = displayUserLastDayOfSleep("2019/09/22", currentUser.id);
window.onload = displayUserLastWeekOfSleep("2019/09/16", "2019/09/22", currentUser.id)
window.onload = displayAllTimeSleepAverages(currentUser.id);
window.onload = displayTodayHydration("2019/09/22");
window.onload = displayWeeklyyHydration();
window.onload = displayTodaySteps("2019/09/22", currentUser);
window.onload = displayTodayMinutesActive("2019/09/22");
window.onload = displayWeekSteps("2019/09/15", "2019/09/21");
window.onload = displayDate(date);