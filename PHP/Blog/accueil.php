
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/accueil.css">
    <title>Document</title>
</head>
<body>
    
    
    <h1>Le blog des supers héros incroyablement rincés</h1>
    
    <nav>
        <a href="inscription.php" title="s'inscrire au blog">Inscription</a>
    </nav>

    <img src="images/banane.png" alt="super banane" id="banane">
    <script>
        let banane = document.getElementById('banane');
        let coordonneesX = banane.offsetLeft;
        let coordonneesY = banane.offsetTop;
        let action = setInterval(bouge, 5);
        action;
        
        function bouge() {
            coordonneesX -= 4;
            if (coordonneesX > -10) {
                banane.style.left =  coordonneesX + 'px';
            } else {
                coordonneesY += 0.5;
                if (coordonneesY < 700) {
                    banane.style.top = coordonneesY + 'px';
                } else {
                    clearInterval(action);
                }
                
            }
        }
    
       
    </script>


    <!-- *************** messages d'erreur ****************************-->

    <section id="erreurs">
        <?php
            if (isset($_GET['userVide'])) { ?>
                <div class="messagesErreur">
                    <span class="erreurs">Veuillez entrer vo</span>tre identifiant.
                </div>
            <?php }
            if (isset($_GET['passwordVide'])) { ?>
                <div class="messagesErreur">
                    <span class="erreurs">Veuillez entrer vo</span>tre mot de passe.
                </div>
            <?php }
            if (isset($_GET['passwordErrone'])) { ?>
                <div class="messagesErreur">
                    <span class="erreurs">Mot de passe incor</span>rect.
                </div>
            <?php }
            if (isset($_GET['probleme'])) { ?>
                <div class="messagesErreur">
                    <span class="erreurs">Arrete de jouer av</span>ec le HTML.
                </div>
            <?php } 
            if (isset( $_GET['inscription'])) {?>
                <div class="messageInscription">
                    <span class="erreurs">Inscription confir</span>mée
                </div>
            <?php } 
            if (isset($_GET['session'])) { ?>
                <div class="messageInscription">
                    <span class="erreurs">Connecte toi avant</span>
                </div>
            <?php
            } 
            if (isset($_GET['usernameInconnu'])) { ?>
                <div class="messageInscription">
                    <span class="erreurs">username inconnu
 </span>               </div>
            <?php
            }
            ?>
               
    </section>


    <!-- ************** formulaire de connexion ************************ -->

    <form action="traitements/connex_inscrip.php" method="POST">
        <label for="username" class="labels">Write your username</label>
        <input type="text" name="username" class="inputs"><br/>
        <label for=""></label>
        <label for="password" class="labels">Write your password</label>
        <input type="password" name="password" class="inputs"><br/>
        <input type="hidden" name="connect">
        <div id="submit">
            <input type="submit" id="valider">
        </div>
        
    </form>
    
</body>
</html>