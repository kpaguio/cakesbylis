<script src="https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.2.7/firebase-auth.js"></script>

<!-- Code below is header -->


<div id = "div" >
	<div class="grouped-container">
  	<div class="grouped-container-left">
  		<a class ="header" href="index.html"><img src="img/logos.png" class=logo></a>
    	<a class ="header" href="home.html">HOME</a>
    	<a class ="header" id = "price-div" href="price-client.html">PRICE</a> 
    	<a class ="header" id = "order-div" href="listoforders.html" >ORDERS</a>
    	<a class ="header" href="inventory.html">INVENTORY</a>
    	<a class ="header" href="logs.html">LOGS</a>
    	
</div>
  	<div class="grouped-container-right">
 		<a class ="header" onclick="signOut()">LOGOUT</a>
 		
 	</div>
</div>
</div>


<script src="js/logout-client.js"></script>

