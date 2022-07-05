from django.shortcuts import render, get_object_or_404
from django.views.generic import ListView, DetailView
from .models import CropPost, CropCategory


# display crops list and enable display with their respective categories
def BlogListView(request, category_slug=None):
    category = None
    categories = CropCategory.objects.all()
    crops = CropPost.published.all()
    if category_slug:
        category = get_object_or_404(CropCategory, slug=category_slug)
        crops = crops.filter(category=category)
    return render(request, 'post/post_list.html', {'category': category,
                                                    'categories': categories,
                                                    'crops': crops})


# Display crop detail from blog list links.
def BlogDetailView(request, id, slug):
    crop = get_object_or_404(CropPost, id=id, slug=slug)
    return render(request, 'post/post_detail.html', {'crop': crop})