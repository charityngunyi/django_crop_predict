import numpy as np
import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.naive_bayes import GaussianNB
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt
from sklearn.svm import SVC
from sklearn.neighbors import KNeighborsClassifier
data = pd.read_csv('/home/charity/Django2.1/CropPredictionSystem/PredictionSystem/crops/crop_df.csv')

X = data.drop(['Id', 'type'], axis=1)
y = data['type']
"""X = data[8]
y = data[[0, 1, 2, 3, 4, 5, 6, 7]]"""
X_train, X_test, y_train, y_test = train_test_split(X, y, stratify=y, test_size=0.2, random_state=31)
lr = LogisticRegression()
nb = GaussianNB()
svm = SVC()
knn = KNeighborsClassifier()

lr_scores = []
nb_scores = []
svm_scores = []
knn_scores = []
train_sizes = range(10, len(X_train), 25)
for train_size in train_sizes:
    X_slice, _, y_slice, _ = train_test_split(X_train, y_train, train_size=train_size, stratify=y_train, random_state=31)
    nb.fit(X_slice, y_slice)
    nb_scores.append(nb.score(X_test, y_test))
    lr.fit(X_slice, y_slice)
    lr_scores.append(lr.score(X_test, y_test))
    svm.fit(X_slice, y_slice)
    svm_scores.append(svm.score(X_test, y_test))
    knn.fit(X_slice, y_slice)
    knn_scores.append(knn.score(X_test, y_test))
print(lr.predict([[800, 6.5, 30, 1500]]))
print(nb.predict([[800, 6.5, 30, 1500]]))
plt.plot(train_sizes, nb_scores, 'g-', label='Naive Bayes')
plt.plot(train_sizes, lr_scores, 'r--', label='Logistic Regression')
plt.plot(train_sizes, svm_scores, 'r-', label='SVM')
plt.plot(train_sizes, knn_scores, 'b-.', label='KNeighborsClassifier')
plt.title('Naive Bayes, SVM, KNeighborsClassifier and Logistic Regression accuracies')
plt.xlabel('Number of training instances')
plt.ylabel('Test set accuracy')
plt.legend()
plt.show()
# plt.savefig('/home/charity/Django2.1/CropPredictionSystem/PredictionSystem/ModelAnalysis/model_analysis.png',
#             format='png')

