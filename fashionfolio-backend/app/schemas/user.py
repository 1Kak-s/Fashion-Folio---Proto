from pydantic import BaseModel, EmailStr


class UserCreate(BaseModel):   # ce qu on recois a l inscription de l user
    email: EmailStr
    password: str
    username: str


class UserLogin(BaseModel):    # ce qu'on reçoit a la connexion
    email: EmailStr
    password: str


class UserRead(BaseModel):     # ce qu'on return
    id: int
    email: str
    username: str
    avatar: str | None


class Token(BaseModel):        # le JWT retourné aprs le login
    access_token: str
    token_type: str = "bearer"
