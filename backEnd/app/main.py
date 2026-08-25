#main.py

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import userRoutes
from utils.db import Base, engine
# from utils.db import Base, engine
# from routes import user_routes

app = FastAPI()
Base.metadata.create_all(engine)
app.include_router(userRoutes)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_methods=["*"],
    allow_headers=["*"],
)

