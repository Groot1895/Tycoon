
<?php

  $type = $_POST['type'];
  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $mobile = $_POST['mobile'];
  $message = $_POST['message'];

  $email_from = 'tycoonsolutions.in';
  $email_subject = "$visitor_email - $mobile";
  $email_body = "\n $name - $type \n"."\n $message \n";

  $to = "kponnivalavan95@gmail.com";
  $headers = "From: $email_from \n";

  mail($to,$email_subject,$email_body,$headers);

?>