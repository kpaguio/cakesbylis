/**
 * Orders Connection to the Firebase
 */
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
import { getDatabase, ref, set, child, get, update, remove } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-database.js";
import { SavetoLogs } from "../js/systemlogs.js"
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
  
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);
    const dbRef = ref(db)

	
	
	// Fetching and retrieving data orders
	get(child(dbRef, `TheCustomers/`)).then((snapshot) => {
      if (snapshot.exists()) {
        var table = document.getElementById("myTable");
        const myJSON = snapshot.val();
        let keys = Object.keys(myJSON);
        var actions =  '<a class="add" title="Update" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>' +
				'<a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>' +
                '<a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>';
        for (let key of keys){
          $("#myTable tbody").append(`
                <tr>
                <td id = "nameData">${key}</td>              
                <td id = "referncenum">${myJSON[key]["ReferenceNumber"]}</td>
				<td id = "status">${myJSON[key]["Process"]}</td>

 				<td id = "address">${myJSON[key]["Address"]}</td>
				<td id = "deliveryDT">${myJSON[key]["DDate"]}</td>
				<td id = "deliveryTM">${myJSON[key]["DTime"]}</td>
				<td id= "delivery">${myJSON[key]["DType"]}</td>
                <td id = "cakeSi">${myJSON[key]["CakeSize"]}</td>
				<td id = "cakeTy">${myJSON[key]["CakeType"]}</td>
				<td id = "cakeCov">${myJSON[key]["CakeCover"]}</td>
                <td id = "cakeEdi">${myJSON[key]["CakeEdible"]}</td>
				<td id = "cakeFla">${myJSON[key]["CakeFlavor"]}</td>
				<td id = "cakeFlo">${myJSON[key]["CakeFlower"]}</td>
				<td id = "cakeLay">${myJSON[key]["CakeLayer"]}</td>
				<td id = "cakeNote">${myJSON[key]["CakeNote"]}</td>
				<td id = "cakeInspoUrl">${myJSON[key]["ImageName"]}</td>  				
				<td id = "cakeInspoUrl"><a href="${myJSON[key]["ImgUrl"]}">${myJSON[key]["ImgUrl"]}</a></td>               
                <td id = "contactnum">${myJSON[key]["Contact"]}</td>
				<td id ="emailData">${myJSON[key]["Email"]}</td>
				<td id = "fbData">${myJSON[key]["Facebook"]}</td>                
                <td id = "noteData">${myJSON[key]["Note"]}</td>
                

                <td>${actions}</td>
                </tr>
            `)
        }
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });

	// Fetching and retrieving deleted data orders
	get(child(dbRef, `Deleted Orders/`)).then((snapshot) => {
      if (snapshot.exists()) {
        var table = document.getElementById("myTable2");
        const myJSON = snapshot.val();
        let keys = Object.keys(myJSON);
        var actions =  '<center><a class="delete2" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>';
				
        for (let key of keys){
          $("#myTable2 tbody").append(`
                <tr>
                <td id = "nameData">${key}</td>              
                <td id = "referncenum">${myJSON[key]["ReferenceNumber"]}</td>
				<td id = "status">${myJSON[key]["Process"]}</td>

 				<td id = "address">${myJSON[key]["Address"]}</td>
				<td id = "deliveryDT">${myJSON[key]["DDate"]}</td>
				<td id = "deliveryTM">${myJSON[key]["DTime"]}</td>
				<td id= "delivery">${myJSON[key]["DType"]}</td>
                <td id = "cakeSi">${myJSON[key]["CakeSize"]}</td>
				<td id = "cakeTy">${myJSON[key]["CakeType"]}</td>
				<td id = "cakeCov">${myJSON[key]["CakeCover"]}</td>
                <td id = "cakeEdi">${myJSON[key]["CakeEdible"]}</td>
				<td id = "cakeFla">${myJSON[key]["CakeFlavor"]}</td>
				<td id = "cakeFlo">${myJSON[key]["CakeFlower"]}</td>
				<td id = "cakeLay">${myJSON[key]["CakeLayer"]}</td>
				<td id = "cakeNote">${myJSON[key]["CakeNote"]}</td>
				<td id = "cakeInspoUrl">${myJSON[key]["ImageName"]}</td>  				
				<td id = "cakeInspoUrl"><a href="${myJSON[key]["ImgUrl"]}">${myJSON[key]["ImgUrl"]}</a></td>               
                <td id = "contactnum">${myJSON[key]["Contact"]}</td>
				<td id ="emailData">${myJSON[key]["Email"]}</td>
				<td id = "fbData">${myJSON[key]["Facebook"]}</td>                
                <td id = "noteData">${myJSON[key]["Note"]}</td>
                

                <td>${actions}</td>
                </tr>
            `)
        }
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
	

	
	$(document).ready(function(){
        var actions = '<a class="add" title="Update" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>' +
                    '<a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>' +
                    '<a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>';
	// Update button click
        $(document).on("click", ".add", function(){
            var empty = false;
            var input = $(this).parents("tr").find('textarea[name="address"]');

            input.each(function(){
                if(!$(this).val()){
                    $(this).addClass("error");
                    empty = true;
                } else{
                    $(this).removeClass("error");
                }
            });

			var selectinput = $(this).parents("tr").find('select[name="delivery"]');

            selectinput.each(function(){
                if(!$(this).val()){
                    $(this).addClass("error");
                    empty = true;
					
                } else{
                    $(this).removeClass("error");
                }
            });

			var selectinput2 = $(this).parents("tr").find('select[name="status"]');

            selectinput2.each(function(){
                if(!$(this).val()){
                    $(this).addClass("error");
                    empty = true;
					
                } else{
                    $(this).removeClass("error");
                }
            });
			
            $(this).parents("tr").find(".error").first().focus();
            if(!empty){	
                $(this).parents("tr").find(".add, .edit").toggle();
                
                
				
				let name = $(this).parents("tr").find("input[name=name]").val();
                if (typeof name === "undefined"){
                    name = $(this).parents("tr").find("td:first-child").text();;
                }
				
				
				let name2 = $(this).parents("tr").find("input[name=name]").val();
                if (typeof name2 === "undefined"){
                    name2 = $(this).parents("tr").find("td:nth-child(2)").text();;
                }
				
				
				let name5 = $(this).parents("tr").find("input[name=name]").val();
                if (typeof name5 === "undefined"){
                    name5 = $(this).parents("tr").find("td:nth-child(5)").text();;
                }

				let name6 = $(this).parents("tr").find("input[name=name]").val();
                if (typeof name6 === "undefined"){
                    name6 = $(this).parents("tr").find("td:nth-child(6)").text();;
                }

				let name8 = $(this).parents("tr").find("input[name=name]").val();
                if (typeof name8 === "undefined"){
                    name8 = $(this).parents("tr").find("td:nth-child(8)").text();;
                }

				let name9 = $(this).parents("tr").find("input[name=name]").val();
                if (typeof name9 === "undefined"){
                    name9 = $(this).parents("tr").find("td:nth-child(9)").text();;
                }

				let name10 = $(this).parents("tr").find("input[name=name]").val();
                if (typeof name10 === "undefined"){
                    name10 = $(this).parents("tr").find("td:nth-child(10)").text();;
                }

				let name11 = $(this).parents("tr").find("input[name=name]").val();
                if (typeof name11 === "undefined"){
                    name11 = $(this).parents("tr").find("td:nth-child(11)").text();;
                }

				let name12 = $(this).parents("tr").find("input[name=name]").val();
                if (typeof name12 === "undefined"){
                    name12 = $(this).parents("tr").find("td:nth-child(12)").text();;
                }

				let name13 = $(this).parents("tr").find("input[name=name]").val();
                if (typeof name13 === "undefined"){
                    name13 = $(this).parents("tr").find("td:nth-child(13)").text();;
                }

				let name14 = $(this).parents("tr").find("input[name=name]").val();
                if (typeof name14 === "undefined"){
                    name14 = $(this).parents("tr").find("td:nth-child(14)").text();;
                }
				
				let name15 = $(this).parents("tr").find("input[name=name]").val();
                if (typeof name15 === "undefined"){
                    name15 = $(this).parents("tr").find("td:nth-child(15)").text();;
                }

				let name16 = $(this).parents("tr").find("input[name=name]").val();
                if (typeof name16 === "undefined"){
                    name16 = $(this).parents("tr").find("td:nth-child(16)").text();;
                }

				let name17 = $(this).parents("tr").find("input[name=name]").val();
                if (typeof name17 === "undefined"){
                    name17 = $(this).parents("tr").find("td:nth-child(17)").text();;
                }

				let name18 = $(this).parents("tr").find("input[name=name]").val();
                if (typeof name18 === "undefined"){
                    name18 = $(this).parents("tr").find("td:nth-child(18)").text();;
                }

				let name19 = $(this).parents("tr").find("input[name=name]").val();
                if (typeof name19 === "undefined"){
                    name19 = $(this).parents("tr").find("td:nth-child(19)").text();;
                }

				let name20 = $(this).parents("tr").find("input[name=name]").val();
                if (typeof name20 === "undefined"){
                    name20 = $(this).parents("tr").find("td:nth-child(20)").text();;
                }

				let name21 = $(this).parents("tr").find("input[name=name]").val();
                if (typeof name21 === "undefined"){
                    name21 = $(this).parents("tr").find("td:nth-child(21)").text();;
                }
			

                let address = $(this).parents("tr").find("textarea[name=address]").val();
                let delivery = $(this).parents("tr").find("select[name=delivery]").val();
				let status = $(this).parents("tr").find("select[name=status]").val();


				input.each(function(){
                    $(this).parent("td").html($(this).val());
                });	

				selectinput.each(function(){
                    $(this).parent("td").html($(this).val());
                });	
				
				selectinput2.each(function(){
                    $(this).parent("td").html($(this).val());
                });	
				
                set(ref(db, 'TheCustomers/' + name ), {
                    Address:address,
					ReferenceNumber:name2,
					DType:delivery,
					DDate:name5,
					NameOfCust:name,
					DTime:name6,
					CakeSize:name8,
					CakeType:name9,
					CakeCover:name10,
					CakeEdible:name11,
					CakeFlavor:name12,
					CakeFlower:name13,
					CakeLayer:name14,
					CakeNote:name15,
					ImageName:name16,					
					ImgUrl:name17,
					Contact:name18,
					Email:name19,
					Facebook:name20,
					Note:name21,
					Process:status

										
                });
				
				
				
				if (status == 'Delivered'){
					set(ref(db, 'Delivered Orders/' + name ), {
                    Address:address,
					ReferenceNumber:name2,
					DType:delivery,
					DDate:name5,
					NameOfCust:name,
					DTime:name6,
					CakeSize:name8,
					CakeType:name9,
					CakeCover:name10,
					CakeEdible:name11,
					CakeFlavor:name12,
					CakeFlower:name13,
					CakeLayer:name14,
					CakeNote:name15,
					ImageName:name16,					
					ImgUrl:name17,
					Contact:name18,
					Email:name19,
					Facebook:name20,
					Note:name21,
					Process:status

										
                	});
					
				}
				else{
					
				}
				
				SavetoLogs(name + " order was edited with this new address: " + address);
				SavetoLogs(name + " order was edited with this new delivery type: " + delivery);
				SavetoLogs(name + " order was edited with this new status: " + status);
				alert("Order Updated Successfully!")			
            }
				           	
        });

	
		// Edit address, delivery type, and status of the selected row on edit button click
        $(document).on("click", ".edit", function(){		
            $(this).parents("tr").find("td[id=address]").each(function(){
                $(this).html('<textarea required class="form-control-address"  name = "address" >' + $(this).text() + '</textarea>');
            });	
			$(this).parents("tr").find("td[id=delivery]").each(function(){
                $(this).html('<select name="delivery" id="DTypebox" class="form-control selectpicker form-control-select"><option value="'+ $(this).text() +'"> '+ $(this).text() +'</option><option value="Cakes by Lis Store Pick Up">Cakes by Lis Store Pick Up</option><option value="Cakes by Lis Delivery">Cakes by Lis Delivery</option><option value="Grab Delivery">Grab Delivery</option><option value="Lalamove Delivery">Lalamove Delivery</option>	</select> ');
            });		
			$(this).parents("tr").find("td[id=status]").each(function(){
                $(this).html('<select name="status" id="orderstatus" class="form-control selectpicker form-control-select"><option value="'+ $(this).text() +'"> '+ $(this).text() +'</option><option value="Down Payment">Down Payment</option><option value="Full Payment">Full Payment</option><option value="Delivered">Delivered</option>	</select> ');
            });	
						
		      $(this).parents("tr").find(".add, .edit").toggle();
		
		      $(".add-new").attr("disabled", "disabled");
		        });								
        });


	 	// Delete row on delete button click and transfer order to the Deleted Orders Database
        $(document).on("click", ".delete", function(){
	
            let nameData = $(this).parents("tr").find("td:first-child").text();				
			let name2 = $(this).parents("tr").find("td:nth-child(2)").text();
			let name3 = $(this).parents("tr").find("td:nth-child(3)").text();
			let name4 = $(this).parents("tr").find("td:nth-child(4)").text();			
			let name5 = $(this).parents("tr").find("td:nth-child(5)").text();
			let name6 = $(this).parents("tr").find("td:nth-child(6)").text();
            let name7 = $(this).parents("tr").find("td:nth-child(7)").text();
			let name8 = $(this).parents("tr").find("td:nth-child(8)").text();            
			let name9 = $(this).parents("tr").find("td:nth-child(9)").text();            
			let name10 = $(this).parents("tr").find("td:nth-child(10)").text();           
			let name11 = $(this).parents("tr").find("td:nth-child(11)").text();            
			let name12 = $(this).parents("tr").find("td:nth-child(12)").text();            
			let name13 = $(this).parents("tr").find("td:nth-child(13)").text();           
			let name14 = $(this).parents("tr").find("td:nth-child(14)").text();           			
			let name15 = $(this).parents("tr").find("td:nth-child(15)").text();           
			let name16 = $(this).parents("tr").find("td:nth-child(16)").text();            
			let name17 = $(this).parents("tr").find("td:nth-child(17)").text();            
			let name18 = $(this).parents("tr").find("td:nth-child(18)").text();            
			let name19 = $(this).parents("tr").find("td:nth-child(19)").text();           
			let name20 = $(this).parents("tr").find("td:nth-child(20)").text();            
			let name21 = $(this).parents("tr").find("td:nth-child(21)").text();
            
            const path = "TheCustomers/" + nameData;
			let text = "Are you sure you want to delete " + nameData + "'s order?";
          	if (confirm(text) == true) {
				
	            if (nameData === null || path == 'TheCustomers/'){
	                console.log("No Data Removed");
	                $(this).parents("tr").remove();
	                
	            }
	            else{
					
	                remove(ref(db, path));

					set(ref(db, 'Deleted Orders/' + nameData ), {
                    
					Address:name4,
					ReferenceNumber:name2,
					DType:name7,
					DDate:name5,
					NameOfCust:nameData,
					DTime:name6,
					CakeSize:name8,
					CakeType:name9,
					CakeCover:name10,
					CakeEdible:name11,
					CakeFlavor:name12,
					CakeFlower:name13,
					CakeLayer:name14,
					CakeNote:name15,
					ImageName:name16,					
					ImgUrl:name17,
					Contact:name18,
					Email:name19,
					Facebook:name20,
					Note:name21,
					Process:name3
															
                	});
	                SavetoLogs(nameData + " order was deleted");
					
	                $(this).parents("tr").remove();
	                alert("Order Deleted Successfully!");
	            }
			}
        });


			// Permanently Delete an order from the Deleted Orders Database
        $(document).on("click", ".delete2", function(){
	
            let nameData = $(this).parents("tr").find("td:first-child").text();
           
            const path = "Deleted Orders/" + nameData;
			let text = "Are you sure you want to delete " + nameData + "'s order?";
          	if (confirm(text) == true) {
				
	            if (nameData === null || path == 'Deleted Orders/'){
	                console.log("No Data Removed");
	                $(this).parents("tr").remove();
	                
	            }
	            else{
					
	                remove(ref(db, path));					
	                SavetoLogs(nameData + " order was permanently deleted");
					
	                $(this).parents("tr").remove();
	                alert("Order Permanently Deleted Successfully!");
	            }
			}
        });

		 
		
       



		 
	
       


		