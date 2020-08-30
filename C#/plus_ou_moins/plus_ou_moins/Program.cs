using System;
using System.Runtime.InteropServices.ComTypes;

namespace plus_ou_moins
{
    class Program
    {
        static void Main(string[] args)
        {
            SearchNombreAleatoire();
        }

        private static void SearchNombreAleatoire()
        {
            int nombre = new Random().Next(1, 100);
            Ask(nombre);
        }

        private static void Ask(int nombre)
        {
            Console.WriteLine("Veuillez saisir un nombre compris entre 1 et 100 et valider avec la touche \"Entrée\"");
            string reponse = Console.ReadLine();
            Search(nombre, reponse);
        }

        private static void Search(int nombre, string reponse)
        {
            try
            {
                int reponseInInt = Int32.Parse(reponse);
                if (reponseInInt < nombre)
                {
                    Console.WriteLine($"'{reponseInInt}' est inférieur, réessayez :");
                    Ask(nombre);
                }
                else if (reponseInInt > nombre){
                    Console.WriteLine($"'{reponseInInt}' est supérieur, réessayez :");
                    Ask(nombre);
                }
                else if (reponseInInt == nombre)
                {
                    Console.WriteLine($"GAGNE, vous avez trouvé '{reponseInInt}'");
                    playAgain();
                }
                
            }
            catch (FormatException)
            {
                Console.WriteLine($"Impossible, '{reponse}' n'est pas un nombre entier");
            }
            
        }

        private static void playAgain()
        {
            Console.WriteLine("Voulez-vous continuer ? (O/N)");
            ConsoleKeyInfo question = Console.ReadKey();
            if (question.Key == ConsoleKey.O)
            {
                SearchNombreAleatoire();
            }
            else if (question.Key == ConsoleKey.N)
            {
                Console.WriteLine("A bientôt");
            }
        }
    }
}
