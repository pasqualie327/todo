import { createTodayList } from './createTodayList';

function loadTodayList (todayList) {
	var h = document.createElement("h2");
	h.innerHTML = "Today\'s List";
	var ul = document.createElement("ul");
	ul.setAttribute("id", "todays-list");
	for (var i = 0; i < todayList.length; i++) {
		let title = todayList[i].title;
		var li = document.createElement("li");
		li.setAttribute('class', 'today-task');
		li.textContent = title;
		ul.appendChild(li);
	}
	container = document.getElementById('container');
	container.appendChild(h);
	container.appendChild(ul);
}

export { loadTodayList }

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