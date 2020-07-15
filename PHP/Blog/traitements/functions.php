<?php

function verifUserName($username) {
    $usernameExist = "SELECT COUNT(username) FROM user WHERE username = :username";
    $dbh = dbConnect('blog', 'root', '');
    $stmtUsername = $dbh->prepare($usernameExist);
    $stmtUsername->execute([
        ":username" => $username
    ]);
    $res = $stmtUsername->fetch(PDO::FETCH_ASSOC);
    if ($res['COUNT(username)'] > 0) {
        return false;
    } else {
        return true;
    }
}

function verifMail($mail) {
    if (preg_match("#^[a-z0-9.]{4,30}[@][a-z]{3,10}[\.][a-z]{2,3}$#", $mail)) {
        return true;
    } else {
        return false;
    }
}

function verifPasswordUn($passwordUn) {
    if (mb_strlen($passwordUn) > 8) {
        return true;
    } else {
        return false;
    }
}

function verifPasswordDeux($passwordUn, $passwordDeux) {
    if ($passwordUn === $passwordDeux) {
        return true;
    } else {
        return false;
    }
}