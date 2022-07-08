from django.urls import path
from InformationSystem import views
app_name = 'information_system'
urlpatterns=[
    path('', views.index, name='index'),
    path('crops_infor/', views.crops_information, name='crops_infor'),
    path('crops_view/', views.crops_information_view, name='crops_view'),
    path('soil_sampling/', views.soil_sampling, name='soil_sampling'),
    path('about/', views.about, name='about'),
    path('about_list/', views.AboutListView.as_view(), name='about_list'),
    path('about/<slug:slug>', views.AboutDetailView.as_view(), name='about_detail'),
]
