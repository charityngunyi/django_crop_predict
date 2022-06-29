from django.shortcuts import render
from PredictionSystem.ModelAnalysis.kneighbour_predict import *
from .forms import PredictForm, validatepredict
from django.contrib.auth.decorators import login_required
from django.contrib import messages
# Create your views here.


@login_required
def predict(request):
    if request.method == 'POST':
        form = PredictForm(request.POST)
        if form.is_valid():
            rainfall = form.cleaned_data['rainfall']
            soil_ph = form.cleaned_data['soil_PH']
            temp = form.cleaned_data['temperature']
            altud = form.cleaned_data['altitude']
            valid = False
            if (rainfall >= 0 and rainfall <= 100000 and soil_ph >= 0 and soil_ph < 15 and temp >= 0 and temp < 70 and altud >= 0 and altud < 100000):

                prediction = knn.predict([[rainfall, soil_ph, temp, altud]])
            else:
                messages.error(request, 'Invalid range of numbers.')
                return render(request, 'predict/error.html')

            return render(request, 'predict/results.html', {'prediction': prediction})

    else:
        form = PredictForm()

    return render(request, 'predict/predict.html', {'form': form})
