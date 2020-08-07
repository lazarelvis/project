<?php
require "dbh.inc.php";

if (isset($_POST['adaugare'])) {

    $nume = $_POST['nume'];
    $email = $_POST['email'];
    $mesaj = $_POST['mesaj'];


    $sql = " Insert into contact(nume,email,mesaj)VALUES ('$nume','$email','$mesaj');
";
    $stmt = mysqli_stmt_init($conn);
    if (!mysqli_stmt_prepare($stmt, $sql)){
        header("Location: ../addFiles.php?error=sqlerror");
        exit();
    }
    $result = mysqli_query($conn, $sql);
    $resultCheck = mysqli_num_rows($result);
    header("Location: ../index.php?succes");
    exit();
}else {
    header("Location: ../index.php?eroare");
    exit();
}