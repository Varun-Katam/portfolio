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

    except IntegrityError as e:
        db.rollback()

        error = str(e)

        if "check_name" in error:
            raise HTTPException(
                status_code=400,
                detail="Name must contain at least 3 characters!"
            )

        if "check_email" in error:
            raise HTTPException(
                status_code=400,
                detail = "Email should not be empty!"
            )

        if "check_message" in error:
                    raise HTTPException(
                        status_code=400,
                        detail = "Please enter your message"
                    )

        raise HTTPException(
            status_code=400,
            detail="Invalid data. Please check your input."
        )