import { createTodayList, createList } from './createTodayList';
import { todayList, weeklyList, allTasks } from './index'
import { isToday, isThisWeek } from 'date-fns';
import { divClear } from './tabHelper';

function loadTodayList (todayList) {
	var h = document.createElement("h2");
	h.innerHTML = "Today\'s List";
	var ul = document.createElement("ul");
	ul.setAttribute("id", "todays-list");
	for (var i = 0; i < todayList.length; i++) {
		let title = todayList[i].title;
		var li = document.createElement("li");
		li.setAttribute('class', 'today-task');
		li.setAttribute('id', title);
		li.textContent = title;
		var checkBox = document.createElement("input");
		checkBox.setAttribute('type', 'checkbox');
		var deleteButton = document.createElement("button");
		deleteButton.setAttribute('class', 'delete-task-button');
		deleteButton.textContent = "Delete Task";
		li.appendChild(checkBox);
		li.appendChild(deleteButton);
		ul.appendChild(li);
	}
	container = document.getElementById('container');
	container.appendChild(h);
	container.appendChild(ul);
	var deleteButtons = document.getElementsByClassName('delete-task-button');
	for (var y = 0; y < deleteButtons.length; y++){
		deleteButtons[y].addEventListener('click', function(){
				for (var x = 0; x < allTasks.length; x++) {
					var id = deleteButtons.parentNode.id;
					console.log(id);
					if (allTasks[x].title == id) {
						allTasks.splice(x, 1);
					}
				}
	}
			let todayList = createList(allTasks, isToday);
			divClear();
			loadTodayList(todayList);
			console.log(allTasks);
		};
}

function loadWeeklyList (weeklyList) {
	var h = document.createElement("h2");
	h.innerHTML = "This Week\'s List";
	var ul = document.createElement("ul");
	ul.setAttribute("id", "weekly-list");
	for (var i = 0; i < weeklyList.length; i++) {
		let title = weeklyList[i].title;
		var li = document.createElement("li");
		li.setAttribute('class', 'weekly-task');
		li.textContent = title;
		var checkBox = document.createElement("input");
		checkBox.setAttribute('type', 'checkbox');
		var deleteButton = document.createElement("button");
		deleteButton.setAttribute('id', 'delete-task-button');
		deleteButton.textContent = "Delete Task";
		deleteButton.addEventListener('click', function(){
			deleteButton.parentNode.parentNode.removeChild(deleteButton.parentNode);
		});
		li.appendChild(checkBox);
		li.appendChild(deleteButton);
		ul.appendChild(li);
	}
	container = document.getElementById('container');
	container.appendChild(h);
	container.appendChild(ul);
}

export { loadTodayList, loadWeeklyList }

//Effectively, this is what should load inside the container div:
/* 
		<h2>Today's List</h2>
		<ul id="todays-list">
			<li class="today-task">Walk dog</li>
			<li class="today-task">Code</li>
			<li class="today-task">Work out</li>
			<li class="today-task">Hang w/ T&D</li>
		</ul>
		<input id="add-task-form"></input>
		<button id="add-task-button">Add Task</button>*/