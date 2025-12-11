from pydantic import BaseModel, Field

class Product(BaseModel):
    id: int = Field(..., description="The unique identifier for the product")
    name: str = Field(..., description="The name of the product")
    price: float = Field(..., gt=0, description="The price of the product, must be greater than zero")
    in_stock: bool = Field(..., description="Availability of the product in stock")

   