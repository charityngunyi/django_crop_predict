from django.shortcuts import render, HttpResponse
from django.views.generic import ListView, DetailView
from .models import About
# Create your views here.


def crops_information(request):
    data = open("/home/charity/Django2.1/CropPredictionSystem/templates/xml/maincrop.xml")
    return HttpResponse(data, content_type="application/xml")


def index(request):
    return render(request, 'information/home.html')

# about links
class AboutListView(ListView):
    model = About
    template_name = 'information/home.html'
    context_object_name = 'about_list'

# about detail
class AboutDetailView(DetailView):
    model = About
    template_name = 'information/about_detail.html'
    context_object_name = 'about_detail'

def about(request):
    return render(request, 'information/about.html')

def crops_information_view(request):
    return render(request, 'information/information_system.html')
def soil_sampling(request):
    data = open("/home/charity/Django2.1/CropPredictionSystem/templates/xml/soilsampling.xml")
    return HttpResponse(data, content_type="application/xml")
