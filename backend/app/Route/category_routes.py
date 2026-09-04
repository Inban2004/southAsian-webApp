from fastapi import APIRouter, Depends

from app.Controller.category_controller import CategoryController

router = APIRouter(prefix="/api/categories", tags=["categories"])


def get_controller() -> CategoryController:
    return CategoryController()


@router.get("")
async def get_categories(controller: CategoryController = Depends(get_controller)):
    return await controller.get_categories()
