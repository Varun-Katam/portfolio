#userSchema.py

from pydantic import BaseModel, ConfigDict, EmailStr



class UserCreate(BaseModel):
    name: str
    email: EmailStr
    message: str

class UserSchema(BaseModel):
    id: int
    name: str
    email: str
    message: str
    model_config = ConfigDict(from_attributes=True)
