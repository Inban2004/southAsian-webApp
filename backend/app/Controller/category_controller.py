from app.ExceptionHandler.response import success_response
from app.Service.category_service import CategoryService


class CategoryController:
    def __init__(self, service: CategoryService | None = None):
        self._service = service or CategoryService()

    async def get_categories(self) -> dict:
        categories = await self._service.get_categories()
        data = [category.model_dump(by_alias=True) for category in categories]
        return success_response("Categories retrieved", data)
