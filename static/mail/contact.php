
<?php

  $type = htmlspecialchars(stripslashes(trim($_POST['type'])));
  $name = htmlspecialchars(stripslashes(trim($_POST['name'])));
  $visitor_mail = htmlspecialchars(stripslashes(trim($_POST['mail'])));
  $mobile = htmlspecialchars(stripslashes(trim($_POST['mobile'])));
  $message = htmlspecialchars(stripslashes(trim($_POST['message'])));

  $mail_subject = "$visitor_mail - $mobile";
  $mail_body = "$name - $type \n"."Sender mail : $visitor_mail \n"."Sender Mobile : $mobile \n"."Sender Message : \n $message";

  $to = "webcall@tycoonsolutions.in";  

  mail($to,$mail_subject,$mail_body);

?>