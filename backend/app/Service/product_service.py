from app.Model.product import Product
from app.Repository.product_repository import ProductRepository


class ProductService:
    def __init__(self, repository: ProductRepository | None = None):
        self._repository = repository or ProductRepository()

    async def get_bestsellers(self) -> list[Product]:
        return await self._repository.find_bestsellers()

    async def get_new_arrivals(self) -> list[Product]:
        return await self._repository.find_new_arrivals()
