import numpy as np
import pandas as pd
from PredictionSystem.crops.crop_datasets import *
crop_df = pd.concat([coffee_df, tea_df, cassava_df, bean_df])
crop_df_path = '/home/charity/Django2.1/CropPredictionSystem/PredictionSystem/crops/crop_df.csv'
crop_df.insert(0, 'Id', range(1, 1+len(crop_df)))
crop_df.to_csv(crop_df_path, index=False)
