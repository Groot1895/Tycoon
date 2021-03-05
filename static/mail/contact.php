
<?php

  $type = htmlspecialchars(stripslashes(trim($_POST['type'])));
  $name = htmlspecialchars(stripslashes(trim($_POST['name'])));
  $visitor_email = htmlspecialchars(stripslashes(trim($_POST['email'])));
  $mobile = htmlspecialchars(stripslashes(trim($_POST['mobile'])));
  $message = htmlspecialchars(stripslashes(trim($_POST['message'])));

  $email_subject = "$visitor_email - $mobile";
  $email_body = "$name - $type \n"."Sender mail : $visitor_email \n"."Sender Mobile : $mobile \n"."Sender Message : \n $message";

  $to = "webcall@tycoonsolutions.in";  

  mail($to,$email_subject,$email_body);

?>