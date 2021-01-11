<?php
$admin_email = "tinrios3@gmail.com";
$name = $_POST["Name"];
$asunto = $_POST["Subject"];
$message = $_POST["Message"];
$email = $_POST["Email"];
$subject = "Nueva solicitud de contacto Juan";
$content = "Nombre: " . $name . "\n" . "Correo: " . $email . "\n" . "Asunto: " . $asunto  . "\n" .  "Mensaje: " . $message;
mail($admin_email, $subject, $content, "From:" . $email);
?>