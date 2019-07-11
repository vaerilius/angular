<?php
        $mail_to = "timo.tamminen@vaerilius.fi";
        $name =  $_REQUEST['name'] ;
        $emailFrom = $_REQUEST['email'] ;
        $phone = trim($_POST["phone"]);
        $message = trim($_POST["message"]);

        # Mail Content
        $content = "Name: $name\n";
        $content .= "Email: $email\n\n";
        $content .= "Phone: $phone\n";
        $content .= "Message:\n$message\n";

        $headers = "From: $name <$email>";
        $success = mail($mail_to, "Contact from webSite", $content, $headers);
    header( "Location: https://master.d1mn8n3zr24yqh.amplifyapp.com/" );
    }

?>
