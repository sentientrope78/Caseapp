import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import os
import tensorflow as tf
import random

# Define the file path
INPUT_FP = 'C:/Users/amitb/OneDrive/Desktop/Medical App/ml-api/'

# Load dataset
df = pd.read_csv(INPUT_FP + 'diabetes.csv')

# Define the scaling factors for each column
scaling_factors = {
    'min_WBC * 1000': 1000,
    'max_WBC * 1000': 1000,
    'min_RBC * 1000000': 1000000,
    'max_RBC * 1000000': 1000000,
    'min_platelet * 100000': 100000,
    'max_platelet * 100000': 100000,
    'min_glucose * 100': 100,
    'max_glucose * 100': 100,
    'min_sodium * 100': 100,
    'max_sodium * 100': 100
}

# Apply scaling
for column, factor in scaling_factors.items():
    df[column] = df[column] / factor

# Split dataset
train_df = df.sample(frac=0.75, random_state=4)
val_df = df.drop(train_df.index)

# Define treatment plan columns
treatment_columns = ['exercise', 'no_smoking', 'no_alcohol', 'mental_therapy',
                     'insulin_injection', 'glyburide', 'metformin', 'beta_lactams',
                     'tetracycline', 'acarbose', 'sulfonylurease', 'dapagliflozin',
                     'pioglitazone', 'GLP1RA_therapy', 'lisinopril', 'liraglutides',
                     'exenatide', 'ozempic', 'empagliflozin', 'antipsychotics',
                     'corticosteroids', 'sitagliptin', 'aspirin', 'collagen', 'elastin',
                     'DPP4_inhibitors']

# Separate features (X) and targets (y)
X_train = train_df.drop(columns=treatment_columns)
X_val = val_df.drop(columns=treatment_columns)

y_train = train_df[treatment_columns]
y_val = val_df[treatment_columns]

# Model definition
input_shape = [X_train.shape[1]]
output_shape = len(treatment_columns)  # One output for each treatment plan

model = tf.keras.Sequential([
    tf.keras.layers.Dense(units=64, activation='relu', input_shape=input_shape),
    tf.keras.layers.Dense(units=64, activation='relu'),
    tf.keras.layers.Dense(units=output_shape, activation='sigmoid')  # Multi-output
])

# Compile the model
model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])

# Train the model
losses = model.fit(X_train, y_train,
                   validation_data=(X_val, y_val),
                   batch_size=256, 
                   epochs=15)

# Make predictions on the validation data
predictions = model.predict(X_val)

# Apply threshold to convert probabilities to binary outcomes (0 or 1)
binary_predictions = (predictions > 0.5).astype(int)  # Threshold at 0.5

# Now proceed with random sampling
print("Type of X_val:", type(X_val))
print("Length of X_val:", len(X_val))

# If X_val has fewer than 3 rows, use all rows instead of sampling
if len(X_val) < 3:
    random_patients = list(range(len(X_val)))  # Use all rows
else:
    random_patients = random.sample(list(range(len(X_val))), 3)  # Sample 3 random patients

print("Random patients:", random_patients)

# Function to display predicted and actual treatment plans for random patients
def display_comparison(patient_id, predictions, actuals, columns):
    print(f"\nPatient {patient_id} Treatment Plan Comparison:")
    for idx, plan in enumerate(columns):
        predicted = "Required" if predictions[patient_id, idx] == 1 else "Not Required"
        actual = "Required" if actuals.iloc[patient_id, idx] == 1 else "Not Required"
        print(f" - {plan.replace('_', ' ').capitalize()}: Predicted: {predicted}, Actual: {actual}")

# Display the comparison for the selected random patients
for patient_id in random_patients:
    display_comparison(patient_id, binary_predictions, y_val, treatment_columns)
