from fastapi import FastAPI
from models import Product
import database_models
from database import SessionLocal, engine
app=FastAPI()
database_models.Base.metadata.create_all(bind=engine)

@app.get("/greet")
def greet():
    return f"Hello, name!"
products = [
        Product(id=1, name="Laptop", price=999.99, in_stock=True),
        Product(id=2, name="Smartphone", price=499.49, in_stock=False),
        Product(id=3, name="Headphones", price=199.99, in_stock=True),
        Product(id=4, name="Monitor", price=299.99, in_stock=True),
    ]
def init_db():
    db = SessionLocal()
    count = db.query(database_models.ProductModel).count()
    if count:
        for product in products:
            db_product = database_models.ProductModel(
            id=product.id,
            name=product.name,
            price=product.price,
            in_stock=product.in_stock
        )
            db.add(db_product)
    db.commit()
    db.close()

init_db()
@app.get("/allproducts")
def all_products():
    
    return products

@app.get("/product/{product_id}")
def get_product(product_id: int):
    for product in products:
        if product.id == product_id:
            return product
    return {"error": "Product not found"}

@app.post("/addproduct")
def add_product(product: Product):
    products.append(product)
    return {"message": "Product added successfully", "product": product}


@app.put("/updateproduct/{product_id}")
def update_product(product_id: int, updated_product: Product):
    for index, product in enumerate(products):
        if product.id == product_id:
            products[index] = updated_product
            return {"message": "Product updated successfully", "product": updated_product}
    return {"error": "Product not found"}