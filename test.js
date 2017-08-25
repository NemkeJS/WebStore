

const mainObj = (function(){
	

	function setCook (name,value) {
		var cookie = [name, '=', JSON.stringify(value)].join('');
		  document.cookie = cookie;

	}

	function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}




var value = JSON.parse(readCookie('pruchased'));
const colorArr = [];
 $(document).on('change',$('#colorer'),function() {
   let es = $('#colorer').val();
   colorArr.push(es);
     	let obj = {a:colorArr[0], a1:colorArr[1]}
  	$('#userInfo').css("background",es);

   setCook('nemke',obj);
});	
	
let coloring = JSON.parse(readCookie('nemke'));
setTimeout(function(){
	console.log(coloring);
 $('#userInfo').css({'background':coloring.a,
 					'color':coloring.a1	
	});
},500);


	const arr = [];
	const mainArr = [];

	let sumSumer = 0;
	window.onload = function() {
		let loadTime = window.performance.timing.domContentLoadedEventEnd- window.performance.timing.navigationStart; 
			//console.log(loadTime);
		$(document).on('click','.price', function(){
			 	let finalPr = this.innerText.split("$").join("")
			 	 let checkId = this.getAttribute('data'); 
			 	 sumSum = Number(finalPr);
			 	let test  = asker += sumSum; 
			 	let finalSum = test.toFixed(2);
			 	let finale = String(finalSum)+"$";
			 	sumPrice.innerText = finale;
			 	arr[0].map(function(item){
			 		if(Number(checkId) === item.id) {
			 			mainArr.push(item);
			 			setCook('pruchased',mainArr);
			 			console.log(value);



			 		}
			 	});
			  	
		});

	}
	let bodyDoc = document.getElementById('mainDiv');	
	let url = "https://jsonplaceholder.typicode.com/photos";
	let price = document.getElementsByClassName('price');
	let sumPrice = document.getElementById('sum-price');
	const arrImg = ['https://www.mmfshareserver.com/PublicSite/WP/Cimier_Automatic.png', 'http://www.jamaluk.com/uploads/image/8b07925953962c73e95bf04fb6a73df8.jpg','https://www.mmfshareserver.com/PublicSite/WP/Cimier_Automatic.png','https://www.mmfshareserver.com/PublicSite/WP/Cimier_Automatic.png', 'http://www.jamaluk.com/uploads/image/8b07925953962c73e95bf04fb6a73df8.jpg','https://www.mmfshareserver.com/PublicSite/WP/Cimier_Automatic.png'];
	const pricer = ['48.28$','270.20$','120$','48.28$','270.20$','120$'];
	const  mainFetch = fetch(url)
	.then((resp) =>  resp.json())
	.then(function(data){	
	let datar = data.slice(0,6);
	datar.map(function(item,sitem)  {
	item.image = arrImg[sitem]; 
	item.price = pricer[sitem];
	})
	arr.push(datar);
	let tmp =
	`<div class="dogs">
    ${datar.map(item => `<div>
    	<p class="title">${item.title} </p>
    	<img src="${item.image}">
    	<p data="${item.id}"class="price">${item.price}<i class="fa fa-shopping-basket" aria-hidden="true"></i></p>
    	</div>
    `).join("")}
</div>
`




	bodyDoc.innerHTML += tmp;


	}).catch(function(err){
	console.log(err);	
	})


let lister = document.getElementById('lister');
let hiddenList = document.getElementById('hidden-list');
lister.onclick = function() {
    hiddenList.style.display = hiddenList.style.display == "block" ? "none" : "block";
  if(value.length <= 0) {
  	hiddenList.innerText = "No products";
   }
   else {
   	let prod = `
   		<a href="./checkout.php"><button id="checkouter">Checkout</button></a>
   		<i id="refresher" class="fa fa-refresh" aria-hidden="true"></i>
   		<ul>${value.map(item => `<li>
    	<span class="perPrice">${item.title}</span>
    	<span class="specPrice">${item.price}</span>
    	<img src="${item.image}">
    	</li>
    `).join("")}
    </ul>
    `;

   	hiddenList.innerHTML = prod;

   }
}




		let asker = value.map(function(item) {
			return Number(item.price.split('$').join(""));
		}).reduce(function(total,num){
			return total+num;
		},0);

		setTimeout(function(){

		let somerand2 = asker.toFixed(2);
		sumPrice.innerText = String(somerand2)+ "$";

},2000) 

	


let earseBut = document.getElementById('why');


function eraseCookie(name) {
    setCook(name,"",-1);
}


earseBut.onclick = function() {
	eraseCookie('pruchased');
	window.location.href = "./";
}

if(window.location.pathname.indexOf('cart.php') > -1) {
let carSect = `<ul>
${value.map(item => 
`<li>
    	<p class="title-prod">${item.title}</p>
    	    	<img src="${item.image}">

    	<p class="">${item.price}</p>
    	</li>

`).join("")}
</ul>`	
$('#car-section').html(carSect);

}

if(window.location.pathname.indexOf('checkout') > -1) {
let carSect = `<ul>
${value.map(item => 
`<li>
    	<p class="title-prod">${item.title}  ${item.price}</p>
    	</li>
`).join("")}

    	<p>Your price is:${asker}$</p>

</ul>`	

$('#nemke').html(carSect);	
$('#finalPrice').val(asker);
}


$(document).on('click', '#refresher', function() {
 window.location.href = window.location.href;       
});



}());