import numpy as np
import pandas as pd
import tensorflow as tf
from config import *
from train import min_val, range

# Convert range tensor to a Pandas Series (or NumPy array) for proper indexing
range_series = pd.Series(range.numpy(), index=min_val.index)

# Load the saved model
model = tf.keras.models.load_model(INPUT_FP + 'my_model.h5')

# Define the full list of columns (features) used during training
columns = [
    'age', 'pregnant', 'min_WBC * 1000', 'max_WBC * 1000', 'min_RBC * 1000000',
    'max_RBC * 1000000', 'min_hemoglobin', 'max_hemoglobin', 'min_platelet * 100000',
    'max_platelet * 100000', 'min_glucose * 100', 'max_glucose * 100', 'min_calcium',
    'max_calcium', 'min_albumin', 'max_albumin', 'min_sodium * 100', 'max_sodium * 100',
    'min_potassium', 'max_potassium', 'min_creatinine', 'max_creatinine',
    'type_2_diabetes', 'type_1_diabetes', 'hypertension', 'smoking', 'pneumonia',
    'fatigue', 'gestational_diabetes', 'polycystic_ovary_syndrome', 'alcoholic',
    'fertility_treatments', 'chronic_kidney_disease', 'diet', 'ischemic_stroke',
    'cognitive_changes', 'hyperglycemia', 'left_sided_weakness', 'breast_cancer',
    'parkinsons', 'tremors', 'stiffness', 'asthma', 'allergies', 'bipolar_disorder',
    'rheumatoid_arthritis', 'ehlers_danlos_syndrome', 'antiretroviral_therapy',
    'exercise', 'no_smoking', 'no_alcohol', 'insulin_injection',
    'glyburide', 'metformin', 'beta_lactams', 'tetracycline', 'acarbose',
    'sulfonylurease', 'dapagliflozin', 'pioglitazone', 'GLP1RA_therapy', 'lisinopril',
    'liraglutides', 'exenatide', 'ozempic', 'empagliflozin', 'antipsychotics',
    'corticosteroids', 'sitagliptin', 'aspirin', 'collagen', 'elastin', 'DPP4_inhibitors'
]

# Define the corresponding values for these columns
values = [
    30, 0, 6000, 13000, 2800000, 4400000, 10.8, 11.7, 250000, 250000,
    160, 160, 8.8, 10.0, 3.0, 3.5, 139, 139, 3.3, 5.0, 0.7, 0.7,  # Values for existing columns
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  # Fill remaining columns with 0s
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
]

print("length of values : ", len(values))
print("length of columns : ", len(columns))
# Ensure that the values list matches the number of columns
assert len(values) == len(columns), f"The number of values ({len(values)}) does not match the number of columns ({len(columns)})."

# Initialize `new_data` with the full set of columns and the values provided
new_data = pd.DataFrame([values], columns=columns)

# Filter `min_val` and `range_series` to match `new_data`
min_val_filtered = min_val[new_data.columns]
range_filtered = range_series[new_data.columns]

# Preprocess the new data
new_data = (new_data - min_val_filtered) / range_filtered

# Make predictions
predictions = model.predict(new_data)

# Apply threshold to convert probabilities to binary outcomes
binary_predictions = (predictions > 0.5).astype(int)

# Output the predictions
print(binary_predictions)
