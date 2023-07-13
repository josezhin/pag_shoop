from rest_framework import routers
from . import views

router = routers.DefaultRouter()

router.register(r"product", views.ProductViewSet, "product")
router.register(r"category", views.CategoryViewSet, "category")
router.register(r"product-image", views.ProductImageViewSet, "category")

urlpatterns = router.urls