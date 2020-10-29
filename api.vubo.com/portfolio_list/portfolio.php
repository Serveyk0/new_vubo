<?php
set_time_limit(0);
define('__ROOT__', dirname(dirname(__FILE__)));
require_once(__ROOT__ . "/portfolio_list/database_data.php");
$data = $_GET;

$crud = intval($data['crud']);
if (!empty($_FILES['file'])) {
    add_image();
}

switch ($crud) {
    case 1:
        return select();
        break;
    case 2:
        return insert();
        break;
    case 3:
        return update();
        break;
    case 4:
        return delete();
        break;
    case 5:
        
    sleep(2);
        return add_image();
        break;
    case 6:
        echo 11111111;
        return insert_image();
        break;
}

function select()
{
    $mysqli = new mysqli(SERVER_NAME, USER_NAME, PASSWORD, DB_NAME);

    if (!$mysqli->connect_errno) {
        $query = $mysqli->query("SELECT p.*, 
        (SELECT GROUP_CONCAT(  concat( s.image_name ) SEPARATOR ';' )
        FROM portfolios_images s 
        WHERE s.project_id = p.id) AS images
        from portfolios AS p");
        $types = array();

        while (($row =  mysqli_fetch_assoc($query))) {
            $types[] = $row;
        }
        header('Content-Type: application/json');
        echo json_encode($types);
    }
}

function insert()
{
    $mysqli = new mysqli(SERVER_NAME, USER_NAME, PASSWORD, DB_NAME);
    $description = $_GET['description'];
    $title = $_GET['title'];
    $href = $_GET['href'];
    if (!$mysqli->connect_errno) {
        $query = $mysqli->query("INSERT INTO portfolios (title, description, href) VALUES ('$title', '$description', '$href')");
        $mysqli->query($query);
        
        header('Content-Type: application/json');
        echo json_encode($mysqli->insert_id);
    }
}

function update()
{
    $mysqli = new mysqli(SERVER_NAME, USER_NAME, PASSWORD, DB_NAME);
    $title = $_GET['title'];
    $description = $_GET['descriotion'];
    if (!$mysqli->connect_errno) {
        return $mysqli->query("INSERT INTO portfolios (title, description) VALUES ($title, $description)");
    }
}

function delete()
{
    $mysqli = new mysqli(SERVER_NAME, USER_NAME, PASSWORD, DB_NAME);
    $title = $_GET['title'];
    $description = $_GET['descriotion'];
    if (!$mysqli->connect_errno) {
        return $mysqli->query("INSERT INTO portfolios (title, description) VALUES ($title, $description)");
    }
}

function add_image()
{
    sleep(1);
    if (ob_get_length()) {
        ob_end_flush();
        flush();
    }
    $info = pathinfo($_FILES['file']['name']);
    $newname = time() . $_FILES['file']['name'];
    $target = $_SERVER['DOCUMENT_ROOT'] . '/images/' . $newname;
    move_uploaded_file($_FILES['file']['tmp_name'], $target);
    header('Content-Type: application/json');
    echo json_encode($newname);
}

function insert_image()
{
    $mysqli = new mysqli(SERVER_NAME, USER_NAME, PASSWORD, DB_NAME);
    $image_name = $_GET['image_name'];
    $project_id = $_GET['project_id'];
    if (!$mysqli->connect_errno) {
        $mysqli->query("INSERT INTO portfolios_images (image_name, project_id) VALUES ('$image_name', $project_id)");
    }
}
