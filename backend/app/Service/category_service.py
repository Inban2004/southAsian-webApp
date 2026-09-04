from app.Model.category import Category
from app.Repository.category_repository import CategoryRepository


class CategoryService:
    def __init__(self, repository: CategoryRepository | None = None):
        self._repository = repository or CategoryRepository()

    async def get_categories(self) -> list[Category]:
        return await self._repository.find_all()
