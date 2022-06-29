from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse
import datetime
from django.utils import timezone
from django.conf import settings
# Create your models here.


class Question(models.Model):
    title = models.CharField(max_length=250)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='questions')
    body = models.TextField()
    publish = models.DateTimeField(default=timezone.now)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    active = models.BooleanField(default=True)

    class Meta:
        ordering = ('created',)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('comments:question_detail', args=[self.id])
