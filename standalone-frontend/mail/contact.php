<?php

// Validate and sanitize input
if (isset($_POST['name'], $_POST['email'], $_POST['subject'], $_POST['message']) &&
    !empty($_POST['email']) && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {

    $name = strip_tags(trim($_POST['name']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $subject = strip_tags(trim($_POST['subject']));
    $message = strip_tags(trim($_POST['message']));

    $to = "nirbhayofficial0@gmail.com";

    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $body = "You have received a new message from your website contact form.\n\n".
            "Here are the details:\n".
            "Name: $name\n".
            "Email: $email\n".
            "Subject: $subject\n\n".
            "Message:\n$message";

    if (mail($to, $subject, $body, $headers)) {
        echo "Mail Sent!";
    } else {
        echo "Mail not sent!";
    }

} else {
    echo "Invalid input!";
}
?>
