#userMode.py

from sqlalchemy import Column, Integer, String, Text, CheckConstraint
from utils.db import Base

class UserModel(Base):
    __tablename__ = "userData"
    id = Column(Integer, primary_key=True)
    name = Column(String(30), nullable=False)
    email = Column(String(30), unique=True)
    message = Column(Text, nullable=False)

    __table_args__ = (
        CheckConstraint("length(name)>2", name="check_name"),
    )