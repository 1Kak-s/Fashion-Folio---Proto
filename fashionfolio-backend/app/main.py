from fastapi import FastAPI
from app.database import init_db

app = FastAPI(
    title="FashionFolio API",
    description="Backend du POC FashionFolio — dressing digital, recommandations IA et espace social",
    version="0.1.0"
)

@app.on_event("startup")
def startup():
    """Fonction exécutée automatiquement au démarrage de l'app."""
    init_db()

@app.get("/")
def root():
    return {"message": "FashionFolio API is running 🚀"}
