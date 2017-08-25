

<?php

$email  = $_POST['email'];
$product = $_POST['product'];
$price  = $_POST['price'];

$conn = mysqli_connect('localhost','nemkeang','nemkic23','firststore');
$sql = "INSERT INTO products (email,product,price)
VALUES ('$email', '$product', '$price')";
if(!(mysqli_query($conn,$sql))) {
die('Error: ' . mysqli_error($conn));
}
else {
	echo "Success";
}


mysqli_close($con);

?>
