from django.conf.urls import url
from . import views
app_name = 'PredictionSystem'
urlpatterns = [
    url('predict', views.predict, name='predict'),
]