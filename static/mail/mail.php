<?php
if(isset($_POST['wsubmit'])){
    $to = "kponnivalavan95@gmail.com"; // this is your Email address
    $from = "tycoon@mail.com"; // this is the sender's Email address
    $wmail = $_POST['wmail'];
    $wnum = $_POST['wnum'];
    $subject = "Form submission";
    $message = $wmail . " " . $wnum . " wrote the following:" . "\n\n" . $_POST['wmessage'];

    $headers = "From:" . $from;
    mail($to,$subject,$message,$headers);
    //echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    // You cannot use header and echo together. It's one or the other.
    }
?>
