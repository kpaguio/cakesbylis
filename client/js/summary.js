function Edible(){
	var isEdible = document.getElementById("CakeLayerbox").value;
	if(isEdible == "Single Layer" || isEdible == "Cupcake" || isEdible == "Mini Cake")
	{
		document.getElementById("CakeEdiblebox").disabled = true;
		document.getElementById("CakeEdiblebox").value = "None";
		document.getElementById("CakeEdiblebox").required = false;
		document.getElementById("rates").required = false;
		document.getElementById("CakeRadiobox1").disabled = true;
		document.getElementById("CakeRadiobox2").disabled = true;
		document.getElementById("CakeRadiobox3").disabled = true;
		document.getElementById("CakeSizesbox").disabled = false;
		document.getElementById("CakeSizesbox").required = true;
		document.getElementById("rates").reset();
		document.getElementById("rates").value = "None";
	}
	else if (isEdible == "Cupcake Tower Package")
	{
		document.getElementById("CakeEdiblebox").disabled = true;
		document.getElementById("CakeEdiblebox").required = false;
		document.getElementById("rates").required = false;
		document.getElementById("CakeRadiobox1").disabled = true;
		document.getElementById("CakeRadiobox2").disabled = true;
		document.getElementById("CakeRadiobox3").disabled = false;
		document.getElementById("CakeSizesbox").disabled = true;
		document.getElementById("CakeSizesbox").required = false;
		document.getElementById("rates").reset();
		document.getElementById("CakeRadiobox3").checked = true;
		document.getElementById("rates").value = "None";
	}
	else
	{
		document.getElementById("CakeEdiblebox").disabled = false;
		document.getElementById("CakeEdiblebox").required = true;
		document.getElementById("rates").required = true;
		document.getElementById("CakeRadiobox1").disabled = false;
		document.getElementById("CakeRadiobox2").disabled = false;
		document.getElementById("CakeSizesbox").disabled = false;
		document.getElementById("CakeSizesbox").required = true;
		document.getElementById("CakeRadiobox3").disabled = true;
		document.getElementById("rates").reset();
	}
}

function ifYes()
{
	var isEdible = document.getElementById("CakeLayerbox").value;
	if(!(isEdible == "Single Layer" || isEdible == "Cupcake" || isEdible == "Mini Cake" || isEdible == "Cupcake Tower Package"))
	{
		if(document.getElementById("CakeRadiobox1").checked == true)
		{
			document.getElementById("CakeEdiblebox").disabled = true;
			document.getElementById("CakeEdiblebox").value = "None";
			document.getElementById("CakeEdiblebox").required = false;
			
		}
		else
		{
			document.getElementById("CakeEdiblebox").disabled = false;
			document.getElementById("CakeEdiblebox").required = true;
		}
	}
}
function myFunction() {
  	var caketype = document.getElementById("CakeTypebox").value;
  	document.getElementById("caketype").innerHTML = caketype;
  
  	var cakeflavor = document.getElementById("CakeFlavorbox").value;
  	document.getElementById("cakeflavor").innerHTML = cakeflavor;
  
  	var cakecover = document.getElementById("CakeCoverbox").value;
  	document.getElementById("cakecover").innerHTML = cakecover;
  
  	var cakelayer = document.getElementById("CakeLayerbox").value;
  	document.getElementById("cakelayer").innerHTML = cakelayer;
  
  	var cakesize = document.getElementById("CakeSizesbox").value;
  	document.getElementById("cakesize").innerHTML = cakesize;
	
	var cakeedible = document.getElementById("CakeEdiblebox").value;
	
  	const rates = document.forms.rates.elements["radio"]
  	showRate()
  	function showRate(){
		//If conditions TWO LAYERS
		if(cakelayer == "Two Layers")
		{
			if(cakesize == "Two Layers 10x6")
			{
				if(rates.value == "Yes, All Layer is Edible")
				{
					document.getElementById("cakesize").style.color = "black";
					document.getElementById("cakelayer").style.color = "black";
					document.getElementById("cakeedible").style.color = "black";
					document.getElementById("cakeedible").innerHTML = " ";
					document.getElementById("eprice").innerHTML = "10,500 Pesos";
					document.getElementById("cakeradio").innerHTML = rates.value;
					document.getElementById("pricenote").innerHTML = "Final Price will be through negotiation with one of the staff";
				}
				else if(rates.value == "No, Not All Layer is Edible")
				{
					if(document.getElementById("CakeEdiblebox").value == "Second Layer" || document.getElementById("CakeEdiblebox").value == "First Layer")
					{
						document.getElementById("cakesize").style.color = "black";
						document.getElementById("cakelayer").style.color = "black";
						document.getElementById("cakeedible").style.color = "black";
						document.getElementById("cakeedible").innerHTML = cakeedible;
						document.getElementById("eprice").innerHTML = "8,400 Pesos";
						document.getElementById("cakeradio").innerHTML = rates.value;
						document.getElementById("pricenote").innerHTML = "Final Price will be through negotiation with one of the staff";
					}
					else
					{
						alert("Selected Layer in 'Not Edible' is not appropriate with the selected Cake Layer");
						document.getElementById("cakeedible").style.color = "red";
						document.getElementById("cakelayer").style.color = "red";
						document.getElementById("cakesize").style.color = "black";
						document.getElementById("cakeedible").innerHTML = cakeedible;
						document.getElementById("cakeradio").innerHTML = rates.value;
						document.getElementById("eprice").innerHTML = " ";
						document.getElementById("rates").reset();
						document.getElementById("CakeEdiblebox").disabled = false;
					}
				}
				else
				{
					document.getElementById("cakesize").style.color = "black";
					document.getElementById("cakelayer").style.color = "black";
					document.getElementById("cakeedible").style.color = "black";
					document.getElementById("cakeedible").innerHTML = "---";
					document.getElementById("cakeradio").innerHTML = "No choice selected";
					alert("Please select if all layers are edible or not.")
				}
	  		}
	  			else if(cakesize == "Two Layers 6x6")
	  			{
					if(rates.value == "Yes, All Layer is Edible")
					{
						document.getElementById("cakesize").style.color = "black";
						document.getElementById("cakelayer").style.color = "black";
						document.getElementById("cakeedible").style.color = "black";
						document.getElementById("cakeedible").innerHTML = " ";
						document.getElementById("eprice").innerHTML = "10,500 Pesos";
						document.getElementById("cakeradio").innerHTML = rates.value;
						document.getElementById("pricenote").innerHTML = "Final Price will be through negotiation with one of the staff";
					}
					else if(rates.value == "No, Not All Layer is Edible")
					{
						if(document.getElementById("CakeEdiblebox").value == "Second Layer" || document.getElementById("CakeEdiblebox").value == "First Layer")
						{
							document.getElementById("cakesize").style.color = "black";
							document.getElementById("cakelayer").style.color = "black";
							document.getElementById("cakeedible").style.color = "black";
							document.getElementById("cakeedible").innerHTML = cakeedible;
							document.getElementById("eprice").innerHTML = "8,400 Pesos";
							document.getElementById("cakeradio").innerHTML = rates.value;
							document.getElementById("pricenote").innerHTML = "Final Price will be through negotiation with one of the staff";
						}
						else
						{
							alert("Selected Layer in 'Not Edible' is not appropriate with the selected Cake Layer");
							document.getElementById("cakeedible").style.color = "red";
							document.getElementById("cakelayer").style.color = "red";
							document.getElementById("cakesize").style.color = "black";
							document.getElementById("cakeedible").innerHTML = cakeedible;
							document.getElementById("cakeradio").innerHTML = rates.value;
							document.getElementById("eprice").innerHTML = " ";
							document.getElementById("rates").reset();
							document.getElementById("CakeEdiblebox").disabled = false;
						}
					}
					else
					{
						document.getElementById("cakesize").style.color = "black";
						document.getElementById("cakelayer").style.color = "black";
						document.getElementById("cakeedible").style.color = "black";
						document.getElementById("cakeedible").innerHTML = "---";
						document.getElementById("cakeradio").innerHTML = "No choice selected";
						alert("Please select if all layers are edible or not.")
					}
				}
	  			else
 	 			{
					alert("Cake Layer is not compatible with the selected Cake Size.");
					document.getElementById("cakesize").style.color = "red";
					document.getElementById("cakelayer").style.color = "red";
					document.getElementById("cakeedible").style.color = "black";
					document.getElementById("cakeedible").innerHTML = "---";
					document.getElementById("cakeradio").innerHTML = "---";
					document.getElementById("eprice").innerHTML = " ";
					document.getElementById("rates").reset();
					document.getElementById("CakeEdiblebox").disabled = false;
					
				}
	  	}
  		//If conditions THREE LAYERS
  		else if(cakelayer == "Three Layers")
		{
  			if(cakesize == "Three Layers 10x6" || cakesize == "Three Layers 8x6" || cakesize == "Three Layers 6x6")
			{
				if(rates.value == "Yes, All Layer is Edible")
				{
					document.getElementById("cakesize").style.color = "black";
					document.getElementById("cakelayer").style.color = "black";
					document.getElementById("cakeedible").style.color = "black";
					document.getElementById("cakeedible").innerHTML = " ";
					document.getElementById("cakeradio").innerHTML = rates.value;
					document.getElementById("eprice").innerHTML = "15,500 Pesos";
					document.getElementById("pricenote").innerHTML = "Final Price will be through negotiation with one of the staff";
				}
				else if(rates.value == "No, Not All Layer is Edible")
				{
					if(document.getElementById("CakeEdiblebox").value == "Second Layer" || document.getElementById("CakeEdiblebox").value == "First Layer" || document.getElementById("CakeEdiblebox").value == "Third Layer")
					{
						document.getElementById("cakesize").style.color = "black";
						document.getElementById("cakelayer").style.color = "black";
						document.getElementById("cakeedible").style.color = "black";
						document.getElementById("cakeedible").innerHTML = cakeedible;
						document.getElementById("eprice").innerHTML = "10,400 Pesos";
						document.getElementById("cakeradio").innerHTML = rates.value;
						document.getElementById("pricenote").innerHTML = "Final Price will be through negotiation with one of the staff";
					}
					else
					{
						alert("Selected Layer in 'Not Edible' is not appropriate with the selected Cake Layer");
						document.getElementById("cakeedible").style.color = "red";
						document.getElementById("cakelayer").style.color = "red";
						document.getElementById("cakesize").style.color = "black";
						document.getElementById("cakeedible").innerHTML = cakeedible;
						document.getElementById("cakeradio").innerHTML = rates.value;
						document.getElementById("eprice").innerHTML = " ";
						document.getElementById("rates").reset();
						document.getElementById("CakeEdiblebox").disabled = false;
					}
				}
				else
				{
					document.getElementById("cakesize").style.color = "black";
					document.getElementById("cakelayer").style.color = "black";
					document.getElementById("cakeedible").style.color = "black";
					document.getElementById("cakeedible").innerHTML = "---";
					document.getElementById("cakeradio").innerHTML = "No choice selected";
					alert("Please select if all layers are edible or not.")
				}
  			}
  			else
 	 		{
				alert("Cake Layer is not compatible with the selected Cake Size.");
				document.getElementById("cakesize").style.color = "red";
				document.getElementById("cakelayer").style.color = "red";
				document.getElementById("cakeedible").style.color = "black";
				document.getElementById("cakeedible").innerHTML = "---";
				document.getElementById("cakeradio").innerHTML = "---";
				document.getElementById("eprice").innerHTML = " ";
				document.getElementById("rates").reset();
				document.getElementById("CakeEdiblebox").disabled = false;
			}
 		 }
 		//If conditions FOUR LAYERS
 		else if(cakelayer == "Four Layers")
 		{
			if(cakesize == "Four Layers 12x6" || cakesize == "Four Layers 10x6" || cakesize == "Four Layers 8x6" || cakesize == "Four Layers 6x6")
			{
				if(rates.value == "Yes, All Layer is Edible")
				{
					document.getElementById("cakesize").style.color = "black";
					document.getElementById("cakelayer").style.color = "black";
					document.getElementById("cakeedible").style.color = "black";
					document.getElementById("cakeedible").innerHTML = " ";
					document.getElementById("cakeradio").innerHTML = rates.value;
					document.getElementById("eprice").innerHTML = "25,000 Pesos";
					document.getElementById("pricenote").innerHTML = "Final Price will be through negotiation with one of the staff";
				}
				else if(rates.value == "No, Not All Layer is Edible")
				{
					if(document.getElementById("CakeEdiblebox").value == "Second Layer" || document.getElementById("CakeEdiblebox").value == "First Layer" || document.getElementById("CakeEdiblebox").value == "Fourth Layer" || document.getElementById("CakeEdiblebox").value == "Third Layer")
					{
						document.getElementById("cakesize").style.color = "black";
						document.getElementById("cakelayer").style.color = "black";
						document.getElementById("cakeedible").style.color = "black";
						document.getElementById("cakeedible").innerHTML = cakeedible;
						document.getElementById("eprice").innerHTML = "15,700 Pesos";
						document.getElementById("cakeradio").innerHTML = rates.value;
						document.getElementById("pricenote").innerHTML = "Final Price will be through negotiation with one of the staff";
					}
					else
					{
						alert("Selected Layer in 'Not Edible' is not appropriate with the selected Cake Layer");
						document.getElementById("cakeedible").style.color = "red";
						document.getElementById("cakelayer").style.color = "red";
						document.getElementById("cakesize").style.color = "black";
						document.getElementById("cakeedible").innerHTML = cakeedible;
						document.getElementById("cakeradio").innerHTML = rates.value;
						document.getElementById("eprice").innerHTML = " ";
						document.getElementById("rates").reset();
						document.getElementById("CakeEdiblebox").disabled = false;
					}
				}
				else
				{
					document.getElementById("cakesize").style.color = "black";
					document.getElementById("cakelayer").style.color = "black";
					document.getElementById("cakeedible").style.color = "black";
					document.getElementById("cakeedible").innerHTML = "---";
					document.getElementById("cakeradio").innerHTML = "No choice selected";
					alert("Please select if all layers are edible or not.")
				}
			}
			else
 	 		{
				alert("Cake Layer is not compatible with the selected Cake Size.");
				document.getElementById("cakesize").style.color = "red";
				document.getElementById("cakelayer").style.color = "red";
				document.getElementById("cakeedible").style.color = "black";
				document.getElementById("cakeedible").innerHTML = "---";
				document.getElementById("cakeradio").innerHTML = "---";
				document.getElementById("eprice").innerHTML = " ";
				document.getElementById("rates").reset();
				document.getElementById("CakeEdiblebox").disabled = false;
			}
		}
		//If conditions FIVE LAYERS
 		else if(cakelayer == "Five Layers")
 		{
			if(cakesize == "Five Layers 14x6" || cakesize == "Five Layers 12x6" || cakesize == "Five Layers 10x6" || cakesize == "Five Layers 8x6" || cakesize == "Five Layers 6x6")
			{
				if(rates.value == "Yes, All Layer is Edible")
				{
					document.getElementById("cakesize").style.color = "black";
					document.getElementById("cakelayer").style.color = "black";
					document.getElementById("cakeedible").style.color = "black";
					document.getElementById("cakeedible").innerHTML = " ";
					document.getElementById("cakeradio").innerHTML = rates.value;
					document.getElementById("eprice").innerHTML = "38,000 Pesos";
					document.getElementById("pricenote").innerHTML = "Final Price will be through negotiation with one of the staff";
				}
				else if(rates.value == "No, Not All Layer is Edible")
				{
					if(document.getElementById("CakeEdiblebox").value == "Second Layer" || document.getElementById("CakeEdiblebox").value == "First Layer" || document.getElementById("CakeEdiblebox").value == "Fifth Layer" || document.getElementById("CakeEdiblebox").value == "Fourth Layer" || document.getElementById("CakeEdiblebox").value == "Third Layer")
					{
						document.getElementById("cakesize").style.color = "black";
						document.getElementById("cakelayer").style.color = "black";
						document.getElementById("cakeedible").style.color = "black";
						document.getElementById("cakeedible").innerHTML = cakeedible;
						document.getElementById("eprice").innerHTML = "23,000 Pesos";
						document.getElementById("cakeradio").innerHTML = rates.value;
						document.getElementById("pricenote").innerHTML = "Final Price will be through negotiation with one of the staff";
					}
					else
					{
						alert("Selected Layer in 'Not Edible' is not appropriate with the selected Cake Layer");
						document.getElementById("cakeedible").style.color = "red";
						document.getElementById("cakelayer").style.color = "red";
						document.getElementById("cakesize").style.color = "black";
						document.getElementById("cakeedible").innerHTML = cakeedible;
						document.getElementById("cakeradio").innerHTML = rates.value;
						document.getElementById("eprice").innerHTML = " ";
						document.getElementById("rates").reset();
						document.getElementById("CakeEdiblebox").disabled = false;
					}
				}
				else
				{
					document.getElementById("cakesize").style.color = "black";
					document.getElementById("cakelayer").style.color = "black";
					document.getElementById("cakeedible").style.color = "black";
					document.getElementById("cakeedible").innerHTML = "---";
					document.getElementById("cakeradio").innerHTML = "No choice selected";
					alert("Please select if all layers are edible or not.")
				}
			}
			else
 	 		{
				alert("Cake Layer is not compatible with the selected Cake Size.");
				document.getElementById("cakesize").style.color = "red";
				document.getElementById("cakelayer").style.color = "red";
				document.getElementById("cakeedible").style.color = "black";
				document.getElementById("cakeedible").innerHTML = "---";
				document.getElementById("cakeradio").innerHTML = "---";
				document.getElementById("eprice").innerHTML = " ";
				document.getElementById("rates").reset();
				document.getElementById("CakeEdiblebox").disabled = false;
			}
		}
 	 }
  	
  	//If conditions CTP
 	if(cakelayer == "Cupcake Tower Package")
 	{
		document.getElementById("cakelayer").style.color = "black";
		document.getElementById("eprice").innerHTML = "12,000 Pesos";
		document.getElementById("cakeradio").innerHTML = "---";
		document.getElementById("cakesize").innerHTML = "---";
		document.getElementById("cakeedible").style.color = "black";
		document.getElementById("cakeedible").innerHTML = "---";
		document.getElementById("pricenote").innerHTML = "Final Price will be through negotiation with one of the staff";
	}
  
  	var cakeflower = document.getElementById("CakeFlowerbox").value;
  	document.getElementById("cakeflower").innerHTML = cakeflower;
  
  	var cakenote = document.getElementById("CakeNotebox").value;
  	document.getElementById("cakenote").innerHTML = cakenote;
  
  	var deliver = document.getElementById("DTypebox").value;
  	document.getElementById("dtype").innerHTML = deliver;
  
  	var time = document.getElementById("DTimebox").value;
  	document.getElementById("dtime").innerHTML = time;
  
  	var date = document.getElementById("DDatebox").value;
  	document.getElementById("ddate").innerHTML = date;
  
  	var note = document.getElementById("Notebox").value;
  	document.getElementById("note").innerHTML = note;
  
  	var custname = document.getElementById("namesbox").value;
  	document.getElementById("name").innerHTML = custname;
  
  	var name = document.getElementById("Namebox").value;
  	document.getElementById("fullname").innerHTML = name;
  
  	var add = document.getElementById("Addressbox").value;
  	document.getElementById("address").innerHTML = add;
  
  	var fb = document.getElementById("Facebookbox").value;
  	document.getElementById("facebook").innerHTML = fb;
  
  	var email = document.getElementById("Emailbox").value;
  	document.getElementById("email").innerHTML = email;
  
  	var contact = document.getElementById("Contactbox").value;
  	document.getElementById("number").innerHTML = contact;
	
	//If conditions SINGLE LAYER
	if(cakelayer == "Single Layer")
	{
		cakeedible = "---";
		document.getElementById("cakeedible").innerHTML = cakeedible;
		if(cakesize == "Single Layer 6x6" || cakesize == "Single Layer 7x5")
		{
			document.getElementById("cakesize").style.color = "black";
			document.getElementById("cakelayer").style.color = "black";
			document.getElementById("eprice").innerHTML = "3,400 Pesos";
			document.getElementById("cakeradio").innerHTML = "---";
			document.getElementById("cakeedible").innerHTML = "---";
			document.getElementById("cakeedible").style.color = "black";
			document.getElementById("pricenote").innerHTML = "Final Price will be through negotiation with one of the staff";
			document.getElementById("rates").reset();
		}
		else if(cakesize == "Single Layer 8x6")
		{
			document.getElementById("cakesize").style.color = "black";
			document.getElementById("cakelayer").style.color = "black";
			document.getElementById("eprice").innerHTML = "5,000 Pesos";
			document.getElementById("cakeradio").innerHTML = "---";
			document.getElementById("cakeedible").innerHTML = "---";
			document.getElementById("cakeedible").style.color = "black";
			document.getElementById("pricenote").innerHTML = "Final Price will be through negotiation with one of the staff";
			document.getElementById("rates").reset();
		}
		else if(cakesize == "Single Layer 10x6")
		{
			document.getElementById("cakesize").style.color = "black";
			document.getElementById("cakelayer").style.color = "black";
			document.getElementById("eprice").innerHTML = "7,000 Pesos";
			document.getElementById("cakeradio").innerHTML = "---";
			document.getElementById("cakeedible").innerHTML = "---";
			document.getElementById("cakeedible").style.color = "black";
			document.getElementById("pricenote").innerHTML = "Final Price will be through negotiation with one of the staff";
			document.getElementById("rates").reset();
		}
		else if(cakesize == "Single Layer 12x6")
		{
			document.getElementById("cakesize").style.color = "black";
			document.getElementById("cakelayer").style.color = "black";
			document.getElementById("eprice").innerHTML = "9,500 Pesos";
			document.getElementById("cakeradio").innerHTML = "---";
			document.getElementById("cakeedible").innerHTML = "---";
			document.getElementById("cakeedible").style.color = "black";
			document.getElementById("pricenote").innerHTML = "Final Price will be through negotiation with one of the staff";
			document.getElementById("rates").reset();
		}
		else
		{
			alert("Cake Layer is not compatible with the selected Cake Size.");
			document.getElementById("cakesize").style.color = "red";
			document.getElementById("cakelayer").style.color = "red";
			document.getElementById("cakeradio").innerHTML = " ";
			document.getElementById("cakeedible").innerHTML = "---";
			document.getElementById("cakeedible").style.color = "black";
			document.getElementById("eprice").innerHTML = " ";
			document.getElementById("rates").reset();
		}
	}
	else if (cakelayer == "Mini Cake")
	{
		if(cakesize == "Mini Cake 3x2 with customized topper & packaging")
		{
			document.getElementById("cakesize").style.color = "black";
			document.getElementById("cakelayer").style.color = "black";
			document.getElementById("eprice").innerHTML = "300 Pesos";
			document.getElementById("cakeradio").innerHTML = "---";
			document.getElementById("cakeedible").innerHTML = "---";
			document.getElementById("cakeedible").style.color = "black";
			document.getElementById("pricenote").innerHTML = "Final Price will be through negotiation with one of the staff";
			document.getElementById("rates").reset();
		}
		else if(cakesize == "Mini Cake 4x3 with customized topper & packaging")
		{
			document.getElementById("cakesize").style.color = "black";
			document.getElementById("cakelayer").style.color = "black";
			document.getElementById("eprice").innerHTML = "400 Pesos";
			document.getElementById("cakeradio").innerHTML = "---";
			document.getElementById("cakeedible").innerHTML = "---";
			document.getElementById("cakeedible").style.color = "black";
			document.getElementById("pricenote").innerHTML = "Final Price will be through negotiation with one of the staff";
			document.getElementById("rates").reset();
		}
	}
	
}