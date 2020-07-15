<?php
session_start();
$id = $_SESSION['id'];

include('../../connexion_db.php');
include("functions.php");

function modif($colonne, $valeur,$id) {
    $dbh = dbConnect('blog', 'root', '');
    $req = "UPDATE user SET $colonne = '$valeur' WHERE idUser = '$id'"; 
    $stmt = $dbh->prepare($req);
    $stmt->execute();
}



//----------- si demande de changement de username ---------------------------

if (isset($_GET['username'])) {
    if (!empty($_POST['username'])) {
        $username = $_POST['username'];
        if (verifUserName($username)) {
            $colonne = 'username';
            modif($colonne, $username, $id);
            header("Location: ../compte_user/compte_user.php");
        } else {
            header("Location: ../compte_user/modif.php?usernameUtilise");
        }
    } else {
        header("Location: ../compte_user/modif.php?usernameVide");
    }
}

//----------- si demande de changement de mail ---------------------------

if (isset($_GET['mail'])) {
    if (!empty($_POST['mail'])) {
        $mail = $_POST['mail'];
        if (verifMail($mail)) {
            $colonne = 'mail';
            modif($colonne, $mail, $id);
            header("Location: ../compte_user/compte_user.php");
        } else {
            header("Location: ../compte_user/modif.php?mailInvalid");
        }
    } else {
        header("Location: ../compte_user/modif.php?mailVide");
    }
} 

//----------- si demande de changement de password ---------------------------

if (isset($_GET['passwordUn'])) {
    if (!empty($_POST['passwordUn'])) {
        $passwordUn = $_POST['passwordUn'];
        if (verifpasswordUn($passwordUn)) {
            $colonne = 'passwordUn';
            modif($colonne, $passwordUn, $id);
            header("Location: ../compte_user/compte_user.php");
        } else {
            header("Location: ../compte_user/modif.php?passwordUnInvalid");
        }
    } else {
        header("Location: ../compte_user/modif.php?passwordUnVide");
    }
}
if (isset($_GET['passwordDeux'])) {
    if (!empty($_POST['passwordDeux'])) {
        $passwordDeux = $_POST['passwordDeux'];
        if (verifpasswordDeux($passwordUn, $passwordDeux)) {
            $colonne = 'passwordDeux';
            modif($colonne, $passwordDeux, $id);
            header("Location: ../compte_user/compte_user.php");
        } else {
            header("Location: ../compte_user/modif.php?passwordDeuxInvalid");
        }
    } else {
        header("Location: ../compte_user/modif.php?passwordDeuxVide");
    }
}

//------------ si changement d'avatar -------------------------------

if (isset($_GET['avatar'])) {
    if (!empty($_FILES['avatar'])) {
        //on récupère l'image de l'avatar
        $nameAvatar = $_FILES['avatar']['name'];
        $avatar = $_FILES['avatar']['tmp_name'];
        move_uploaded_file($avatar, "../avatars/$nameAvatar");

        //on modifie l'avatar
        $colonne = 'avatar';
        modif($colonne, $nameAvatar, $id);
        header("Location: ../compte_user/compte_user.php");
    } else {
        header("Location: ../compte_user/modif.php?avatarVide"); 
    }
} 
