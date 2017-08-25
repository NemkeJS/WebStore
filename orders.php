

<?php

$title  = $_POST['title'];
$price  = $_POST['price'];
$image = $_POST['image'];
$cust_id = $_POST['cust_id'];

$conn = mysqli_connect('localhost','nemkeang','nemkic23','firststore');
$sql = "INSERT INTO orders (title,price,image,cust_id)
VALUES ('$title', '$price','$image','$cust_id')";
if(!(mysqli_query($conn,$sql))) {
die('Error: ' . mysqli_error($conn));
}
else {
	echo "Success";
}


mysqli_close($con);

?>
