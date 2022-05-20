import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
import { SavetoLogs } from "../js/systemlogs.js"
		  // TODO: Add SDKs for Firebase products that you want to use
		  // https://firebase.google.com/docs/web/setup#available-libraries

		  // Your web app's Firebase configuration
// Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyCoaEAxSCPdZCSNtmfN-dyFbAMxidaa3-8",
authDomain: "se2project-9167c.firebaseapp.com",
databaseURL: "https://se2project-9167c-default-rtdb.asia-southeast1.firebasedatabase.app",
projectId: "se2project-9167c",
storageBucket: "se2project-9167c.appspot.com",
messagingSenderId: "64666107569",
appId: "1:64666107569:web:69bdce0cc7aa1c54b42c90"
};
		  // Initialize Firebase
		  const app = initializeApp(firebaseConfig);

		 import { getStorage, ref as sRef, uploadBytesResumable, getDownloadURL}
      	 from "https://www.gstatic.com/firebasejs/9.6.9/firebase-storage.js";

		  import {getDatabase, ref, set, get, child, update, remove}
		  from "https://www.gstatic.com/firebasejs/9.6.9/firebase-database.js";

		  const db = getDatabase();

		  var namebox = document.getElementById("Namebox");
		  var dtypebox = document.getElementById("DTypebox");
		  var addressbox = document.getElementById("Addressbox");
		  var facebookbox = document.getElementById("Facebookbox");
		  var emailbox = document.getElementById("Emailbox");
		  var contactbox = document.getElementById("Contactbox");
		  var dtimebox = document.getElementById("DTimebox");
		  var ddatebox = document.getElementById("DDatebox");
		  var notebox = document.getElementById("Notebox");

		  var caketypebox = document.getElementById("CakeTypebox");
		  var cakeflavorbox = document.getElementById("CakeFlavorbox");
		  var cakecoverbox = document.getElementById("CakeCoverbox");
		  var cakelayerbox = document.getElementById("CakeLayerbox");
		  var cakesizesbox = document.getElementById("CakeSizesbox");
		  var cakeediblebox = document.getElementById("CakeEdiblebox");
		  var cakeflowerbox = document.getElementById("CakeFlowerbox");
		  var inspirationbox = document.getElementById("Inspirationbox");
		  var cakenotebox = document.getElementById("CakeNotebox");
		  var processbox = "Processing";


		  var files = [];
      	  var reader = new FileReader();
      	  var namesbox = document.getElementById('namesbox');
	      var extlab = document.getElementById('extlab');
	      var myimg = document.getElementById('myimg');
	      var proglab = document.getElementById('upprogress');
	      var SelBtn = document.getElementById('selbtn');
	      var insbtn = document.getElementById('Insbtn');

		  var input = document.createElement('input');
	      input.type = 'file';

	      input.onchange = e =>{
	        files = e.target.files;

	        var extension = GetExtName(files[0]);
	        var name = GetFileName(files[0]);

	        namesbox.var=name;
	        extlab.innerHTML = extension;

	        reader.readAsDataURL(files[0]);
	      }

	      reader.onload = function(){
	        myimg.src = reader.result;
	      }
	      
	      let x = Math.floor((Math.random() * 999999) + 100000);
			sessionStorage.setItem("num",x);
	    

//-------------------------------SELECTION-------------------------------//
      
      SelBtn.onclick = function(){
        input.click();
      }

      function GetExtName(file){
        var temp = file.name.split('.')
        var ext = temp.slice((temp.length-1),(temp.length));
        return ',' + ext[0];
      }

        function GetFileName(file){
        var temp = file.name.split('.')
        var fname = temp.slice(0,-1).join(',');
        return fname;
      }

        function UploadProcess(){
          var ImgToUpload = files[0];

          var ImgName = namesbox.value + extlab.innerHTML;

          if(!ValidateName()){
            alert('name cannot contain');
          }

          const metaData ={
            contentType: ImgToUpload.type
          }
          const storage = getStorage();
          const storageRef = sRef(storage, "Images/"+ImgName);
          const UploadTask = uploadBytesResumable(storageRef, ImgToUpload, metaData);
          UploadTask.on('state-changed', (snapshot)=>{
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            proglab.innerHTML = "Upload "+ progress + "%";
          },
          (error)=>{
            alert("error: image not uploaded!");

          },
          ()=>{
            getDownloadURL(UploadTask.snapshot.ref).then((downloadURL)=>{
              InsertData(downloadURL);
            });
          }
          );
        }

//-------------------------------------INSERT DATA TO DATABASE -----------------------------------//

			

		  function InsertData(URL){
		  	var name = namesbox.value;
	        var ext = extlab.innerHTML;
    		// prevent the form from submitting
    	if(namebox.value == '' || namebox.value == null || dtypebox.value == '' || dtypebox.value == null ||
    			addressbox.value == '' || addressbox.value == null || contactbox.value == '' || contactbox.value == null ||
    			dtimebox.value == '' || dtimebox.value == null || ddatebox.value == '' || ddatebox.value == null ||
    			caketypebox.value == '' || caketypebox.value == null || cakeflavorbox.value == '' || cakeflavorbox.value == null ||
    			cakelayerbox.value == '' || cakelayerbox.value == null || cakeflowerbox.value == '' || cakeflowerbox.value == null)
    			{
    		event.preventDefault();
    		alert("Please Enter All Required Information");
    		return false;
    }


		  	set(ref(db, "TheCustomers/"+ namebox.value),{

		  		ImageName: (name+ext),
	          	ImgUrl: URL, 

		  		NameOfCust: namebox.value,
		  		DType: dtypebox.value,
		  		Address: addressbox.value,
		  		Facebook: facebookbox.value,
		  		Email: emailbox.value,
		  		Contact: contactbox.value,
		  		DTime: dtimebox.value,
		  		DDate: ddatebox.value,
		  		Note: notebox.value,
		  		CakeType: caketypebox.value,
		  		CakeFlavor: cakeflavorbox.value,
		  		CakeCover: cakecoverbox.value,
		  		CakeLayer: cakelayerbox.value,
		  		CakeSize: cakesizesbox.value,
		  		CakeEdible: cakeediblebox.value,
		  		CakeFlower: cakeflowerbox.value,
		  		CakeNote: cakenotebox.value,
		  		ReferenceNumber: x,
		  		Process: processbox
		  	})




			.then(()=>{
				setTimeout(function(){
				 	alert("Your order has been recorded!"); 
				 	SavetoLogs(namebox.value, true);
				 	window.location.href="submit.html";
				}, 3000);
				
				
			})
			.catch((error)=>{
			alert("unsuccesful, error"+error);
		  });
		}



			insbtn.addEventListener('click', InsertData);

		/* function SelectData(){
			const dbref = ref(db);

			get(child(dbref,"TheCustomers/"+ namebox.value)).then((snapshot)=>{
				if(snapshot.existss()){
					namebox.value = snapshot.val().NameOfCust;
					dtypebox.value = snapshot.val().DType;
					addressbox.value = snapshot.val().Address;

			}

			else{
				alert("No Data Found");
			}
		})
			.catch((error)=>{
				alert("unsuccesful, error"+error);
			});
		} */

		function ValidateName(){
        var regex = /[\.#$[\]]/
        return ! (regex.test(namesbox.value));
      } 

      insbtn.addEventListener('click', UploadProcess);
