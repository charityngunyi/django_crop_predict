from django.conf.urls import url
from . import views
app_name = 'comments'
urlpatterns = [
    url(r'^$', views.dashboard, name='dashboard'),
    url('questions/', views.question_list, name='question_list'),
    url('dash/', views.thedashboard, name='dash'),
    url('my_questions/', views.my_questions, name='my_questions'),
    url(r'^(?P<id>\d+)/$', views.question_detail, name='question_detail'),
    url('customer_question/', views.question, name='customer_question'),


]