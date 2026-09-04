from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase

from app.Config.settings import settings

_client: AsyncIOMotorClient | None = None


def get_database() -> AsyncIOMotorDatabase:
    """Lazily create the Mongo client on first use so importing this module
    never requires a live MONGODB_URI (e.g. during tests or app startup)."""
    global _client
    if _client is None:
        _client = AsyncIOMotorClient(settings.mongodb_uri)
    return _client[settings.mongodb_db_name]
