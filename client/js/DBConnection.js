import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
import { getDatabase, ref, set, child, get, update, remove } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-database.js";
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

    get(child(dbRef, `Inventory/`)).then((snapshot) => {
      if (snapshot.exists()) {
        var table = document.getElementById("myTable");
        const myJSON = snapshot.val();
        var keys = Object.keys(myJSON);
        var actions = '<a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>' +
                '<a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>' +
                '<a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>';
        for (let key of keys){
            let x = parseFloat(myJSON[key]["Quantity"]);
            let y = parseFloat(myJSON[key]["Minimum"]);
            $("#myTable tbody").append(`
                <tr class = "${x <= y ? "ui warning message" : ""}">
                <td id = "nameData">${key}</td>
                <td id = "quantityData">${x}</td>
                <td id = "minimumData">${y}</td>
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
        var actions = '<a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>' +
                    '<a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>' +
                    '<a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>';

        // Add row on add button click
        $(document).on("click", ".add", function(){
            var empty = false;
            var input = $(this).parents("tr").find('input[type="number"]');
            input.each(function(){
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
                $(".add-new").removeAttr("disabled");
                let name = $(this).parents("tr").find("input[name=name]").val();
                let minimum;
                if (typeof name === "undefined"){
                    name = $(this).parents("tr").find("td:first-child").text();
                    minimum = $(this).parents("tr").find("td[id=minimumData]").text();
                }
                let quantity = $(this).parents("tr").find("input[name=quantity]").val();
                input.each(function(){
                    $(this).parent("td").html($(this).val());
                });	
                set(ref(db, 'Inventory/' + name), {
                    Quantity: quantity,
                    Minimum: minimum
                });
                if (parseFloat(quantity) <= parseFloat(minimum)){
                    $(this).parents("tr").addClass('ui warning message')
                }
                else{
                    $(this).parents("tr").removeClass('ui warning message')
                }
                alert("Item Updated Successfully");
                console.log("Item Updated");
                SavetoLogs(name + " was updated to the new quantity of " + quantity);
            }	
            	
        });
        // Edit row on edit button click
        $(document).on("click", ".edit", function(){		
            $(this).parents("tr").find("td[id=quantityData]").each(function(){
                $(this).html('<input type="number" min="0" class="form-control" name = "quantity" value="' + $(this).text() + '">');
            });		
            $(this).parents("tr").find(".add, .edit").toggle();

            $(".add-new").attr("disabled", "disabled");
        });
        // Delete row on delete button click
        $(document).on("click", ".delete", function(){
            let nameData = $(this).parents("tr").find("td:first-child").text();
            const path = "Inventory/" + nameData;
            let text = "Are you sure you want to delete " + nameData + "?";
            if (confirm(text) == true) {
                if (nameData === null || path == 'Inventory/'){
                    console.log("No Data Removed");
                    $(this).parents("tr").remove();
                    $(".add-new").removeAttr("disabled");
                }   
                else{
                    remove(ref(db, path));
                    $(this).parents("tr").remove();
                    $(".add-new").removeAttr("disabled");
                    console.log("Data Deleted");
                    SavetoLogs(nameData + " was removed from the inventory");
                }
            } else {
                ;
            }
            
            
        });
        $("#submitQuery").click(function(){
            let name = $("#addName").val();
            let unit = $("#addUnit").val();
            let quantity = $("#addQuantity").val();
            let minimum = $("#addMinimum").val();

            if (name != "" && unit != "" && quantity != "" && minimum != ""){
                name = name + " " + "(" + unit + ")";
                set(ref(db, 'Inventory/' + name), {
                    Quantity: quantity,
                    Minimum: minimum
                });
                alert("Item added Successfully!")
                SavetoLogs(name + " was added to the new quantity of " + quantity + " with the minimum of " + minimum);
                location.reload();
            }
            else{
                alert("Fill all the blanks!");
            }         
        });
    });
