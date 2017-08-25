<script>
window.location.href = "./";
</script>

<?php
$name  = $_POST['name'];
$last_name  = $_POST['last_name'];
$telephone = $_POST['telephone'];
$address  = $_POST['address'];
$email  = $_POST['email'];
$zip = $_POST['zip'];
$price = $_POST['price'];
$method  = $_POST['method'];
$cust_id = $_POST['cust_id'];

$conn = mysqli_connect('localhost','nemkeang','nemkic23','firststore');
$sql = "INSERT INTO customers (name,last_name,telephone,address,email,zip,price,method,cust_id)
VALUES ('$name', '$last_name', '$telephone', '$address', '$email', '$zip', '$price', '$method', '$cust_id')";
if(!(mysqli_query($conn,$sql))) {
die('Error: ' . mysqli_error($conn));
}
else {
	echo "Success";
}


mysqli_close($con);

?>
