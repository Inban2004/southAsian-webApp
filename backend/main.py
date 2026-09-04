from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.Config.settings import settings
from app.ExceptionHandler.exception_handler import unhandled_exception_handler
from app.Route import category_routes, product_routes

app = FastAPI(title="South Asian Fly API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.add_exception_handler(Exception, unhandled_exception_handler)

app.include_router(product_routes.router)
app.include_router(category_routes.router)


@app.get("/health")
async def health():
    return {"message": "OK", "statusCode": 200, "data": {"status": "healthy"}}
