-- Active: 1715816262104@@127.0.0.1@3306@nigger
CREATE TABLE `diabetes` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `name` varchar(255) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `age` int NOT NULL,
  `pregnant` bit(1) NOT NULL,
  `min_WBC` float NOT NULL,
  `max_WBC` float NOT NULL,
  `min_RBC` float NOT NULL,
  `max_RBC` float NOT NULL,
  `min_hemoglobin` float NOT NULL,
  `max_hemoglobin` float NOT NULL,
  `min_platelet` float NOT NULL,
  `max_platelet` float NOT NULL,
  `min_glucose` float NOT NULL,
  `max_glucose` float NOT NULL,
  'min_calcium' float NOT NULL,
  'max_calcium' float NOT NULL,
  'min_albumin' float NOT NULL,
  'max_albumin' float NOT NULL
  'min_sodium' float NOT NULL,
  'max_sodium' float NOT NULL,
  'min_potassium' float NOT NULL,
  'max_potassium' float NOT NULL,
  'min_creatinine' float NOT NULL,
  'max_creatinine' float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci


INSERT INTO diabetes (name, gender, age, pregnant, min_WBC, max_WBC, min_RBC, max_RBC, min_hemoglobin, max_hemoglobin, min_platelet, max_platelet, min_glucose, max_glucose, min_calcium, max_calcium, min_albumin, max_albumin, min_sodium, max_sodium, min_potassium, max_potassium, min_creatinine, max_creatinine) VALUES ('patient 1', 'female', '28', b'1', '5700', '14000', '2720000', '4430000', '10.5', '12', '125000', '150000', '70', '100', '8.5', '10.5', '2.9', '3.7', '133', '139', '3.3', '4.8', '0.25', '1.05');

INSERT INTO diabetes (name, gender, age, pregnant, min_WBC, max_WBC, min_RBC, max_RBC, min_hemoglobin, max_hemoglobin, min_platelet, max_platelet, min_glucose, max_glucose, min_calcium, max_calcium, min_albumin, max_albumin, min_sodium, max_sodium, min_potassium, max_potassium, min_creatinine, max_creatinine) VALUES ('patient 2', 'male', '78', b'0', '10000', '14000', '4200000', '4200000', '38.8', '38.8', '220000', '220000', '180', '180', '9.2', '9.2', '3.5', '3.5', '130', '135', '2.5', '3.4', '1.2', '1.2');

INSERT INTO diabetes (name, gender, age, pregnant, min_WBC, max_WBC, min_RBC, max_RBC, min_hemoglobin, max_hemoglobin, min_platelet, max_platelet, min_glucose, max_glucose, min_calcium, max_calcium, min_albumin, max_albumin, min_sodium, max_sodium, min_potassium, max_potassium, min_creatinine, max_creatinine) VALUES ('patient 3', 'female', '45', b'0', '7200', '7200', '4100000', '4100000', '11.5', '11.5', '250000', '250000', '160', '160', '8.9', '8.9', '3.4', '3.4', '139', '139', '5', '5', '2', '2');

INSERT INTO diabetes (name, gender, age, pregnant, min_WBC, max_WBC, min_RBC, max_RBC, min_hemoglobin, max_hemoglobin, min_platelet, max_platelet, min_glucose, max_glucose, min_calcium, max_calcium, min_albumin, max_albumin, min_sodium, max_sodium, min_potassium, max_potassium, min_creatinine, max_creatinine) VALUES ('patient 4', 'male', '60', b'0', '6800', '6800', '4500000', '4500000', '14', '14', '220000', '220000', '148', '148', '9.4', '9.4', '4', '4', '140', '140', '4.6', '4.6', '1', '1');

INSERT INTO diabetes (name, gender, age, pregnant, min_WBC, max_WBC, min_RBC, max_RBC, min_hemoglobin, max_hemoglobin, min_platelet, max_platelet, min_glucose, max_glucose, min_calcium, max_calcium, min_albumin, max_albumin, min_sodium, max_sodium, min_potassium, max_potassium, min_creatinine, max_creatinine) VALUES ('patient 5', 'female', '52', b'0', '5200', '5200', '4600000', '4600000', '13.5', '13.5', '230000', '230000', '158', '158', '9.1', '9.1', '4.2', '4.2', '137', '137', '4.3', '4.3', '0.8', '0.8');

INSERT INTO diabetes (name, gender, age, pregnant, min_WBC, max_WBC, min_RBC, max_RBC, min_hemoglobin, max_hemoglobin, min_platelet, max_platelet, min_glucose, max_glucose, min_calcium, max_calcium, min_albumin, max_albumin, min_sodium, max_sodium, min_potassium, max_potassium, min_creatinine, max_creatinine) VALUES ('patient 6', 'male', '68', b'0', '6300', '6300', '4700000', '4700000', '14.1', '14.1', '240000', '240000', '152', '152', '9.3', '9.3', '4.1', '4.1', '139', '139', '4.4', '4.4', '1.1', '1.1');

INSERT INTO diabetes (name, gender, age, pregnant, min_WBC, max_WBC, min_RBC, max_RBC, min_hemoglobin, max_hemoglobin, min_platelet, max_platelet, min_glucose, max_glucose, min_calcium, max_calcium, min_albumin, max_albumin, min_sodium, max_sodium, min_potassium, max_potassium, min_creatinine, max_creatinine) VALUES ('patient 7', 'female', '38', b'0', '9000', '9000', '4800000', '4800000', '13.7', '13.7', '260000', '260000', '142', '142', '9.5', '9.5', '4.3', '4.3', '141', '141', '4.5', '4.5', '0.9', '0.9');

INSERT INTO diabetes (name, gender, age, pregnant, min_WBC, max_WBC, min_RBC, max_RBC, min_hemoglobin, max_hemoglobin, min_platelet, max_platelet, min_glucose, max_glucose, min_calcium, max_calcium, min_albumin, max_albumin, min_sodium, max_sodium, min_potassium, max_potassium, min_creatinine, max_creatinine) VALUES ('patient 8', 'male', '43', b'0', '6500', '6500', '4600000', '4600000', '14.2', '14.2', '250000', '250000', '145', '145', '9.2', '9.2', '4.4', '4.4', '142', '142', '4.3', '4.3', '0.8', '0.8');

INSERT INTO diabetes (name, gender, age, pregnant, min_WBC, max_WBC, min_RBC, max_RBC, min_hemoglobin, max_hemoglobin, min_platelet, max_platelet, min_glucose, max_glucose, min_calcium, max_calcium, min_albumin, max_albumin, min_sodium, max_sodium, min_potassium, max_potassium, min_creatinine, max_creatinine) VALUES ('patient 9', 'female', '34', b'0', '7000', '7000', '4700000', '4700000', '13.9', '13.9', '240000', '240000', '138', '138', '9.4', '9.4', '4.5', '4.5', '140', '140', '4.2', '4.2', '0.7', '0.7');

INSERT INTO diabetes (name, gender, age, pregnant, min_WBC, max_WBC, min_RBC, max_RBC, min_hemoglobin, max_hemoglobin, min_platelet, max_platelet, min_glucose, max_glucose, min_calcium, max_calcium, min_albumin, max_albumin, min_sodium, max_sodium, min_potassium, max_potassium, min_creatinine, max_creatinine) VALUES ('patient 10', 'male', '50', b'0', '5800', '5800', '4600000', '4600000', '13.8', '13.8', '250000', '250000', '152', '152', '9.3', '9.3', '4.2', '4.2', '141', '141', '4.4', '4.4', '0.9', '0.9');

INSERT INTO diabetes (name, gender, age, pregnant, min_WBC, max_WBC, min_RBC, max_RBC, min_hemoglobin, max_hemoglobin, min_platelet, max_platelet, min_glucose, max_glucose, min_calcium, max_calcium, min_albumin, max_albumin, min_sodium, max_sodium, min_potassium, max_potassium, min_creatinine, max_creatinine) VALUES ('patient 11', 'female', '50', b'0', '7800', '7800', '4400000', '4400000', '13.9', '13.9', '280000', '280000', '138', '138', '9', '9', '4', '4', '140', '140', '4.2', '4.2', '0.9', '0.9');


