from app.Config.database import get_database
from app.Model.category import Category


class CategoryRepository:
    """Collection is resolved per-call so constructing this class never
    requires a live MONGODB_URI."""

    async def find_all(self) -> list[Category]:
        collection = get_database()["categories"]
        cursor = collection.find({}, {"_id": 0})
        return [Category(**doc) async for doc in cursor]
