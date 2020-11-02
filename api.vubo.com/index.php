<?php


define('TELEGRAM_TOKEN', '1038348680:AAHE-HM-9NGOq6D0pV0ZLoLJYi2MjhWTk2o');
define('TELEGRAM_CHATID', '-497447602');

header("Access-Control-Allow-Origin: *");
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


function message_to_telegram($text)
{
    $botApiToken = '1038348680:AAHE-HM-9NGOq6D0pV0ZLoLJYi2MjhWTk2o'; // токен бота

$data = [
    'chat_id' => '-497447602', // название канала
    'text' => $text
];

$resp = file_get_contents("https://api.telegram.org/bot{$botApiToken}/sendMessage?" . http_build_query($data) );

}




    $name  = isset($_GET['name']) ? $_GET['name'] : "";
    $surname  = isset($_GET['surname']) ? $_GET['surname'] : "";
    $email = isset($_GET['email']) ? $_GET['email'] : "";
    $phone  = isset($_GET['phone']) ? $_GET['phone'] : "";
    $text = isset($_GET['text']) ? $_GET['text'] : "";

    if($name && $email){
        require 'vendor/autoload.php';

        $mail = new PHPMailer(true);
        try{
            $text = 'Имя: ' . $name . "\nФамилия: " . $surname . "\nEmail: " . $email . ( strcasecmp($phone, "") ? ("\nТелефон: " . $phone) : "") . "\n\nПовідомлення: " . $text;
            echo message_to_telegram($text);
            $mail->isSMTP();                                     
            $mail->Host       = 'smtp.gmail.com';                
            $mail->SMTPAuth   = true;                             
            $mail->Username   = 'serveyko.sites.test@gmail.com';           
            $mail->Password   = '_CJkjdtq71';                       
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         
            $mail->Port       = 587;

            $mail->setFrom('serveyko.sites.test@gmail.com', 'Contact form');
            $mail->addAddress("maximum.lenovo.ml@gmail.com");   

            $mail->isHTML(true);   
            $mail->Subject = 'Contact form';
            $body = 'Имя: ' . $name . "<br>Фамилия: " . $surname . "<br>Email: " . ( (strcasecmp($phone, "") || $phone == null) ? ("<br>Телефон: " . $phone) : "") . "<br><br>" . $text;
            $mail->Body    = $body;

            if($mail->send()){
                echo 1;
            }
        }catch (Exception $e){
            echo "Message couldn't be sent. Error: ", $mail->ErrorInfo;
        }
    }else{
        echo $name . $email . $phone . $text;
    }

?>