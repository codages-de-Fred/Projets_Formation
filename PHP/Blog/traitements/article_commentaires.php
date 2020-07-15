<?php
session_start();

        

//**************** ajout d'articles ********************************* */

if (isset($_GET['article'])) {
        //compteur des vérifications
    $compteurValidations = 0;

    //vérification d'envoi des données
    if (isset($_POST['titre']) && empty($_POST['titre'])) {
        header("Location: ../ajout_article.php?titre");
    } else {
        $titre = $_POST['titre'];
        $compteurValidations++;
    }

    if (isset($_POST['contain']) && empty($_POST['contain'])) {
        header("Location: ../ajout_article.php?contain");
    } else {
        $contain = $_POST['contain'];
        $compteurValidations++;
    }

    // récupération de l'image
    $nameImage = $_FILES['image']['name'];
    $image = $_FILES['image']['tmp_name'];
    //envoi de l'image dans le dossier images
    move_uploaded_file($image, "../images/$nameImage");


    //récupération du nom de l'utilisateur et de son id
    $id = $_SESSION['id'];

    //ajout de l'article à la bdd
    if ($compteurValidations === 2) {
        include('../../connexion_db.php');
        $dbh = dbConnect('blog', 'root', '');

        //ajout
        $date = date("Y-m-d");
        $add = "INSERT INTO articles (title, contain, date, id_user, image) 
                VALUES ('$titre', '$contain', '$date', '$id', '$nameImage')";
        $stmt = $dbh->prepare($add);
        $stmt->execute();
        header("Location: ../articles.php"); //on renvoie l'id de l'article en question
    }
}


/*********************** ajout des commentaires ****************************** */

if (isset($_GET['comment'])) {

    //conditions des champs remplis
    if (isset($_POST['comment']) && !empty($_POST['comment'])) {

        //récupération des valeurs
        $comment = $_POST['comment'];
        $date = date("Y-m-d");
        $idArticle = $_GET['comment'];
        $id = $_SESSION['id'];

        //connexion à la bdd
        include('../../connexion_db.php');
        $dbh = dbConnect('blog', 'root', '');
        $insert = "INSERT INTO comments (comment, id_article, dateComment, idUser_comments)
                    VALUES (:comment, :idArticle, :date, :id)";
        $stmt = $dbh->prepare($insert);
        $stmt->execute([
            ":comment" => $comment,
            ":idArticle" => $idArticle,
            ":date" => $date,
            ":id" => $id
        ]); 
        //header("Location: ../comments.php?id=$idArticle");
    }
}