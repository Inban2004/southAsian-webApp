from app.Config.database import get_database
from app.Model.product import Product


class ProductRepository:
    """Owns all MongoDB access for products. Swap this implementation if the
    database ever changes — Service/Controller layers stay untouched.

    The collection is resolved inside each method, not in __init__, so that
    constructing this class never requires a live MONGODB_URI."""

    async def find_bestsellers(self) -> list[Product]:
        collection = get_database()["products"]
        cursor = collection.find({"tags": "bestseller"}, {"_id": 0})
        return [Product(**doc) async for doc in cursor]

    async def find_new_arrivals(self) -> list[Product]:
        collection = get_database()["products"]
        cursor = collection.find({"tags": "new_arrival"}, {"_id": 0})
        return [Product(**doc) async for doc in cursor]
