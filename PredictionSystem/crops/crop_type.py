class Crop_Type:
    def __init__(self, predict_name, result_name, value):
        self.predict_name = predict_name
        self.result_name = result_name
        self.value = value


coffee = Crop_Type('Coffee', 'Coffee', 1)
tea = Crop_Type('Tea', 'Tea', 2)
cassava = Crop_Type('Cassava', 'Cassava', 3)
bean = Crop_Type('Bean', 'Bean', 4)
