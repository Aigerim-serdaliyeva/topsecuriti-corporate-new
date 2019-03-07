<?php
	// define("AUTH_SERVER", "smtp.gmail.com");
	// define("AUTH_PORT", "465");
	// define("AUTH_LOGIN", "sanch941@gmail.com");
	// define("AUTH_PASSWORD", "153624sanch_94");
    // define("EMAIL_FROM", "sanch941@gmail.com");
	define("AUTH_SERVER", "smtp.yandex.ru");
	define("AUTH_PORT", "465");
	define("AUTH_LOGIN", "info@ladyssecrets.kz");
	define("AUTH_PASSWORD", "In10fo12(!");
    define("EMAIL_FROM", "info@ladyssecrets.kz");
    
	define("EMAIL_NAME", "Top Security Kz");
	define("EMAIL_SUBJECT", "Заказали звонок");
	define("EMAIL_BODY", "Имя - %s <br> Телефон - %s");

	require __DIR__.'/mailer/PHPMailerAutoload.php';

	/* make model data */

		$mail = new PHPMailer();
		$mail->isSMTP();
		$mail->isHTML(true);
		$mail->SMTPAuth     = true;
		$_POST = json_decode(file_get_contents('php://input'), true);
        $input_name = $_POST["name"];
        $input_phone = $_POST["phone"];
        $input_master = $_POST["master"];
		$mail->SMTPSecure   = true;
		$mail->CharSet 	= 'utf-8';
		$mail->Host 	= AUTH_SERVER;
		$mail->Port     = AUTH_PORT;
		$mail->Username = AUTH_LOGIN;
		$mail->Password = AUTH_PASSWORD;

		$mail->SetFrom(EMAIL_FROM, EMAIL_NAME);        
        $mail->addAddress('info@topsecurity.kz', 'Top Security Kz');
        $mail->addCC("callcentre@muratov.kz");
        $mail->addCC("z.bertoleuova@newestate.kz");
        $mail->addCC("a.zhadraeva@newestate.kz");

		$mail->Subject = EMAIL_SUBJECT;
		$mail->Body	   = "<p>Имя клиента - $input_name</p> <p>Телефон клиента - $input_phone</p>   ";

		$mail->send();
	
