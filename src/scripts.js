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

//----------------------------Class Instantiations
let userRepository = new UserRepository(userData);
let currentUser = new User(userRepository.returnData(20))
let sleepRepository = new SleepRepository(sleepData);
let userSleep = new UserSleep(sleepData);
let activityRepository = new ActivityRepository(activityData);
let activity = new Activity(activityRepository.allDataOfOneUser(1));
let hydrationRepository = new HydrationRepository(hydrationData);
let hydration = new Hydration(hydrationRepository.returnData(20));

// var ctx = document.getElementById('myChart').getContext('2d');
// var chart = new Chart(ctx, {
//     // The type of chart we want to create
//     type: 'line',

//     // The data for our dataset
//     data: {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [{
//             label: 'My First dataset',
//             backgroundColor: 'rgb(255, 99, 132)',
//             borderColor: 'rgb(255, 99, 132)',
//             data: [0, 10, 5, 2, 20, 30, 45]
//         }]
//     },

//     // Configuration options go here
//     options: {}
// });

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
    weekSleep.innerHTML = `<p>Sleep insights for the past week: ${userSleep.findUserWeeklyData(startDate, endDate, userId)}</p>`
}

function displayAllTimeSleepAverages(user) {
    avgSleep.innerHTML = `<p>Average sleep quality: ${userSleep.findAvgDailySleepQuality(user)}</p>
    <p>Average hours slept: ${userSleep.findAvgDailySleep(user)}</p>`
}

function displayTodayHydration(date) {
    todayHydration.innerHTML = `Today's hydration info: ${hydration.flOzOnAGivenDay(date)} ounces`
}

function displayTodayHydration(date) {
    todayHydration.innerHTML = `Today's hydration info: ${hydration.flOzOnAGivenDay(date)} ounces`
}

function displayWeeklyyHydration() {
    weekHydration.innerHTML = `Weekly hydration info: ${hydration.lastWeekOfWaterData()}`
}

//------------------------------------------Onload
window.onload = displayNewUser();
window.onload = displayUserLastDayOfSleep("2019/09/22", currentUser.id);
window.onload = displayUserLastWeekOfSleep("2019/09/15", "2019/09/22", currentUser.id)
window.onload = displayAllTimeSleepAverages(currentUser.id);
window.onload = displayTodayHydration("2019/09/22");
window.onload = displayWeeklyyHydration();

/*

*/
