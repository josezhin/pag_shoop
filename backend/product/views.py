from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from django.shortcuts import render
from .models import Product, Category, ProductImage
from .serializers import ProductSerializer, CategorySerializer, ProductImageSerializer
from rest_framework import viewsets, permissions


# Create your views here.


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = ProductSerializer

    # def perform_create(self, serializer):
    #     product = serializer.save()
    #     images = self.request.FILES.getlist("images")
    #     for image in images:
    #         ProductImage.objects.create(product=product, image=image)


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = CategorySerializer


class ProductImageViewSet(viewsets.ModelViewSet):
    queryset = ProductImage.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = ProductImageSerializer