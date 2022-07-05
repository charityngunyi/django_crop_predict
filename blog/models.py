# from django.db import models
# api/models.py
import uuid as uuid_lib
from django.db import models
from django.urls import reverse
from django.contrib.auth import get_user_model
from django.utils import timezone


#Creation of custom manager to retrieve all posts with the published status.
class PublishedManager(models.Manager):
	def get_queryset(self):
		return super(PublishedManager,self).get_queryset()\
		.filter(status='published')

# Our blog will deal with crops articles.
# Ctegory model allows us to categorize crops for easier search and acccess.
class CropCategory(models.Model):
    # This class enables to create crop categories.
    title = models.CharField(max_length=250)
    slug = models.SlugField(unique=True)
    description = models.TextField()

    class Meta:
        verbose_name = 'category'
        verbose_name_plural = 'categories'

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('blog:post_list_by_category', args=[self.slug])

# Post model that will be used for creation of our API
class CropPost(models.Model):
    # post model that will be used for adding, updating, and deletion of blog posts.
    STATUS_CHOICES = ( #if in draft mode can give continuation of editing until final copy and then published
		('draft', 'Draft'),
		('published', 'Published'),
		)
    title = models.CharField(max_length=255)
    slug = models.SlugField(unique=True, unique_for_date='publish')
    # slug is Used to find the web URL
    uuid = models.UUIDField(
        primary_key=True, default=uuid_lib.uuid4,
        editable=False), # Used by the API to look up the post
    category = models.ForeignKey(CropCategory, related_name='crops', on_delete=models.CASCADE)
    author = models.ForeignKey(get_user_model(), on_delete=models.CASCADE,)
    body = models.TextField()
    publish = models.DateTimeField(default=timezone.now)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    status = models.CharField(max_length=10,choices=STATUS_CHOICES,default='draft')
    # tags = TaggableManager()
    objects = models.Manager() # The default manager.
    published = PublishedManager() # Our custom manager.
    
    class Meta:
        ordering = ('-publish',)
    
    def __str__(self):
        return self.title
    
    def get_absolute_url(self):
        return reverse('blog:post_detail', rgs={self.id, self.slug})
