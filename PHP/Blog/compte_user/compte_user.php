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
    <link rel="stylesheet" type="text/css" href="../css/compte_user.css">
    <title>Document</title>
</head>
<body>
    <nav id="deconnexion">
        <a href="../articles.php">Les articles</a>
        <a href="../traitements/deconnexion.php">Déconnexion</a>
    </nav>

    <!-- on affiche les données de l'utilisateur --------->
    <?php
    $id = $_SESSION['id'];
    include('../../connexion_db.php');
    $dbh = dbConnect('blog', 'root', '');
    $req = "SELECT * FROM user WHERE idUser = :idUser";
    $stmt = $dbh->prepare($req);
    $stmt->execute([
        ":idUser" => $id
    ]); ?>
    <h1>Mon compte</h1>

    <section id="affiche">
        <?php
        $affiche = $stmt->fetchAll(PDO::FETCH_CLASS);
        foreach ($affiche as $colonne) { ?>
            <span class="titres"><b>nom d'utilisateur :</b> <?=$colonne->username?></span><br/>
            <span class="titres"><b>adresse mail :</b> <?=$colonne->mail?></span><br/>
            <span class="titres"><b>Mon avatar :</b></span><br/>
            <img src="../avatars/<?=$colonne->avatar?>" alt="avatar">
        <?php    
        }
        ?>
    </section>

    <nav>
        <a href="modif.php"><button>modifier</button></a>
    </nav>
    
</body>
</html>