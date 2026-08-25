#users.py

from app.userModel import UserModel
from app.userSchema import UserSchema
from sqlalchemy.orm import Session
from fastapi import HTTPException
from sqlalchemy.exc import IntegrityError

def send_message(user: UserSchema, db: Session):
    new_user = UserModel(
        name = user.name,
        email = user.email,
        message = user.message
    )
    try:
        db.add(new_user)
        db.commit()
        db.refresh(new_user)

        return new_user

    except IntegrityError:
        db.rollback()

        raise HTTPException(
            status_code=400,
            detail="This email has already been used."
        )