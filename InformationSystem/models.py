from django.db import models

# Create your models here.
# About model allows us to ease the links to the javascript functions that load the static information.
class About(models.Model):
    # This class enables to create about links in the homepage.
    title = models.CharField(max_length=250)
    slug = models.SlugField(unique=True)
    description = models.TextField()

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('blog:about_detail', args=[self.slug])