import { task } from './index.js';

	function formToTask() {
	var titles = document.getElementById("task-name").value;
	var descriptions = "";
	var dueDates = document.getElementById("task-due-date").value;	
	var tasks = task(titles, descriptions, dueDates);

	return tasks;
}

export { formToTask }

