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
    <link rel="stylesheet" type="text/css" href="css/articles.css">
    <title>Articles</title>
</head>
<body>
    <nav id="deconnexion">
        <a href="compte_user/compte_user.php">Mon compte</a>
        <a href="traitements/deconnexion.php">Déconnexion</a>
    </nav>

 <!-- *************** affichage des articles ****************************-->
    <?php
        //connexion à la base de données
        include('../connexion_db.php');
        $dbh = dbConnect('blog', 'root', '');

        //requête à la bdd pour afficher les articles
        $req = "SELECT * FROM articles INNER JOIN user ON idUser = id_user 
                ORDER BY date DESC";
        $stmt = $dbh->prepare($req);
        $stmt->execute();

        //affichage des articles
        $res = $stmt->fetchAll(PDO::FETCH_CLASS);
        foreach ($res as $article) { ?>
            <a href="comments.php?id=<?=$article->idArticles?>" title="vers les commentaires">
                <div class="articles">
                    <h2><?=$article->title?></h2><br/>
                    <div>
                        <img src="images/<?=$article->image?>" alt="image du super héros">
                    </div>
                    <h4><span>créé par <img src="avatars/<?=$article->avatar?>" alt="avatar créateur" class="avatar">
                        </span><?=$article->username?>
                    </h4>
                    <span> le <?=$article->date?></span><br/>
                    <p><?=$article->contain?></p>
                </div>
            </a>
        <?php } ?>
    
<!-- ******************* ajout d'articles **************************-->

        <nav>
            <h3>Pour ajouter un article</h3>
            <a href="ajout_article.php" title="ajouter un nouvel article"><button>ajout d'article</button></a>
        </nav>
</body>
</html>