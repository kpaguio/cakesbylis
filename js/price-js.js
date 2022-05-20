import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getDatabase, ref, set, child, get, update, remove } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

    const firebaseConfig = {
      apiKey: "AIzaSyCoaEAxSCPdZCSNtmfN-dyFbAMxidaa3-8",
      authDomain: "se2project-9167c.firebaseapp.com",
      databaseURL: "https://se2project-9167c-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "se2project-9167c",
      storageBucket: "se2project-9167c.appspot.com",
      messagingSenderId: "64666107569",
      appId: "1:64666107569:web:69bdce0cc7aa1c54b42c90"
    };
  
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);
    const dbRef = ref(db)

    
	var price1, price2, price3, price4; //Single Layer Variables
	var price5, price6; //Two Layers Variables
	var price7, price8 //Three Layers Variables
	var price9, price10 //Four Layers Variables
	var price11, price12 //Five Layers Variables
	var price13, price14 //Cupcakes Variables
	var price15; //Cupcake Tower Package
	var price16, price17; //Mini Cake
	
	//Single Layer
  	get(child(dbRef,"Price List/Single Layer")).then((snapshot)=>{
		if(snapshot.exists()){
			price1 = snapshot.val().Price1SL;
			price2 = snapshot.val().Price2SL;
			price3 = snapshot.val().Price3SL;
			price4 = snapshot.val().Price4SL;
			document.getElementById("price1").innerHTML = price1;
			document.getElementById("price2").innerHTML = price2;
			document.getElementById("price3").innerHTML = price3;
			document.getElementById("price4").innerHTML = price4;
		}
		else{
			alert("no data found");
		}
	})
	.catch((error)=>{
		alert("unsuccessful,error"+error);
	});
	
	//Two Layers
	get(child(dbRef,"Price List/Two Layers/Price-2L")).then((snapshot)=>{
		if(snapshot.exists()){
			price5 = snapshot.val().WholeCakeEdible;
			price6 = snapshot.val().BottomLayerEdible;
			document.getElementById("price5").innerHTML = price5;
			document.getElementById("price6").innerHTML = price6;
		}
		else{
			alert("no data found");
		}
	})
	.catch((error)=>{
		alert("unsuccessful,error"+error);
	});
	
	//Three Layers
	get(child(dbRef,"Price List/Three Layers/Price-3L")).then((snapshot)=>{
		if(snapshot.exists()){
			price7 = snapshot.val().WholeCakeEdible;
			price8 = snapshot.val().BottomLayerEdible;
			document.getElementById("price7").innerHTML = price7;
			document.getElementById("price8").innerHTML = price8;
		}
		else{
			alert("no data found");
		}
	})
	.catch((error)=>{
		alert("unsuccessful,error"+error);
	});

	//Four Layers
	get(child(dbRef,"Price List/Four Layers/Price-4L")).then((snapshot)=>{
		if(snapshot.exists()){
			price9 = snapshot.val().WholeCakeEdible;
			price10 = snapshot.val().BottomLayerEdible;
			document.getElementById("price9").innerHTML = price9;
			document.getElementById("price10").innerHTML = price10;
		}
		else{
			alert("no data found");
		}
	})
	.catch((error)=>{
		alert("unsuccessful,error"+error);
	});
	
	//Five Layers
	get(child(dbRef,"Price List/Five Layers/Price-5L")).then((snapshot)=>{
		if(snapshot.exists()){
			price11 = snapshot.val().WholeCakeEdible;
			price12 = snapshot.val().BottomLayerEdible;
			document.getElementById("price11").innerHTML = price11;
			document.getElementById("price12").innerHTML = price12;
		}
		else{
			alert("no data found");
		}
	})
	.catch((error)=>{
		alert("unsuccessful,error"+error);
	});
	
	//Cupcakes
	get(child(dbRef,"Price List/Cupcakes/With Customized Topper")).then((snapshot)=>{
		if(snapshot.exists()){
			price13 = snapshot.val().WithIndividualPackaging;
			price14 = snapshot.val().WithoutIndividualPackaging;
			document.getElementById("price13").innerHTML = price13;
			document.getElementById("price14").innerHTML = price14;
		}
		else{
			alert("no data found");
		}
	})
	.catch((error)=>{
		alert("unsuccessful,error"+error);
	});
	
	//Cupcakes Tower Package
	get(child(dbRef,"Price List/Cupcake Tower Package")).then((snapshot)=>{
		if(snapshot.exists()){
			price15 = snapshot.val().CTP;
			document.getElementById("price15").innerHTML = price15;
		}
		else{
			alert("no data found");
		}
	})
	.catch((error)=>{
		alert("unsuccessful,error"+error);
	});
	
	//Mini Cake
	get(child(dbRef,"Price List/Mini Cake/With Customized Topper & Packaging")).then((snapshot)=>{
		if(snapshot.exists()){
			price16 = snapshot.val().PriceMC1;
			price17 = snapshot.val().PriceMC2;
			document.getElementById("price16").innerHTML = price16;
			document.getElementById("price17").innerHTML = price17;
		}
		else{
			alert("no data found");
		}
	})
	.catch((error)=>{
		alert("unsuccessful,error"+error);
	});