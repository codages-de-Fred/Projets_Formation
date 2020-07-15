<?php
session_start();
if (!isset($_SESSION['username'])) {
    header("Location: accueil.php?session");
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="../css/modif.css">
    <title>Document</title>
</head>
<body>
    <nav id="deconnexion">
        <a href="compte_user.php">Mon compte</a>
        <a href="../articles.php">Les articles</a>
        <a href="../traitements/deconnexion.php">Déconnexion</a>
    </nav>
<section>
    <form action="../traitements/compte_user_modif.php?username" method="POST">
        <label for="username">changer votre nom d'utilisateur : </label>
        <input type="text" name="username"><br/>
        <?php
            if (isset($_GET['userUtilise'])) { ?>
                <span class="messageErreur">nom d'utilisateur déjà utilisé</span>
            <?php
            } if (isset($_GET['userVide'])) { ?>
                <span class="messageErreur">Veuillez entrer un nom d'utilisateur</span>
            <?php
            }
        ?>
        <input type="submit" class="submit"><br/>
        
    </form>

    <form action="../traitements/compte_user_modif.php?mail" method="POST">
        <label for="mail">changer votre adresse mail : </label>
        <input type="mail" name="mail"><br/>
        <?php
            if (isset($_GET['mailVide'])) { ?>
                <span class="messageErreur">Veuillez entrer une adresse mail</span>
            <?php
            } if (isset($_GET['mailInvalid'])) { ?>
                <span class="messageErreur">adresse mail invalide</span>
            <?php
            }
        ?>
        <input type="submit" class="submit"><br/>
    </form>

    <form action="../traitements/compte_user_modif.php?password" method="POST">
        <label for="passwordUn">changer votre mot de passe : </label>
        <input type="password" name="passwordUn"><br/>
        <?php
            if (isset($_GET['passwordUnVide'])) { ?>
                <span class="messageErreur">Veuillez entrer un mot de passe</span>
            <?php
            } if (isset($_GET['passwordInvalid'])) { ?>
                <span class="messageErreur">Minimum 8 caractères</span>
            <?php
            }
        ?>
        <label for="passwordDeux">confirmer votre mot de passe : </label>
        <input type="password" name="passwordDeux"><br/>
        <?php
            if (isset($_GET['passwordDeuxVide'])) { ?>
                <span class="messageErreur">Veuillez confirmer le mot de passe</span>
            <?php
            } if (isset($_GET['passwordDeuxInvalid'])) { ?>
                <span class="messageErreur">Les mots de passe doivent être identiques</span>
            <?php
            }
        ?>
        <input type="submit" class="submit">
    </form>

    <form action="../traitements/compte_user_modif.php?avatar" method="POST" enctype="multipart/form-data">
        <label for="file">changer votre avatar</label>
        <input type="file" name="avatar"><br/>
        <?php
            if (isset($_GET['avatarVide'])) { ?>
                <span class="messageErreur">Veuillez choisir une image</span>
            <?php
            } 
        ?>
        <input type="submit" class="submit">
    </form>
</section>   
</body>
</html>