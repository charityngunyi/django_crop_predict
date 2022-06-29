from django.conf.urls import url
from . import views
app_name = 'PredictionSystem'
urlpatterns = [
    url(r'^$', views.predict, name='predict'),
]