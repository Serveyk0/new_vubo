<?php
define('__ROOT__', dirname(dirname(__FILE__)));
require_once(__ROOT__ . "/portfolio_list/database_data.php");
$data = $_GET;

    print_r($data);
    $email = $data['email'];
    $password = $data['password'];
    $mysqli = new mysqli(SERVER_NAME, USER_NAME, PASSWORD, DB_NAME);
    
    $result = $mysqli->query("SELECT * FROM users WHERE email='$email'");
    if ( $result->num_rows > 0 && $result->num_rows < 2)
    {
        $user = null;
        foreach($result as $row) {
            $user = $row;
        }

        if ( password_verify($password, $user['password']) && $user['status'] == 1 )
        {        
            echo '<pre>';
            var_dump($user);
            echo '</pre>';
            $user['id'] = null;
            $user['password'] = null;
            $user['email'] = null;
            header('Content-Type: application/json');
            echo json_encode($user);
        }
        else
        {
            header('Content-Type: application/json');
            echo json_encode(null);
        }
}
else {
    echo "email не существует";
}
?>