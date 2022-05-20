var firebaseConfig = {
		apiKey: "AIzaSyCoaEAxSCPdZCSNtmfN-dyFbAMxidaa3-8",
		authDomain: "se2project-9167c.firebaseapp.com",
		databaseURL: "https://se2project-9167c-default-rtdb.asia-southeast1.firebasedatabase.app",
		projectId: "se2project-9167c",
		storageBucket: "se2project-9167c.appspot.com",
		messagingSenderId: "64666107569",
		appId: "1:64666107569:web:69bdce0cc7aa1c54b42c90"
		};
		// Initialize Firebase
		firebase.initializeApp(firebaseConfig);

		  
//signOut

		  
		  const auth =  firebase.auth();
		  firebase.auth().onAuthStateChanged((user)=>{
		  	  
		      var email1 = user.email;
		      if(email1 == 'admin@cakesbylis.com'){
		  	      
		      }
		      else{
		    	  document.getElementById("price-div").style.display = "none";
		    	  document.getElementById("order-div").style.display = "none";
		  	      
		      }
		    })
		    
		    function signOut(){
		    auth.signOut();
		    alert("Sign Out Successfully from System");
		    window.location.href="index.html";
		  }
		  

			    
			    
			  

			  