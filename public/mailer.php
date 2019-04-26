<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function

require __DIR__.'/mailer/PHPMailerAutoload.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 2;                                       // Enable verbose debug output
    $mail->isSMTP();                                            // Set mailer to use SMTP
    $mail->Host       = 'smtp.mail.ru';  // Specify main and backup SMTP servers
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'info@topsecurity.kz';                     // SMTP username
    $mail->Password   = 'topqwe123';                               // SMTP password
    $mail->SMTPSecure = 'ssl';                                  // Enable TLS encryption, `ssl` also accepted
    $mail->Port       = 465;      
    $mail->CharSet 	= 'utf-8';                              // TCP port to connect to

    //Recipients
    $mail->setFrom('info@topsecurity.kz', 'TopSecurity KZ');
    $mail->addAddress('info@topsecurity.kz', 'Info');                 
    $mail->addCC("callcentre@muratov.kz");      
    $_POST = json_decode(file_get_contents('php://input'), true);
    $input_name = $_POST["name"];
    $input_phone = $_POST["phone"];

    // Content
    $mail->isHTML(true);        
    $mail->Subject = "Заказали звонок";                          // Set email format to HTML    
    $mail->Body	= "<p>Имя клиента - $input_name</p> <p>Телефон клиента - $input_phone</p>   ";

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}