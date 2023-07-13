from django.db import models

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=100)
    img = models.ImageField(upload_to='category_image')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = "category"
        verbose_name_plural = "categories"
        db_table = "Categories"


class Product(models.Model):
    category = models.ForeignKey(Category, on_delete=models.PROTECT)
    name = models.CharField(max_length=100)
    price = models.IntegerField()
    description = models.TextField(blank=True, max_length=250)
    image = models.ImageField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "product"
        verbose_name_plural = "products"
        db_table = "products"



class ProductImage(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='imagenes')
    image = models.ImageField(upload_to='product_image')

    def __str__(self):
        return self.image.name