import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-database.js";

const firebaseConfig = {
		apiKey: "AIzaSyCoaEAxSCPdZCSNtmfN-dyFbAMxidaa3-8",
	    authDomain: "se2project-9167c.firebaseapp.com",
	    databaseURL: "https://se2project-9167c-default-rtdb.asia-southeast1.firebasedatabase.app",
	    projectId: "se2project-9167c",
	    storageBucket: "se2project-9167c.appspot.com",
	    messagingSenderId: "64666107569",
	    appId: "1:64666107569:web:69bdce0cc7aa1c54b42c90"
}; 

const firebase = initializeApp(firebaseConfig);
const db = getDatabase(firebase);


// Should readjust code for it to only go through the logs in the month
// Search is for the day
// Allow another input to call for the month they want to view
function addRows(date){ 
	const dbref = ref(db, "Logs/");
	// Array has the structure of [ Date, Time, Message, CompleteLog ]
	const AllLogs = [];
	onValue(dbref, (snapshot) => {
		// Logs for each month
		snapshot.forEach((LogPerMonth) => {
			// Logs in that month
			LogPerMonth.forEach((LogPerDay) => {
				// JSON object of the data
	    		const childData = LogPerDay.toJSON();
	    		// JSON object converted into string
	    		const valuesOnly = Object.values(childData).toString();
	    		// String split up
	    		const splitUp = valuesOnly.split(" - ");
	    		const individualLog = [
					splitUp[0],
					splitUp[1],
					splitUp[2],
					valuesOnly
				];
				// console.log(valuesOnly);
	    		AllLogs.push(individualLog);
			});
		});
		var table = document.getElementById("logTableBody");
		AllLogs.forEach(function(Log, index) {
			var row = table.insertRow(index);
			var date = row.insertCell(0);
			var time = row.insertCell(1);
			var msg = row.insertCell(2);
			date.innerHTML = Log[0];
			time.innerHTML = Log[1];
			msg.innerHTML = Log[2];			
		});
	});
}
function Search(){
	// Gets the date given in the search box
	const value = document.getElementById("Searchbar").value;
	const table = document.getElementById("logTableBody");
	if(!value){
		for (var i = 0, row; row = table.rows[i]; i++) {
			row.style.display = "";
		}
		return;
	}
	else{
		for (var i = 0, row; row = table.rows[i]; i++) {
			const rowDate = row.cells[0].innerHTML;
			if(value !== rowDate){
				row.style.display = "none";
			}
			else{
				row.style.display = "";
			}
		}
		return;
	}
}
document.getElementById("Searchbtn").onclick = Search;
addRows();