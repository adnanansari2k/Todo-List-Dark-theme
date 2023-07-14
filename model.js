let todayDate = 0;
let todayMonth = 0
let todayYear = 0
let todayDay = 0
export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
export const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
export function getTodayDate() {
  const date = new Date();
  todayDate = date.getDate();
  todayMonth = date.getMonth();
  todayYear = date.getFullYear()
  todayDay = date.getDay()
  return {
      todayDay:daysOfWeek[todayDay],
      todayYear,
      todayMonth:months[todayMonth],
      todayDate,
   }
  
}
getTodayDate()
export const state = {
   day:getTodayDate(),
   currentDate:todayDate,
   currentDay:daysOfWeek[todayDay],
   currentYear:todayYear,
   currentMonth:months[todayMonth],
   dayStatus:`Today's`,
   allTasks:[],
   tasks:[]
}
function idGenrate(){
   let id = Math.random() + ''
   state.allTasks.forEach(task=>{
      task.id = id
   })
}

function init(){
   
   let storage = localStorage.getItem('Tasks')
   if (storage) state.allTasks = JSON.parse(storage)
}
init()