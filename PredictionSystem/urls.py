from django.urls import path
from . import views
app_name = 'PredictionSystem'
urlpatterns = [
    path('predict/', views.predict, name='predict'),
]
