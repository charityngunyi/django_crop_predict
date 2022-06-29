import numpy as np
import pandas as pd
from PredictionSystem.crops.crop_type import *
# from .crop_type import *
# Coffee
coffee_rainfall = np.linspace(start=1000, stop=2000, num=100)
coffee_soil_ph = np.linspace(start=5.3, stop=6.0, num=100)
coffee_temperature = np.linspace(start=15, stop=30, num=100)
coffee_altitude = np.linspace(start=610, stop=1830, num=100)
coffee_data = {
    'rainfall':coffee_rainfall,
    'soil_ph':coffee_soil_ph,
    'temperature':coffee_temperature,
    'altitude':coffee_altitude,
    'type':coffee.predict_name
}
coffee_df = pd.DataFrame(coffee_data, columns=['rainfall', 'soil_ph', 'temperature', 'altitude', 'type'])

# Cassava
cassava_rainfall = np.linspace(start=500, stop=6000, num=100)
cassava_soil_ph = np.linspace(start=5.5, stop=7.5, num=100)

cassava_temperature = np.linspace(start=20, stop=30, num=100)
cassava_altitude = np.linspace(start=410, stop=1500, num=100)
cassava_data = {
    'rainfall':cassava_rainfall,
    'soil_ph':cassava_soil_ph,
    'temperature':cassava_temperature,
    'altitude':cassava_altitude,
    'type':cassava.predict_name
}
cassava_df = pd.DataFrame(cassava_data, columns = ['rainfall', 'soil_ph', 'temperature', 'altitude', 'type'])

# Bean
bean_rainfall = np.linspace(start=800, stop=2000, num=100)
bean_soil_ph = np.linspace(start=6.5, stop=7.5, num=100)
bean_temperature = np.linspace(start=15, stop=33, num=100)
bean_altitude = np.linspace(start=1000, stop=2100, num=100)
bean_data = {
    'rainfall':bean_rainfall,
    'soil_ph':bean_soil_ph,
    'temperature':bean_temperature,
    'altitude':bean_altitude,
    'type':bean.predict_name
}
bean_df = pd.DataFrame(bean_data, columns=['rainfall', 'soil_ph', 'temperature', 'altitude', 'type'])

# Tea
tea_rainfall = np.linspace(start=1140, stop=1270, num=100)
tea_soil_ph = np.linspace(start=5.4, stop=5.8, num=100)
tea_temperature = np.linspace(start=11, stop=20, num=100)
tea_altitude = np.linspace(start=600, stop=2100, num=100)
tea_data = {
    'rainfall':tea_rainfall,
    'soil_ph':tea_soil_ph,
    'temperature':tea_temperature,
    'altitude':tea_altitude,
    'type':tea.predict_name
}
tea_df = pd.DataFrame(tea_data, columns = ['rainfall', 'soil_ph', 'temperature', 'altitude', 'type'])
