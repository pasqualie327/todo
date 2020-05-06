import { loadTodayList, loadWeeklyList } from './loadTodayList';
import { createTodayList } from './createTodayList';
import { todayList, weeklyList } from './index.js';

function divClear() {
	var container = document.getElementById('container');
	container.innerHTML = "";
}

function tabSwitch(tab) {
	if (tab.textContent == "Daily") {
		loadTodayList(todayList);
	} else if (tab.textContent == "Weekly") {
		loadWeeklyList(weeklyList);
	} else if (tab.textContent == "Monthly") {
		loadMonthlyList(monthlyList);
	}
}

export { divClear, tabSwitch }