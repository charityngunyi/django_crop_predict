from django.urls import path
from . import views
app_name = 'comments'
urlpatterns = [
    path('', views.dashboard, name='dashboard'),
    path('questions/', views.question_list, name='question_list'),
    path('dash/', views.thedashboard, name='dash'),
    path('my_questions/', views.my_questions, name='my_questions'),
    path('question/<int:id>', views.question_detail, name='question_detail'),
    path('customer_question/', views.question, name='customer_question'),


]