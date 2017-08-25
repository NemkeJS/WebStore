
<?php
if(isset($_POST['username']) && isset($_POST['password']))  {

$username = $_POST['username'];
$password = $_POST['password'];
$conn = mysqli_connect('localhost','profile','nemkic23','profile');
if(!$conn) {
 die("Connection failed: " . mysqli_connect_error());
}
 $sql = "SELECT * FROM prof WHERE username = '".$username."' AND password = '".$password."' ";
$result = mysqli_query($conn,$sql);

if(mysqli_num_rows($result) != 1)  {
	die ("That username and password cannot be found");
}
    while($row =mysqli_fetch_assoc($result))
    {
        $emparray[] = $row;
    }
    echo json_encode($emparray);
	/*if($username != $dbusername)  {
		die("Fatal error");
	} */
	if($acitivated == 0) {
		$active = "not active";
	}
	else {
		$active = 'ative';
	} 

}else die("You need to spec an username")


?>


