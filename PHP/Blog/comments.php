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
    <link rel="stylesheet" type="text/css" href="css/comments.css">
    <title>Document</title>
</head>
<body>
    <header>
    <nav>
        <a href="compte_user/compte_user.php">Mon compte</a>
        <a href="articles.php" title="vers les articles">Autres articles</a>
        <a href="traitements/deconnexion.php" title="se déconnecter">Déconnexion</a>
    </nav>
    </header>

    <main>        
        <section id="article">
            <?php
            //---------------- affichage de l'article------------

            //récupération de la connexion à la bdd
            include("../connexion_db.php");
            $dbh = dbConnect('blog', 'root', ''); 
            //on récupère l'id de l'article
            $id_article = $_GET['id'];
            
            $reqArticle = "SELECT * FROM articles INNER JOIN user 
                            ON idUser = id_user WHERE idArticles = :id_article 
                            ORDER BY date DESC" ;
            $stmtArticle = $dbh->prepare($reqArticle);
            $stmtArticle->execute([
                ":id_article" => $id_article
            ]);
            $resArticle = $stmtArticle->fetchAll(PDO::FETCH_CLASS); 
            foreach ($resArticle as $ligne) { ?>
                <h1><?=$ligne->title?></h1>
                <img src="images/<?=$ligne->image?>" alt="logo" id="image">
                <h4><img src="avatars/<?=$ligne->avatar?>" alt="avatar du créateur" class="avatar"> <?=$ligne->username?></h4>
                <span><?=$ligne->date?></span>
                <p><?=$ligne->contain?></p>
            <?php
            } 
            ?>                     
        </section>
        <section id="#comments">
        <?php
        //-------------- affichage des commentaires ----------------------
        ?>
            <h2>commentaires</h2>

            <?php
            $reComments = "SELECT * FROM comments INNER JOIN articles ON idArticles = id_article
                            INNER JOIN user ON idUser = idUser_comments 
                            WHERE id_article = :id_article ORDER BY dateComment DESC";
            $stmtComments = $dbh->prepare($reComments);
            $stmtComments->execute([
                ":id_article" => $id_article
            ]);
            $resComments = $stmtComments->fetchAll(PDO::FETCH_CLASS); ?>
            <div id="commentaires">
                <?php
                foreach ($resComments as $ligne) { ?>
                    <img src="avatars/<?=$ligne->avatar?>" alt="avatar" class="avatar"><h4> <?=$ligne->username?><span> le </span>
                    <?=$ligne->dateComment?></h4>
                    <span><?=$ligne->comment?></span><hr/>
                <?php } ?>
            </div>
            
        </section>
    </main>
    <!-- ****************** rajouter un commentaire ******************-->

    <form action="traitements/article_commentaires.php?comment=<?=$id_article?>" method="POST">
        <label for="comment" id="addComment">ajouter votre commentaire</label>
        <input type="text" name="comment">
        <input type="submit">
    </form>
    
</body>
</html>