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
    <link rel="stylesheet" type="text/css" href="css/ajout_article.css">
    <title>Nouvel article</title>
</head>
<body>
    <h1>Formulaire d'ajout de nouvel article</h1>

    <form action="traitements/article_commentaires.php?article" method="POST" enctype="multipart/form-data">

        <label for="titre">Le titre de votre article</label><br/>
        <input type="text" name="titre" class="input"><br/>

        <textarea name="contain"  cols="30" rows="10" class="input"></textarea><br/>
        <!-- ajout de la photo -->
        <input type="file" name="image" accept="image/jpeg, image/png">

        <input type="submit">
    </form>
    <nav id="annuler">
        <a href="articles.php" ><button>annuler</button></a>
    </nav>
    
</body>
</html>