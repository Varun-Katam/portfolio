#routes.py

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.userSchema import UserCreate
from app.users import send_message
from utils.db import get_db

userRoutes = APIRouter()

@userRoutes.post("/contact")
def send_data(user: UserCreate, db : Session = Depends(get_db)):
    return send_message(user, db)