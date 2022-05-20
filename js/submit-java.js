import { initializeApp} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
    import { getDatabase, ref, set, child, get, update, remove } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-database.js";

   // Your web app's Firebase configuration
    const firebaseConfig = {
    	      apiKey: "AIzaSyCoaEAxSCPdZCSNtmfN-dyFbAMxidaa3-8",
    	      authDomain: "se2project-9167c.firebaseapp.com",
    	      databaseURL: "https://se2project-9167c-default-rtdb.asia-southeast1.firebasedatabase.app",
    	      projectId: "se2project-9167c",
    	      storageBucket: "se2project-9167c.appspot.com",
    	      messagingSenderId: "64666107569",
    	      appId: "1:64666107569:web:69bdce0cc7aa1c54b42c90"
    	    };

	var num = sessionStorage.getItem("num");
	document.getElementById("refNum").innerHTML = num;
	console.log(num)

    
     