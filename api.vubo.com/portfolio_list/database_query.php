<?php

define('__ROOT__', dirname(dirname(__FILE__)));
require_once(__ROOT__ . "/portfolio_list/database_data.php");

create_database();

function create_database()
{
    // $conn = new mysqli(SERVER_NAME, USER_NAME, PASSWORD);
    // if ($conn->connect_error)
    //     die("Connection failed: " . $conn->connect_error);

    // // Create database
    // $sql = "CREATE DATABASE IF NOT EXISTS " . DB_NAME;
    // if ($conn->query($sql) === TRUE)
    //     echo "Database created successfully";
    // else
    //     echo "Error creating database: " . $conn->error;

    
    // $conn->close();
    $conn = new mysqli(SERVER_NAME, USER_NAME, PASSWORD, DB_NAME);

    if ($conn->connect_error)
        die("Connection failed: " . $conn->connect_error);

    $errors = [];
    $sql_1 = "CREATE TABLE IF NOT EXISTS portfolios (
      id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(30) NOT NULL,
      description TEXT NOT NULL,
      href VARCHAR(100) NOT NULL
      )";

    $sql_2 = "CREATE TABLE IF NOT EXISTS portfolios_images (
        image_name VARCHAR(30) PRIMARY KEY,
        project_id INT(6) UNSIGNED NOT NULL,
        FOREIGN KEY (project_id) REFERENCES portfolios (id) ON DELETE CASCADE
        )";

    $sql_3 = "CREATE TABLE IF NOT EXISTS users (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        status INT(1) UNSIGNED NOT NULL,
        name VARCHAR(30) NOT NULL,
        email VARCHAR(50) NOT NULL,
        password VARCHAR(100) NOT NULL,
        session_hash VARCHAR(100)
        )";
    $tables = [$sql_1, $sql_2, $sql_3];


    foreach ($tables as $k => $sql) {
        $query = @$conn->query($sql);

        if (!$query)
            $errors[] = "Table $k : Creation failed ($conn->error)";
        else
            $errors[] = "Table $k : Creation done";
    }

    $conn->close();
}
