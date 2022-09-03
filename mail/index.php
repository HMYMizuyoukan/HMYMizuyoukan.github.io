<?php
$to = "sanae2409@gmail.com";
$title = "あなたのメールアドレスは危険です！";
$message = "Amazonであなたのメールアドレスが不正に使用されていました。変更には100円かかります。";
$header = "From: amazon.co.jp";

mb_send_mail($to, $title, $message, $header);