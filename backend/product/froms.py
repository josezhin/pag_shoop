from django import forms
from .models import Product


class ProductoForm(forms.ModelForm):
    imagenes = forms.ImageField(widget=forms.ClearableFileInput(attrs={'multiple': True}))

    class Meta:
        model = Product
        fields = ('nombre', 'imagenes')

ProductFromSet = forms.inlineformset_factory(
    Product, Product.images.through, fields=('image',), extra=1
)