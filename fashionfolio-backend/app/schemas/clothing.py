from pydantic import BaseModel


class ClothingCreate(BaseModel):   # ajout d'un vetement
    type: str
    color: str
    style: str
    pattern: str
    brand: str
    season: str
    photo_url: str | None = None


class ClothingRead(BaseModel):     # lecture d'un vetement
    id: int
    user_id: int
    type: str
    color: str
    style: str
    pattern: str
    brand: str
    season: str
    photo_url: str | None
    created_at: str
