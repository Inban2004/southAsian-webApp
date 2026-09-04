"""Seed MongoDB with the product-listing data extracted from the
South Asian Fly Figma file (Shop By Category, Bestsellers, New Arrivals).

Run with: venv/bin/python -m scripts.seed
Requires MONGODB_URI to be set (see backend/.env.example).
"""

import asyncio
import sys
from pathlib import Path

sys.path.append(str(Path(__file__).resolve().parent.parent))

from app.Config.database import get_database  # noqa: E402

CATEGORIES = [
    {"id": "whole-spices", "name": "Whole Spices", "image": "/images/categories/whole-spices.png"},
    {"id": "masala-powders", "name": "Masala Powders", "image": "/images/categories/masala-powders.png"},
    {"id": "instant-mixes", "name": "Instant Mixes", "image": "/images/categories/instant-mixes.png"},
    {"id": "snacks", "name": "Snacks", "image": "/images/categories/snacks.png"},
    {"id": "wellness-essentials", "name": "Wellness Essentials", "image": "/images/categories/wellness-essentials.png"},
    {"id": "premium-spices", "name": "Premium Spices", "image": "/images/categories/premium-spices.png"},
]

BESTSELLERS = [
    {
        "id": "chettinad-biryani-masala",
        "name": "Chettinad Biryani Masala",
        "price": 249,
        "image": "/images/products/chettinad-biryani-masala.png",
        "rating": 5,
        "badge": {"label": "Bestseller", "variant": "Gold"},
        "tags": ["bestseller"],
    },
    {
        "id": "namakkal-cardamom-100g",
        "name": "Namakkal Cardamom (100g)",
        "price": 389,
        "image": "/images/products/namakkal-cardamom.png",
        "rating": 5,
        "badge": {"label": "Bestseller", "variant": "Gold"},
        "tags": ["bestseller"],
    },
    {
        "id": "thanjavur-idli-podi",
        "name": "Thanjavur Idli Podi",
        "price": 149,
        "image": "/images/products/thanjavur-idli-podi.png",
        "rating": 5,
        "badge": {"label": "Small Batch", "variant": "Green"},
        "tags": ["bestseller"],
    },
    {
        "id": "kerala-banana-chips",
        "name": "Kerala Banana Chips",
        "price": 129,
        "image": "/images/products/kerala-banana-chips.png",
        "rating": 5,
        "badge": {"label": "Small Batch", "variant": "Green"},
        "tags": ["bestseller"],
    },
    {
        "id": "sri-lankan-jaffna-curry",
        "name": "Sri Lankan Jaffna Curry",
        "price": 219,
        "image": "/images/products/sri-lankan-jaffna-curry.png",
        "rating": 5,
        "badge": {"label": "Limited", "variant": "Gold"},
        "tags": ["bestseller"],
    },
]

NEW_ARRIVALS = [
    {
        "id": "chettinad-pepper-rasam-powder",
        "name": "Chettinad Pepper Rasam Powder",
        "price": 179,
        "image": "/images/products/chettinad-pepper-rasam-powder.png",
        "rating": 5,
        "badge": {"label": "NEW", "variant": "Green"},
        "tags": ["new_arrival"],
    },
    {
        "id": "madurai-jigarthanda-mix",
        "name": "Madurai Jigarthanda Mix",
        "price": 299,
        "image": "/images/products/madurai-jigarthanda-mix.png",
        "rating": 5,
        "badge": {"label": "NEW", "variant": "Green"},
        "tags": ["new_arrival"],
    },
    {
        "id": "kerala-appam-instant-mix",
        "name": "Kerala Appam Instant Mix",
        "price": 199,
        "image": "/images/products/kerala-appam-instant-mix.png",
        "rating": 5,
        "badge": {"label": "NEW", "variant": "Green"},
        "tags": ["new_arrival"],
    },
    {
        "id": "thanjavur-filter-coffee-powder",
        "name": "Thanjavur Filter Coffee Powder",
        "price": 249,
        "image": "/images/products/thanjavur-filter-coffee-powder.png",
        "rating": 5,
        "badge": {"label": "NEW", "variant": "Green"},
        "tags": ["new_arrival"],
    },
    {
        "id": "sri-lankan-coconut-sambol-mix",
        "name": "Sri Lankan Coconut Sambol Mix",
        "price": 169,
        "image": "/images/products/sri-lankan-coconut-sambol-mix.png",
        "rating": 5,
        "badge": {"label": "NEW", "variant": "Green"},
        "tags": ["new_arrival"],
    },
]


async def seed() -> None:
    db = get_database()
    await db["categories"].delete_many({})
    await db["categories"].insert_many(CATEGORIES)
    await db["products"].delete_many({})
    await db["products"].insert_many(BESTSELLERS + NEW_ARRIVALS)
    print(f"Seeded {len(CATEGORIES)} categories and {len(BESTSELLERS) + len(NEW_ARRIVALS)} products")


if __name__ == "__main__":
    asyncio.run(seed())
