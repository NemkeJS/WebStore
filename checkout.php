<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="style.css">
<script src="https://use.fontawesome.com/4191d93f95.js"></script>
<script src="./node_modules/jquery/dist/jquery.min.js"></script>
</head>
<body>
<?php include 'header.html' ?>
<section id="checkout">
<form method="POST" action="post.php">	
	<input type="text" name="name" placeholder="name">
	<input type="text" name="last_name" placeholder="last_name"><br>
	<input type="telephone" name="telephone" placeholder="telephone">
	<input type="text" name="address" placeholder="address"><br>
	<input type="email" name="email" placeholder="email">
	<input type="text" name="zip" placeholder="zip"><br>
	<input type="text" name="price"  id="finalPrice">
	<input type="text" name="cust_id"  id="cust_id">

		<div id="nemke"></div>
	<label>
	Pay upon delivery
	<input type="checkbox" name="method" placeholder="delivery">
	</label><br>
	<input id="mainSub" type="submit" name="sbumit" value="submit">

</form>

</section>


<?php include 'footer.html' ?>

<script src="test.js"></script>
<script src="test2.js"></script>
<script src="slide.js"></script>
</body>
</html>