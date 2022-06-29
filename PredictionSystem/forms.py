from django import forms


def validatepredict(rainfall,  soil_PH, temperature, altitude):
    valid = False
    if (rainfall>=0 and rainfall <=100000):
        valid = True
    elif (soil_PH >= 0 and soil_PH < 15):
        valid = True
    elif (temperature >= 0 and temperature < 100):
        valid = True
    elif (altitude >= 0 and altitude < 100000):
        valid = True
    else:
        valid = False
    if valid == True :
        return rainfall, soil_PH, temperature, altitude
    else:
        return "Invalid input."

class PredictForm(forms.Form):
    rainfall = forms.FloatField(label='Rainfall Amount')
    soil_PH = forms.FloatField(label='Soil PH Range')
    temperature = forms.FloatField(label='Temperature')
    altitude = forms.FloatField(label='Altitude')
