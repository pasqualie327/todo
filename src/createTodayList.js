import { task } from './index';

function createTodayList(tasks) {
	var todayList = [];
	for (var i = 0; i < tasks.length; i++){
		//log call returns the object here
		let task = tasks[i];
		if (task.dueDate == "2020-04-28") {
			todayList.push(task);
		}
	}
	return todayList;
}

export { createTodayList }

