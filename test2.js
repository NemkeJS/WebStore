/*var button = document.querySelectorAll('button');
for(i=0; i < button.length; i++) {
	button[0].onclick = function() {
		setTimeout(function(){
		window.location.href = "./";
	},3000)
	}
} */





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


function eraseCookie(name) {
    setCook(name,null);
}


let logerPerson = readCookie('userLoged');

let comapreValueofUser = JSON.parse(logerPerson);
if(!comapreValueofUser[0].cust_id) {
$.get('coner.php',function(resp){
	return resp;
}).then(function(data){
let respData = JSON.parse(data);
let id = "id" + Math.random().toString(16).slice(2)
respData.map(function(item){
if(item.email === comapreValueofUser[0].email) {
comapreValueofUser[0].cust_id = id;
//console.log(comapreValueofUser);
}
});
}).catch(function(err){
console.log(err);
})
} 
else {
console.log('fasa');	
}



let submiter = document.querySelector('input[type="submit"]');
let form = document.querySelector('form');
let former = document.getElementById('login-form');	
let loger = document.getElementById('loger');

submiter.onclick = function(e) {
	e.preventDefault();
	let value1 = document.querySelector('input[type="text"]').value;
	let value2 = document.querySelector('input[type="password"]').value;
	$.post('con.php',{username:value1,password:value2}).then(function(resp){
		if(resp.length > 80) {
			let datai  = JSON.parse(resp);
			setCook('userLoged', datai);
			form.setAttribute('data', "");
			form.className = "";
			window.location.href="./";
		}
		else {
			let me = "username or password are not correct ";
			form.setAttribute('data', me);
			form.className = "visible";
		}

	}).catch(function(err){
		console.log(err);
	})

}

let profilePic = document.getElementById('profile-pic');

loger.onclick = function() {
		eraseCookie('userLoged');
		window.location.href = window.location.href;
	}

if(logerPerson.length < 5) {
	loger.innerText = "Login";
	let userInfo = $('#userInfo');
 	userInfo.remove();

} 

else  {
	let userCook = JSON.parse(logerPerson);
	loger.innerText = "Logout";
	profilePic.style.display = "inline-block";
	$(profilePic).find('img').attr('src', userCook[0].image || "#");
	former.remove();

}





if(window.location.pathname.indexOf('cart.php') > -1) {
let userRock = JSON.parse(logerPerson);
let userItem = JSON.parse(readCookie('pruchased'))
let footer = $('#footer').height();
let userInfo = $('#userInfo');
let price = $('#sum-price').text();
userInfo.height($(this).height()-footer-100);	
let asker = userItem.map(function(item) {
			return Number(item.price.split('$').join(""));
		}).reduce(function(total,num){
			return total+num;
		},0);
		
		let somerand2 = asker.toFixed(2);


let tmplr = `<div>
${userRock.map(function(item,sitem) {
	return `<h3>${item.name} ${item.last_name}</h3>
	<img src="${item.image}">
	<h3>${item.username}</h3>
	<h3>${item.email}</h3>
	<h1>Item bought ${userItem.length}</h1>
	<h1>Total price: ${somerand2}$</h1>
	<i class="fa fa-pencil-square-o" aria-hidden="true"></i>
	<a href="./checkout.php"><button id="proceed-checkout">Checkout</button></a><br>
	<span>Choose color:</span><input id="colorer" type="color" name="color" placholder="color" value="#12aef5">
	`
}).join("")}
</div>`;

userInfo.html(tmplr);
}

if(window.location.pathname.indexOf('checkout') > -1) {
let userItem = JSON.parse(readCookie('pruchased'))
let counter = userItem.length;
let mainSub = document.getElementById('mainSub');
let datar = JSON.parse(logerPerson);
setTimeout(function(){	
$('#cust_id').val(comapreValueofUser[0].cust_id);	
},500)
mainSub.onclick = function() {	
	$.post('products.php',{email:datar[0].email, product:datar[0].image, price:datar[0].age},function(data){

			console.log(data);
	})	
for(i=0; i < counter; i++) {
$.post('orders.php',{title:userItem[i].title, price:userItem[i].price, image:userItem[i].image, cust_id:comapreValueofUser[0].cust_id},function(data){
console.log(data);	
}).catch(function(err) {
	console.log(err);
})
}
}
}








