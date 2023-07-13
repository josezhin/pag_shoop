from django.contrib import admin
from .models import Product, ProductImage, Category
# Register your models here.

class ProductImageAdmin(admin.StackedInline):
    model = ProductImage

# @admin.register(Product)
# class ProductAdmin(admin.ModelAdmin):
#     inlines = [ProductImageAdmin]

# @admin.register(ProductImage)
# class ProductImageAdmin(admin.ModelAdmin):
#     pass


admin.site.register(Product)
admin.site.register(Category)
admin.site.register(ProductImage)