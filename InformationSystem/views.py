from django.shortcuts import render, HttpResponse

# Create your views here.


def crops_information(request):
    data = open("/home/charity/Django2.1/CropPredictionSystem/templates/xml/maincrop.xml")
    return HttpResponse(data, content_type="application/xml")


def index(request):
    return render(request, 'information/home.html')


def crops_information_view(request):
    return render(request, 'information/information_system.html')
def soil_sampling(request):
    data = open("/home/charity/Django2.1/CropPredictionSystem/templates/xml/soilsampling.xml")
    return HttpResponse(data, content_type="application/xml")
