<?php

//Create connection
$connect = mysqli_connect("64.121.98.54", "pi", "pSittikul-rasp-SQL", "LINC");
if(!$connect) {
    die("Connection failed: ".mysqli_connect_error());
}
if($_POST['resource_name']){
    $resource_name = $_POST['resource_name'];
    $resource_email = $_POST['resource_email'];
    $resource_phone = $_POST['resource_phone'];
    $resource_website = $_POST['resource_website'];
    $resource_hours = $_POST['resource_hours'];
    $resource_desc = $_POST['resource_desc'];
    $resource_street = $_POST['resource_street'];
    $resource_city = $_POST['resource_city'];
    $resource_state = $_POST['resource_state'];
    $resource_zipcode = $_POST['resource_zipcode'];
    $resource_img_path = $_POST['resource_img_path'];

    // Check if this resource exists in the database already. If so, just run an update query. If not, run an insert query.
    $check = mysqli_query($connect, "SELECT COUNT(*) AS preexisting FROM resource WHERE resource_name = '$resource_name'");
    echo "<script>console.log(" . $check['preexisting'] . ")</script>";
    if ($check['preexisting'] > 0) {
        $update = "UPDATE resource SET resource_email = '$resource_email', resource_phone = '$resource_phone', 
        resource_website= '$resource_website',
        resource_hours = '$resource_hours',
        resource_desc = '$resource_desc',
        resource_street = '$resource_street',
            resource_city = '$resource_city', resource_state = '$resource_state', resource_zipcode = '$resource_zipcode', resource_img_path = '$resource_img_path'
            WHERE resource_name = '$resource_name'";   
            if($update){
                echo json_encode("Data updated successfully");
            }
        else {
            echo json_encode('problem');
            echo json_encode(mysqli_error($connect));
        }
    }
    else {
        $insert = "INSERT INTO resource (resource_name, resource_street, resource_city, resource_state, resource_zipcode, 
        resource_phone, resource_website, resource_hours, resource_email, resource_desc,
        resource_img_path) VALUES ('$resource_name', '$resource_street', '$resource_city', '$resource_state', '$resource_zipcode'
        '$resource_phone', '$resource_website', '$resource_hours', '$resource_email', '$resource_desc',
        , '$resource_img_path')";

        $query = mysqli_query($connect, $insert);

        if($query){
            echo json_encode("Data Inserted Successfully");
        }
        else {
            echo json_encode('problem');
            echo json_encode(mysqli_error($connect));
        }
    }
}

?>
