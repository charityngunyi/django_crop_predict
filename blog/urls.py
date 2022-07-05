# blog/urls.py
from django.urls import path
app_name = 'blog'
from .views import BlogListView, BlogDetailView
urlpatterns = [
    path('', BlogListView, name='post_list'),
    path('crop/<int:id>/<slug:slug>/', BlogDetailView, name='post_detail'),
    path('crop_category/<slug:category_slug>/', BlogListView, name='post_list_by_category'),
]