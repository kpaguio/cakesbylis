    var count = 0;
    function tableSearch() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("searchInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }       
        }
    }

    function filterMinimum(){
        var td, i;
        var tbody = document.getElementById("tableBody");
        var tr = tbody.getElementsByTagName("tr")
        var cl = 'ui warning message';
        for(i = tr.length - 1; i >= 0; i--){
            if(tr[i].className !== 'ui warning message'){
                tbody.deleteRow(i);
            }
        }
        count+=1;

        if(count === 2){
            location.reload();
        }
        document.getElementById("filterMinimum").textContent= "Show Full Stocks";
    }