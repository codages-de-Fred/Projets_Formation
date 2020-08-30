using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace boucles
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] tableauAleatoire = new int[7];
            for (int i = 0; i < tableauAleatoire.Length; i++ )
            {
                int nombre = new Random().Next(1, 10);
                if(Verif(tableauAleatoire, i, nombre))
                {
                    tableauAleatoire[i] = nombre;
                    Console.WriteLine(tableauAleatoire[i]);
                } else
                {
                    string erreur = "nombre déjà donné";
                    Console.WriteLine(erreur);
                    i = tableauAleatoire.Length;
                }
            }
        }
        private static bool Verif(int[] tableauAleatoire,int i, int nombre)
        {
            for (int j = 0; j < i; j++)
            {
                if(tableauAleatoire[j] == nombre)
                {
                    return false;
                }
            }
            return true;
        }
    }
}
