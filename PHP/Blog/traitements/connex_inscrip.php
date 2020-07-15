<?php

session_start();

include('../../connexion_db.php');
$dbh = dbConnect('blog', 'root', '');

//*******************  verification de la demande de connexion au blog *******************

//on récupère et vérifie les éléments envoyés
if (isset($_POST['connect'])) {
    if (isset($_POST['username']) && !empty($_POST['username'])) {
        $username = $_POST['username'];
    } else {
        header("Location: ../accueil.php?usernameVide");
    }
    if (isset($_POST['password']) && !empty($_POST['password'])) {
        $password = $_POST['password'];
    } else {
        header("Location: ../accueil.php?passwordVide");
    }

    //on vérifie si le nom donné n'existe pas
    $recherche = "SELECT * FROM user WHERE username = :username";
    $stmt = $dbh->prepare($recherche);
    $stmt->execute([
        ":username" => $username
    ]);
    $res = $stmt->fetch(PDO::FETCH_OBJ);
    if ($res) {
        //si le mot de passe correspond
        if (password_verify($password, $res->password)) {
            //on va vers le blog et on enregistre son nom ds une session
            $_SESSION['username'] = $username;
            $_SESSION['id'] = $res->idUser;
            header("Location: ../articles.php");
        } else {
            header("Location: ../accueil.php?passwordErrone");
        }
    } else {
        header("Location: ../accueil.php?usernameInconnu");
    }
} 

//*******************  Vérifications de l'inscription au blog ****************

//si c'est la page d'inscription qui envoie la demande de vérification
else if (isset($_POST['inscription'])) {

    //------ fonctions de vérification ----------------

    include("functions.php");

    //------ vérification des envois du formulaire-------

    //compteur de vérification des $_POST
    $compteurDesPost = 0; 

    if (isset($_POST['username']) && !empty($_POST['username'])) {
        $username = $_POST['username'];
        if (verifUserName($username)) {
            $compteurDesPost++;
        } else {
            header("Location: ../inscription.php?usernameExist");
        }
    } else {
        header("Location: ../inscription.php?usernameVide");
    }

    if (isset($_POST['mail']) && !empty($_POST['mail'])) {
        $mail = $_POST['mail'];
        if (verifMail($mail)) {
            $compteurDesPost++;
        } else {
            header("Location: ../inscription.php?mailError");
        }
    } else {
        header("Location: ../inscription.php?mailVide");
    }

    if (isset($_POST['passwordUn']) && !empty($_POST['passwordUn'])) {
        $passwordUn = $_POST['passwordUn'];
        if (verifPasswordUn($passwordUn)) {
            $compteurDesPost++;
        } else {
            header("Location: ../inscription.php?passwordUnLongueur");
        }
    } else {
        header("Location: ../inscription.php?passwordUnVide");
    }

    if (isset($_POST['passwordDeux']) && !empty($_POST['passwordDeux'])) {
        $passwordDeux = $_POST['passwordDeux'];
        if (verifPasswordDeux($passwordUn, $passwordDeux)) {
            $compteurDesPost++;
        } else {
            header("Location: ../inscription.php?passwordDifferent");
        }
    } else {
        header("Location: ../inscription.php?passwordDeuxVide");
    }

    //on récupère l'image de l'avatar
    $nameAvatar = $_FILES['avatar']['name'];
    $avatar = $_FILES['avatar']['tmp_name'];
    move_uploaded_file($avatar, "../avatars/$nameAvatar");


    //si toutes les vérifications sont validées et que tous les $_POST sont validés
    //alors validation de l'inscription 
    if ($compteurDesPost === 4 && verifUserName($username) &&  verifMail($mail)
        && verifPasswordUn($passwordUn) && verifPasswordDeux($passwordUn, $passwordDeux)) {
            $rajout = "INSERT INTO user (username, password, avatar, mail) 
                        VALUES (:username, :password, :avatar, :mail)";
            $dbh = dbConnect('blog', 'root', '');
            $stmtInsert = $dbh->prepare($rajout);
            $code = password_hash($passwordUn, PASSWORD_DEFAULT);
            $stmtInsert->execute([
                ":username" => $username,
                ":password" => $code,
                ":avatar" => $nameAvatar,
                ":mail" => $mail
            ]);
            header("Location: ../accueil.php?inscription");
        }

} else {
    header("Location: ../accueil.php?probleme");
}

    