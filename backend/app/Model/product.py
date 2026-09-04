from typing import Literal, Optional

from pydantic import BaseModel, ConfigDict
from pydantic.alias_generators import to_camel


class ProductBadge(BaseModel):
    model_config = ConfigDict(alias_generator=to_camel, populate_by_name=True)

    label: str
    variant: Literal["Gold", "Green", "Saffron"]


class Product(BaseModel):
    model_config = ConfigDict(alias_generator=to_camel, populate_by_name=True)

    id: str
    name: str
    price: float
    compare_at_price: Optional[float] = None
    image: str
    rating: float = 0
    badge: Optional[ProductBadge] = None
    category_id: Optional[str] = None
