import sqlite3
import os

DB_PATH = "fashionfolio.db"
SCHEMA_PATH = "schema.sql"


def get_connection():
    """Crée et retourne une connexion à la base de données SQLite."""
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row  # permet d'accéder aux colonnes par nom (ex: row["email"])
    conn.execute("PRAGMA foreign_keys = ON")  # active les clés étrangères (désactivées par défaut sur SQLite)
    return conn


def init_db():
    """Lit le schema.sql et crée toutes les tables si elles n'existent pas encore."""
    if not os.path.exists(SCHEMA_PATH):
        raise FileNotFoundError(f"Le fichier {SCHEMA_PATH} est introuvable à la racine du projet.")

    conn = get_connection()
    with open(SCHEMA_PATH, "r") as f:
        conn.executescript(f.read())
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
    return get_connection()