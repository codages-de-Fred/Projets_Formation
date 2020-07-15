<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/inscription.css">
    <title>Document</title>
</head>
<body>
    <h1>Page d'inscription</h1
>

    <section id="formulaire">
        <form action="traitements/connex_inscrip.php" method="POST" enctype="multipart/form-data">

            <span class="erreurs">
                <?php if (isset($_GET['usernameExist'])){ ?>
                <span class="message">Ce nom existe déjà</span>
            <?php
            }
            ?><br/>
            </span>
            <span class="erreurs">
                <?php if (isset($_GET['usernameVide'])){ ?>
                <span class="message">Entrez un nom</span>
            <?php
            }
            ?><br/>
            </span>
            <label for="username">Write your username</label>
            <input type="text" name="username" class="input"><br/>

            <span class="erreurs">
                <?php if (isset($_GET['mailError'])){ ?>
                <span class="message">erreur d'adresse mail</span>
            <?php } ?><br/>
            </span>
            <label for="mail">Write your mail address</label>
            <input type="mail" name="mail" class="input"><br/>

            <span class="erreurs">
                <?php if (isset($_GET['PasswordUnLongueur'])){ ?>
                <span class="message">8 caractères minimum</span>
            <?php } ?>
            </span><br/>
            <label for="passwordUn">Write your password</label>
            <input type="password" name="passwordUn" class="input"><br/>

            <span class="erreurs">
                <?php if (isset($_GET['passwordDifferent'])){ ?>
                <span class="message">Entrez le même mot de passe</span>
            <?php
            }
            ?>
            </span><br/>
            <span class="erreurs">
                <?php if (isset($_GET['passwordDeuxVide'])){ ?>
                <span class="message">Veuillez confirmer le mot de passe</span>
            <?php
            }
            ?>
            </span><br/>
            <label for="passwordDeux">Confirm your password</label>
            <input type="password" name="passwordDeux" class="input"><br/>

            <label for="avatar">Pour insérer votre avatar</label>
            <input type="file" name="avatar"><br/>

            <input type="hidden" name="inscription">
            <div id="submit">
                <input type="submit" id="valider">
            </div>
            
            
            
        </form>
    </section>
    
    
</body>
</html>