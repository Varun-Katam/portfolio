#db.py

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from utils.settings import settings

Base = declarative_base()
engine = create_engine(url=settings.DB_CONNECTION)

Session = sessionmaker(bind=engine)
def get_db():
    lSession = Session()
    try:
        yield lSession
    finally:
        lSession.close()