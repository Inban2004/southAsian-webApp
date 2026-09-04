from app.ExceptionHandler.response import success_response
from app.Service.product_service import ProductService


class ProductController:
    def __init__(self, service: ProductService | None = None):
        self._service = service or ProductService()

    async def get_bestsellers(self) -> dict:
        products = await self._service.get_bestsellers()
        data = [product.model_dump(by_alias=True) for product in products]
        return success_response("Bestsellers retrieved", data)

    async def get_new_arrivals(self) -> dict:
        products = await self._service.get_new_arrivals()
        data = [product.model_dump(by_alias=True) for product in products]
        return success_response("New arrivals retrieved", data)
