import sqlite3
import os

# Nom du fichier de la base de données SQLite (créé automatiquement au premier lancement)
DB_PATH = "fashionfolio.db"
# Nom du fichier SQL qui contient la structure des tables
SCHEMA_PATH = "schema.sql"


def get_connection():
    """Crée et retourne une connexion à la base de données SQLite."""
    # On ouvre (ou crée) le fichier fashionfolio.db
    conn = sqlite3.connect(DB_PATH)
    # Permet d'accéder aux résultats par nom de colonne : row["email"] au lieu de row[0]
    conn.row_factory = sqlite3.Row
    # Active les clés étrangères — désactivées par défaut sur SQLite
    # Sans ça, les ON DELETE CASCADE du schema.sql ne fonctionnent pas
    conn.execute("PRAGMA foreign_keys = ON")
    return conn


def init_db():
    """Lit le schema.sql et crée toutes les tables si elles n'existent pas encore."""
    # Vérifie que le fichier schema.sql existe bien à la racine du projet
    if not os.path.exists(SCHEMA_PATH):
        raise FileNotFoundError(f"Le fichier {SCHEMA_PATH} est introuvable à la racine du projet.")
    
    # On ouvre une connexion à la DB
    conn = get_connection()
    # On lit le contenu du schema.sql et on l'exécute pour créer les tables
    with open(SCHEMA_PATH, "r") as f:
        conn.executescript(f.read())
    # On sauvegarde les changements et on ferme la connexion
    conn.commit()
    conn.close()
    print("✅ Base de données initialisée avec succès.")


def get_db():
    """Fonction utilitaire à appeler dans les routes pour obtenir une connexion.
    
    Utilisation dans une route FastAPI :
        conn = get_db()
        ...
        conn.close()
    """
    # Retourne simplement une nouvelle connexion à la DB
    return get_connection()