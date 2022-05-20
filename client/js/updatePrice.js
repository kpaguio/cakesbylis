import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getDatabase, ref, set, child, get, update, remove } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
import { SavetoLogs } from "../js/systemlogs.js"

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
	
	//Price 1
	var editButt1 = document.getElementById("edit1");
    var saveButt1 = document.getElementById("save1");
    var editText1 = document.getElementById("price1");
    var editText2 = document.getElementById("price2");
    var editText3 = document.getElementById("price3");
    var editText4 = document.getElementById("price4");
    
    //Price 2
    var editButt2 = document.getElementById("edit2");
    var saveButt2 = document.getElementById("save2");
    var editText5 = document.getElementById("price5");
    var editText6 = document.getElementById("price6");
    
    //Price 3
    var editButt3 = document.getElementById("edit3");
    var saveButt3 = document.getElementById("save3");
    var editText7 = document.getElementById("price7");
    var editText8 = document.getElementById("price8");
    
    //Price 4
    var editButt4 = document.getElementById("edit4");
    var saveButt4 = document.getElementById("save4");
    var editText9 = document.getElementById("price9");
    var editText10 = document.getElementById("price10");
    
    //Price 5
    var editButt5 = document.getElementById("edit5");
    var saveButt5 = document.getElementById("save5");
    var editText11 = document.getElementById("price11");
    var editText12 = document.getElementById("price12");
    
    //Price 6
    var editButt6 = document.getElementById("edit6");
    var saveButt6 = document.getElementById("save6");
    var editText13 = document.getElementById("price13");
    var editText14 = document.getElementById("price14");
    
    //Price 7
    var editButt7 = document.getElementById("edit7");
    var saveButt7 = document.getElementById("save7");
    var editText15 = document.getElementById("price15");
    
    //Price 8
    var editButt8 = document.getElementById("edit8");
    var saveButt8 = document.getElementById("save8");
    var editText16 = document.getElementById("price16");
    var editText17 = document.getElementById("price17");
   
    //Button 1
    function EditButton1()
    {
		save1.disabled = false;
		edit1.disabled = true;
		
		editText1.contentEditable = true;
		editText1.onkeypress = function(event){
			if((event.keyCode >= 48 && event.keyCode <= 57)){
    			return true;
  			}
  			else {
    			return false;
  			}
		}
		editText2.contentEditable = true;
		editText2.onkeypress = function(event){
			if((event.keyCode >= 48 && event.keyCode <= 57)) {
    			return true;
  			} 
  			else {
    			return false;
  			}
		}
		editText3.contentEditable = true;
		editText3.onkeypress = function(event){
			if((event.keyCode >= 48 && event.keyCode <= 57)) {
    			return true;
  			} 
  			else {
    			return false;
  			}
		}
		editText4.contentEditable = true;
		editText4.onkeypress = function(event){
			if((event.keyCode >= 48 && event.keyCode <= 57)) {
    			return true;
  			} 
  			else {
    			return false;
  			}
		}
		
		editText1.style.backgroundColor = "white";
		editText2.style.backgroundColor = "white";
		editText3.style.backgroundColor = "white";
		editText4.style.backgroundColor = "white";
	}
	function SaveButton1()
	{
			editText1.contentEditable = false;
			editText2.contentEditable = false;
			editText3.contentEditable = false;
			editText4.contentEditable = false;
		
			editText1.style.backgroundColor = "transparent";
			editText2.style.backgroundColor = "transparent";
			editText3.style.backgroundColor = "transparent";
			editText4.style.backgroundColor = "transparent";
		
			save1.disabled= true;
			edit1.disabled = false;
			update(ref(db, "Price List/Single Layer"),{
				Price1SL:	editText1.innerHTML,
				Price2SL:	editText2.innerHTML,
				Price3SL:	editText3.innerHTML,
				Price4SL: 	editText4.innerHTML,
				})
		.then(()=>{
			
			SavetoLogs("Single Layer 6x6 or 7x5 was updated with a new price of " + editText1.innerHTML);
			SavetoLogs("Single Layer 8x6 was updated with a new price of " + editText2.innerHTML);
			SavetoLogs("Single Layer 10x6 was updated with a new price of " + editText3.innerHTML);
			SavetoLogs("Single Layer 12x6 was updated with a new price of " + editText4.innerHTML);
			alert("Data Updated.");
		})
		.catch((error)=>{
			alert("Error. Data Update Failed."+error);
		})
	}
	
	//Button 2
	function EditButton2()
	{
		save2.disabled= false;
		edit2.disabled= true;
		
		editText5.contentEditable = true;
		editText5.onkeypress = function(event){
			if((event.keyCode >= 48 && event.keyCode <= 57)) {
    			return true;
  			} 
  			else {
    			return false;
  			}
		}
		editText6.contentEditable = true;
		editText6.onkeypress = function(event){
			if((event.keyCode >= 48 && event.keyCode <= 57)) {
    			return true;
  			} 
  			else {
    			return false;
  			}
		}
		
		editText5.style.backgroundColor = "white";
		editText6.style.backgroundColor = "white";
	}
	function SaveButton2()
	{
		editText5.contentEditable = false;
		editText6.contentEditable = false;

		editText5.style.backgroundColor = "transparent";
		editText6.style.backgroundColor = "transparent";
		
		save2.disabled= true;
		edit2.disabled = false;
		update(ref(db, "Price List/Two Layers/Price-2L"),{
			WholeCakeEdible:	editText5.innerHTML,
			BottomLayerEdible:	editText6.innerHTML,
		})
		.then(()=>{
			SavetoLogs("Two Layer was updated with a new price of " + editText5.innerHTML + " for the whole cake as edible");
			SavetoLogs("Two Layer was updated with a new price of " + editText6.innerHTML + " for the bottom layer as edible");
			alert("Data Updated.");
		})
		.catch((error)=>{
			alert("Error. Data Update Failed."+error);
		})
		
	}
	
	//Button 3
	function EditButton3()
	{
		save3.disabled= false;
		edit3.disabled= true;
		
		editText7.contentEditable = true;
		editText7.onkeypress = function(event){
			if((event.keyCode >= 48 && event.keyCode <= 57)) {
    			return true;
  			} 
  			else {
    			return false;
  			}
		}
		editText8.contentEditable = true;
		editText8.onkeypress = function(event){
			if((event.keyCode >= 48 && event.keyCode <= 57)) {
    			return true;
  			} 
  			else {
    			return false;
  			}
		}
		
		editText7.style.backgroundColor = "white";
		editText8.style.backgroundColor = "white";
	}
	function SaveButton3()
	{
		editText7.contentEditable = false;
		editText8.contentEditable = false;

		editText7.style.backgroundColor = "transparent";
		editText8.style.backgroundColor = "transparent";
		
		save3.disabled= true;
		edit3.disabled = false;
		update(ref(db, "Price List/Three Layers/Price-3L"),{
			WholeCakeEdible:	editText7.innerHTML,
			BottomLayerEdible:	editText8.innerHTML,
		})
		.then(()=>{
			SavetoLogs("Three Layer was updated with a new price of " + editText7.innerHTML + " for the whole cake as edible");
			SavetoLogs("Three Layer was updated with a new price of " + editText8.innerHTML + " for the bottom layer as edible");
			alert("Data Updated.");
		})
		.catch((error)=>{
			alert("Error. Data Update Failed."+error);
		})
		
	}
	
	//Button 4
	function EditButton4()
	{
		save4.disabled= false;
		edit4.disabled= true;
		
		editText9.contentEditable = true;
		editText9.onkeypress = function(event){
			if((event.keyCode >= 48 && event.keyCode <= 57)) {
    			return true;
  			} 
  			else {
    			return false;
  			}
		}
		editText10.contentEditable = true;
		editText10.onkeypress = function(event){
			if((event.keyCode >= 48 && event.keyCode <= 57)) {
    			return true;
  			} 
  			else {
    			return false;
  			}
		}
		
		editText9.style.backgroundColor = "white";
		editText10.style.backgroundColor = "white";
	}
	function SaveButton4()
	{
		editText9.contentEditable = false;
		editText10.contentEditable = false;

		editText9.style.backgroundColor = "transparent";
		editText10.style.backgroundColor = "transparent";
		
		save4.disabled= true;
		edit4.disabled = false;
		update(ref(db, "Price List/Four Layers/Price-4L"),{
			WholeCakeEdible:	editText9.innerHTML,
			BottomLayerEdible:	editText10.innerHTML,
		})
		.then(()=>{
			SavetoLogs("Four Layer was updated with a new price of " + editText9.innerHTML + " for the whole cake as edible");
			SavetoLogs("Four Layer was updated with a new price of " + editText10.innerHTML + " for the bottom layer as edible");
			alert("Data Updated.");
			// SaveToLogs();
		})
		.catch((error)=>{
			alert("Error. Data Update Failed."+error);
		})
		
	}
	
	//Button 5
	function EditButton5()
	{
		save5.disabled= false;
		edit5.disabled= true;
		
		editText11.contentEditable = true;
		editText11.onkeypress = function(event){
			if((event.keyCode >= 48 && event.keyCode <= 57)) {
    			return true;
  			} 
  			else {
    			return false;
  			}
		}
		editText12.contentEditable = true;
		editText12.onkeypress = function(event){
			if((event.keyCode >= 48 && event.keyCode <= 57)) {
    			return true;
  			} 
  			else {
    			return false;
  			}
		}
		
		editText11.style.backgroundColor = "white";
		editText12.style.backgroundColor = "white";
	}
	function SaveButton5()
	{
		editText11.contentEditable = false;
		editText12.contentEditable = false;

		editText11.style.backgroundColor = "transparent";
		editText12.style.backgroundColor = "transparent";
		
		save5.disabled= true;
		edit5.disabled = false;
		update(ref(db, "Price List/Five Layers/Price-5L"),{
			WholeCakeEdible:	editText11.innerHTML,
			BottomLayerEdible:	editText12.innerHTML,
		})
		.then(()=>{
			SavetoLogs("Five Layer was updated with a new price of " + editText11.innerHTML + " for the whole cake as edible");
			SavetoLogs("Five Layer was updated with a new price of " + editText12.innerHTML + " for the bottom layer as edible");
			alert("Data Updated.");
		})
		.catch((error)=>{
			alert("Error. Data Update Failed."+error);
		})
		
	}
	
	//Button 6
	function EditButton6()
	{
		save6.disabled= false;
		edit6.disabled= true;
		
		editText13.contentEditable = true;
		editText13.onkeypress = function(event){
			if((event.keyCode >= 48 && event.keyCode <= 57)) {
    			return true;
  			} 
  			else {
    			return false;
  			}
		}
		editText14.contentEditable = true;
		editText14.onkeypress = function(event){
			if((event.keyCode >= 48 && event.keyCode <= 57)) {
    			return true;
  			} 
  			else {
    			return false;
  			}
		}
		
		editText13.style.backgroundColor = "white";
		editText14.style.backgroundColor = "white";
	}
	function SaveButton6()
	{
		editText13.contentEditable = false;
		editText14.contentEditable = false;

		editText13.style.backgroundColor = "transparent";
		editText14.style.backgroundColor = "transparent";
		
		save6.disabled= true;
		edit6.disabled = false;
		update(ref(db, "Price List/Cupcakes/With Customized Topper"),{
			WithIndividualPackaging:	editText13.innerHTML,
			WithoutIndividualPackaging:	editText14.innerHTML,
		})
		.then(()=>{
			SavetoLogs("Cupcakes was updated with a new price of " + editText13.innerHTML + " without the individual packaging");
			SavetoLogs("Cupcakes was updated with a new price of " + editText14.innerHTML + " with the individual packaging");
			alert("Data Updated.");
		})
		.catch((error)=>{
			alert("Error. Data Update Failed."+error);
		})
		
	}
	
	//Button 7
	function EditButton7()
	{
		save7.disabled= false;
		edit7.disabled= true;
		
		editText15.contentEditable = true;
		editText15.onkeypress = function(event){
			if((event.keyCode >= 48 && event.keyCode <= 57)) {
    			return true;
  			} 
  			else {
    			return false;
  			}
		}
		
		editText15.style.backgroundColor = "white";
	}
	function SaveButton7()
	{
		editText15.contentEditable = false;
		
		editText15.style.backgroundColor = "transparent";
		
		save7.disabled= true;
		edit7.disabled = false;
		update(ref(db, "Price List/Cupcake Tower Package"),{
			CTP:	editText15.innerHTML,
		})
		.then(()=>{
			SavetoLogs("Cupcake Tower Package was updated with a new price of " + editText15.innerHTML);
			alert("Data Updated.");
		})
		.catch((error)=>{
			alert("Error. Data Update Failed."+error);
		})
		
	}
	
	//Button 8
	function EditButton8()
	{
		save8.disabled= false;
		edit8.disabled= true;
		
		editText16.contentEditable = true;
		editText16.onkeypress = function(event){
			if((event.keyCode >= 48 && event.keyCode <= 57)) {
    			return true;
  			} 
  			else {
    			return false;
  			}
		}
		editText17.contentEditable = true;
		editText17.onkeypress = function(event){
			if((event.keyCode >= 48 && event.keyCode <= 57)) {
    			return true;
  			} 
  			else {
    			return false;
  			}
		}
		
		editText16.style.backgroundColor = "white";
		editText17.style.backgroundColor = "white";
	}
	function SaveButton8()
	{
		editText16.contentEditable = false;
		editText17.contentEditable = false;

		editText16.style.backgroundColor = "transparent";
		editText17.style.backgroundColor = "transparent";
		
		save8.disabled= true;
		edit8.disabled = false;
		update(ref(db, "Price List/Mini Cake/With Customized Topper & Packaging"),{
			PriceMC1:	editText16.innerHTML,
			PriceMC2:	editText17.innerHTML,
		})
		.then(()=>{
			SavetoLogs("Mini Cake 3x2 was updated with a new price of " + editText16.innerHTML + " ");
			SavetoLogs("Mini Cake 4x3was updated with a new price of " + editText17.innerHTML + " ");
			alert("Data Updated.");
		})
		.catch((error)=>{
			alert("Error. Data Update Failed."+error);
		})
		
	}
	
	//Button Functions
    editButt1.addEventListener('click', EditButton1);
	saveButt1.addEventListener('click',SaveButton1);
	editButt2.addEventListener('click', EditButton2);
	saveButt2.addEventListener('click',SaveButton2);
	editButt3.addEventListener('click', EditButton3);
	saveButt3.addEventListener('click',SaveButton3);
	editButt4.addEventListener('click', EditButton4);
	saveButt4.addEventListener('click',SaveButton4);
	editButt5.addEventListener('click', EditButton5);
	saveButt5.addEventListener('click',SaveButton5);
	editButt6.addEventListener('click', EditButton6);
	saveButt6.addEventListener('click',SaveButton6);
	editButt7.addEventListener('click', EditButton7);
	saveButt7.addEventListener('click',SaveButton7);
	editButt8.addEventListener('click', EditButton8);
	saveButt8.addEventListener('click',SaveButton8);
		