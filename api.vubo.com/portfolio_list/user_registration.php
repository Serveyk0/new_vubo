<?php
define('__ROOT__', dirname(dirname(__FILE__)));
require_once(__ROOT__ . "/portfolio_list/database_data.php");


$data = $_GET;
$email = $data['email'];
$password = $data['password'];    
$name = $data['name'];
    $errors = array();
    
    $mysqli = new mysqli(SERVER_NAME, USER_NAME, PASSWORD, DB_NAME);
    if ($mysqli->connect_errno) {
        echo "Не удалось подключиться к MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
    }
    
    $result = $mysqli->query("SELECT * FROM users WHERE email='$email'");

    $result_list = array();
    while($row = mysqli_fetch_array($result)) {
      $result_list[] = $row;
    }

    $check_email = 0;

    foreach($result_list as $row) {
        if  ($row['count'] > 0)
            $check_email++;
    }
    
    if ( $check_email > 0)
    {
        $errors[] = 'Пользователь с таким email уже существует!';
    }
 
    if ( empty($errors) )
    {
        $pass = password_hash($password, PASSWORD_DEFAULT);
        $result = $mysqli->query("INSERT INTO users (name, email, password, status) VALUES('$name', '$email', '$pass', 0)");
    }
    else{
        echo '<div id="errors" style="color:red;">' .array_shift($errors). '</div><hr>';
    }
    

?>