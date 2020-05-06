import { loadTodayList, loadWeeklyList } from './loadTodayList';
import { createTodayList, createList } from './createTodayList';
import { formToTask } from './formHelper';
import { isToday, isThisWeek, toDate } from 'date-fns';
import { divClear, tabSwitch } from './tabHelper';
//To do item, this should be one item out of a list or project
//I think overall project goals will be toDos.
let allTasks = []

const task = (title, description, dueDate) => {
	const complete = false;
	return { title, description, dueDate, complete };
}

//Project that encompassed many toDos and lists them all together
//Right now I'm thinking daily lists and weekly lists will be part of projects.
const project = (name, description, dueDate) => {
	const complete = false; 
	const steps = [];
	return { name, description, dueDate, steps, complete };
}

const task1 = task("Walk dog", "Walk dog", "2020-05-01");
const task2 = task("R2D", "Walk dog", "2020-04-28");
const task3 = task("Workout", "Walk dog", "2020-05-01");
const task4 = task("Read", "Walk dog", "2020-05-03");
const task5 = task("Meditate", "Walk dog", "2020-05-01");
allTasks.push(task1);
allTasks.push(task2);
allTasks.push(task3);
allTasks.push(task4);
allTasks.push(task5);

//Load functions for home page
let todayList = createList(allTasks, isToday);
let weeklyList = createList(allTasks, isThisWeek);
loadTodayList(todayList);
var submitButton = document.getElementById("submit-new-task");
submitButton.addEventListener('click', function() {
	var newTask = formToTask();
	allTasks.push(newTask);
	var container = document.getElementById('container');
	container.innerHTML = "";
	let todayList = createList(allTasks, isToday);
	loadTodayList(todayList);
});

//Tab switching logic
var dailyTab = document.getElementById('daily-label');
dailyTab.addEventListener('click', function() {
	divClear();
	let todayList = createList(allTasks, isToday);
	loadTodayList(todayList);

});

var weeklyTab = document.getElementById('weekly-label');
weeklyTab.addEventListener('click', function(){
	divClear();
	let weeklyList = createList(allTasks, isThisWeek);
	loadWeeklyList(weeklyList);
});





export { task, project, todayList, weeklyList, allTasks }


//I want the homepage to show a header and then my day's to-do's. DONE
//A button should allow me to access weekly to-do and monthly projects
//As well I want to be able to view all projects
//Projects should have goals, but you should also be able to add a to-do goal free.
//Today's list should automatically give every task due today.