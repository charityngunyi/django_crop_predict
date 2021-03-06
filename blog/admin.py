from django.contrib import admin

# Register your models here.
from .models import CropPost, CropCategory

class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug', 'author', 'publish', 'status')
    list_filter = ('status', 'created', 'publish', 'author')
    search_fields = ('title', 'body')
    prepopulated_fields = {'slug': ('title',)}
    raw_id_fields = ('author',)
    date_hierarchy = 'publish'
    ordering = ['status', 'publish']


admin.site.register(CropPost, PostAdmin)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug')
    list_filter = ('slug',)
    prepopulated_fields = {'slug': ('title',)}


admin.site.register(CropCategory, CategoryAdmin)