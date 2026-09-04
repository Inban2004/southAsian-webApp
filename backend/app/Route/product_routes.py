from fastapi import APIRouter, Depends

from app.Controller.product_controller import ProductController

router = APIRouter(prefix="/api/products", tags=["products"])


def get_controller() -> ProductController:
    return ProductController()


@router.get("/bestsellers")
async def get_bestsellers(controller: ProductController = Depends(get_controller)):
    return await controller.get_bestsellers()


@router.get("/new-arrivals")
async def get_new_arrivals(controller: ProductController = Depends(get_controller)):
    return await controller.get_new_arrivals()
