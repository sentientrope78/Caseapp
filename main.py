import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import os
import tensorflow as tf

cwd = os.getcwd()  # Get the current working directory (cwd)
files = os.listdir(cwd)  # Get all the files in that directory
print("Files in %r: %s" % (cwd, files))
 
# be sure to change the file path
# if you have the dataset in another
# directly than the working folder
df = pd.read_csv('./ml-api/diabetes.csv')
df.info()

# 75% of the data is selected
train_df = df.sample(frac=0.75, random_state=4) 

# it drops the training data
# from the original dataframe
val_df = df.drop(train_df.index)


# now let's separate the targets and labels
X_train = train_df.drop('gender',axis=1)
X_val = val_df.drop('gender',axis=1)
y_train = train_df['gender']
y_val = val_df['gender']
y_train = pd.get_dummies(train_df['gender'])
y_val = pd.get_dummies(val_df['gender'])

print("new x train : ", X_train)
print("y train : ", y_train)

# We'll need to pass the shape
# of features/inputs as an argument
# in our model, so let's define a variable 
# to save it.
input_shape = [X_train.shape[1]]
 
print(input_shape)

print("train df : ", train_df)
# calling to (0,1) range
train_df = train_df.drop('gender',axis=1)
val_df = val_df.drop('gender',axis=1)
max_val = train_df.max(axis= 0)
min_val = train_df.min(axis= 0)

#print("max val : ", max_val)
#print("min val : ", min_val)
 
#range = max_val - min_val
#train_df = (train_df - min_val)/(range)
 
#val_df =  (val_df- min_val)/range

print("train df : ", train_df)
print("val df : ", val_df)
train_df.info()

model = tf.keras.Sequential([
 
    tf.keras.layers.Dense(units=64, activation='relu',
                          input_shape=input_shape),
    tf.keras.layers.Dense(units=64, activation='relu'),
    tf.keras.layers.Dense(units=1)
])
print("summary : ", model.summary())

# adam optimizer works pretty well for
# all kinds of problems and is a good starting point
model.compile(optimizer='adam',  
               
              # MAE error is good for
              # numerical predictions
              loss='mae') 

losses = model.fit(X_train, y_train,
 
                   validation_data=(X_val, y_val),
                    
                   # it will use 'batch_size' number
                   # of examples per example
                   batch_size=256, 
                   epochs=15,  # total epoch
 
                   )

print("losses : ", losses)


# this will pass the first 3 rows of features
# of our data as input to make predictions
print(model.predict(X_val.iloc[0:3, :]))

print(y_val.iloc[0:3])


loss_df = pd.DataFrame(losses.history)

# history stores the loss/val
# loss in each epoch

# loss_df is a dataframe which
# contains the losses so we can
# plot it to visualize our model training
loss_df.loc[:,['loss','val_loss']].plot()
plt.show()
