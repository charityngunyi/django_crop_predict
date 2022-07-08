from django.db import models
from django.urls import reverse
from django.utils import timezone
from django.contrib.auth.models import User
import datetime
from django.conf import settings
# Create your models here.

class Profile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    portfolio = models.TextField()
    photo = models.ImageField(upload_to='profile/%Y/%m/%d', blank=True)
    # slug = models.SlugField(max_length=250)

    def __str__(self):
        return 'Profile for user {}'.format(self.user.username)