import { loadTodayList } from './loadTodayList';
import { createTodayList } from './createTodayList';
import { formToTask } from './formHelper';
//To do item, this should be one item out of a list or project
//I think overall project goals will be toDos.
let allTasks = []

const task = (title, description, dueDate) => {
	//this.complete = false;
	return { title, description, dueDate };
}

//Project that encompassed many toDos and lists them all together
//Right now I'm thinking daily lists and weekly lists will be part of projects.
const project = (name, complete) => {
	this.complete = false; 
	const index = [];
	return { name, index, complete };
}

const task1 = task("Walk dog", "Walk dog", "2020-04-28");
const task2 = task("R2D", "Walk dog", "2020-04-23");
const task3 = task("Workout", "Walk dog", "2020-04-28");
const task4 = task("Read", "Walk dog", "2020-04-21");
const task5 = task("Meditate", "Walk dog", "2020-04-28");
allTasks.push(task1);
allTasks.push(task2);
allTasks.push(task3);
allTasks.push(task4);
allTasks.push(task5);

let todayList = createTodayList(allTasks);
loadTodayList(todayList);
var submitButton = document.getElementById("submit-new-task");
submitButton.addEventListener('click', function() {
	var newTask = formToTask();
	allTasks.push(newTask);
	var container = document.getElementById('container');
	container.innerHTML = "";
	let todayList = createTodayList(allTasks);
	loadTodayList(todayList);
	console.log(allTasks);
});


export { task, project }


//I want the homepage to show a header and then my day's to-do's.
//A button should allow me to access weekly to-do and monthly projects
//As well I want to be able to view all projects
//Projects should have goals, but you should also be able to add a to-do goal free.
//Today's list should automatically give every task due today.