import pandas as pd
from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import train_test_split
data = pd.read_csv('/home/charity/Django2.1/CropPredictionSystem/PredictionSystem/crops/crop_df.csv')

X = data.drop(['Id', 'type'], axis=1)
y = data['type']
# print(X.shape)
# print(y.shape)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.4, random_state=5)

knn = KNeighborsClassifier(n_neighbors=12)
knn.fit(X, y)
# print(knn.predict([[800, 6.5, 30, 1500]]))