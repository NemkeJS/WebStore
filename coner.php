<?php
$conn = mysqli_connect('localhost','nemkeang','nemkic23','firststore');
if(!$conn) {
die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT id,name, email, cust_id from customers";
$result = mysqli_query($conn,$sql);
if (mysqli_num_rows($result) > 0) {
		while($row =mysqli_fetch_assoc($result))
    {
        $emparray[] = $row;
    }
    echo json_encode($emparray);

	}
	else {
	 echo "Err";
	}

?>