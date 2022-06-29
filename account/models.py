from django.db import models
from django.urls import reverse
from django.utils import timezone
from django.contrib.auth.models import User
import datetime
from django.conf import settings
# Create your models here.

"""
class Company(models.Model):
    CATEGORY_CHOICES = (
        ('engineering', 'Engineering'),
        ('ict', 'ICT'),
    )
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    name = models.CharField(max_length=250)
    photo = models.ImageField(upload_to='companies/%Y/%m/%d', blank=True)
    # slug = models.SlugField(max_length=250)
    location = models.CharField(max_length=250)
    email_address = models.CharField(max_length=250)
    category = models.CharField(max_length=10, choices=CATEGORY_CHOICES)
    about = models.CharField(max_length=450)
    services = models.CharField(max_length=450)

    def __str__(self):
        return 'Company for user {}'.format(self.user.username)
    """