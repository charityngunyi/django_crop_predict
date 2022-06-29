from django.conf.urls import url
from InformationSystem import views
app_name = 'information_system'
urlpatterns=[
    url(r'^$', views.index, name='index'),
    url('crops_infor/', views.crops_information, name='crops_infor'),
    url('crops_view/', views.crops_information_view, name='crops_view'),
    url('soil_sampling/', views.soil_sampling, name='soil_sampling'),
]