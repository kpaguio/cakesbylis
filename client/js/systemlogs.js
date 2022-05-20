import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
import { getDatabase, ref, push, child, update } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";

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
const auth = getAuth(firebase);

export function SavetoLogs(msg, order = false){
	// User is the name of the account used
	// Message is the message to be saved
	// This function saves the message to the database with the format:
	// YYYY-MM-DD - HH:MM - User:  Message
	// 18-03-2022 - 19:53 - Admin: "Created System logs"
	// Make sure Message and User are both strings
	var currentdate = new Date();
	var datetime = currentdate.getFullYear() + "-"
				+ ( "0" + (currentdate.getMonth()+1)).slice(-2) + "-"
				+ ( "0" + currentdate.getDate()).slice(-2) + " - "  
	            + currentdate.getHours() + ":"  
	            + currentdate.getMinutes() + " - ";
	var monthyear = (currentdate.getMonth()+1) + " - " + currentdate.getFullYear();
	var logs;
	if(order == true){
		logs = datetime + "Order was made by " + msg;
	}
	else{
		const user = auth.currentUser;
		logs = datetime + user.email.replace("@cakesbylis.com", "") + ": " + msg;
	}
	const data = {
		Message : logs
	};
	// Create unique ID for log
  	const newPostKey = push(child(ref(db), 'Logs')).key;
  	// Update logs tree with the unique identifier with the data
  	const updates = {};
  	updates['/Logs/' + monthyear + "/" + newPostKey] = data;
	update(ref(db), updates);
}