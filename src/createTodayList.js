import { task, todayList, weeklyList } from './index';
import { isToday, isThisWeek, toDate } from 'date-fns';

//Create the list of today's tasks from the master task list.
function createTodayList(tasks) {
	var todayList = [];
	for (var i = 0; i < tasks.length; i++){
		let task = tasks[i];
		task.dueDate = new Date(task.dueDate);
		var date = task.dueDate;
		date = (date.getTime() - task.dueDate.getTimezoneOffset() * -60000);
		date = toDate(date);
		if (isToday(date)) {
			todayList.push(task);
		}
	}
	return todayList;
}


//Same but weekly
function createWeeklyList(tasks) {
	var weeklyList = [];
	for (var i = 0; i < tasks.length; i++){
		let task = tasks[i];
		task.dueDate = new Date(task.dueDate);
		var date = task.dueDate;
		date = (date.getTime() - task.dueDate.getTimezoneOffset() * -60000);
		date = toDate(date);
		if (isThisWeek(date)) {
			weeklyList.push(task);
		}
	}
	return weeklyList;
}

//General list creator, using this in index now
function createList(tasks, checker) {
	var list = [];
	for (var i = 0; i < tasks.length; i++){
		let task = tasks[i];
		task.dueDate = new Date(task.dueDate);
		var date = task.dueDate;
		date = (date.getTime() - task.dueDate.getTimezoneOffset() * -60000);
		date = toDate(date);
		if (checker(date)) {
			list.push(task);
		}
	}
	return list;
}

export { createTodayList, createWeeklyList, createList }

