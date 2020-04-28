import { task } from './index';

function createTodayList(tasks) {
	var todayList = [];
	for (var i = 0; i < tasks.length; i++){
		//log call returns the object here
		let task = tasks[i];
		if (task.dueDate == "Apr 24") {
			todayList.push(task);
		}
	}
	return todayList;
}

export { createTodayList }

