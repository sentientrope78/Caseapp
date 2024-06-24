-- Active: 1715816262104@@127.0.0.1@3306@nigger
CREATE TABLE `treatment` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `name` varchar(255) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `age` int NOT NULL,
  `pregnant` bit(1) NOT NULL,
  `diet` bit(1) NOT NULL,
  `exercise` bit(1) NOT NULL,
  `no_smoking` bit(1) NOT NULL,
  `no_alcohol` bit(1) NOT NULL,
  `mental_therapy` bit(1) NOT NULL,
  `insulin_injection` bit(1) NOT NULL,
  `glyburide` bit(1) NOT NULL,
  `metformin` bit(1) NOT NULL,
  `beta_lactams` bit(1) NOT NULL,
  `tetracycline` bit(1) NOT NULL,
  `acarbose` bit(1) NOT NULL,
  `sulfonylurease` bit(1) NOT NULL,
  `dapagliflozin` bit(1) NOT NULL,
  `pioglitazone` bit(1) NOT NULL,
  `GLP1RA_therapy` bit(1) NOT NULL,
  `lisinopril` bit(1) NOT NULL,
  `liraglutides` bit(1) NOT NULL,
  `exenatide` bit(1) NOT NULL,
  `ozempic` bit(1) NOT NULL,
  `empagliflozin` bit(1) NOT NULL,
  `antipsychotics` bit(1) NOT NULL,
  `corticosteroids` bit(1) NOT NULL,
  `sitagliptin` bit(1) NOT NULL,
  `aspirin` bit(1) NOT NULL,
  `collagen` bit(1) NOT NULL,
  `elastin` bit(1) NOT NULL,
  `DPP4_inhibitors` bit(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci


INSERT INTO treatment (name, gender, age, pregnant, diet, exercise, no_smoking, no_alcohol, mental_therapy, insulin_injection, glyburide, metformin, beta_lactams, tetracycline, acarbose, sulfonylurease, dapagliflozin, pioglitazone, GLP1RA_therapy, lisinopril, liraglutides, exenatide, ozempic, empagliflozin, antipsychotics, corticosteroids, sitagliptin, aspirin, collagen, elastin, DPP4_inhibitors) VALUES ('patient 1', 'female', '28', b'1', b'1', b'1', b'1', b'1', b'1', b'1', b'1', b'1', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0');

INSERT INTO treatment (name, gender, age, pregnant, diet, exercise, no_smoking, no_alcohol, mental_therapy, insulin_injection, glyburide, metformin, beta_lactams, tetracycline, acarbose, sulfonylurease, dapagliflozin, pioglitazone, GLP1RA_therapy, lisinopril, liraglutides, exenatide, ozempic, empagliflozin, antipsychotics, corticosteroids, sitagliptin, aspirin, collagen, elastin, DPP4_inhibitors) VALUES ('patient 2', 'male', '78', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'1', b'1', b'1', b'1', b'1', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0');

INSERT INTO treatment (name, gender, age, pregnant, diet, exercise, no_smoking, no_alcohol, mental_therapy, insulin_injection, glyburide, metformin, beta_lactams, tetracycline, acarbose, sulfonylurease, dapagliflozin, pioglitazone, GLP1RA_therapy, lisinopril, liraglutides, exenatide, ozempic, empagliflozin, antipsychotics, corticosteroids, sitagliptin, aspirin, collagen, elastin, DPP4_inhibitors) VALUES ('patient 3', 'female', '45', b'0', b'0', b'1', b'0', b'0', b'1', b'1', b'0', b'0', b'0', b'0', b'0', b'1', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0');

UPDATE treatment SET metformin = b'1', sulfonylurease = b'0', dapagliflozin = b'1' WHERE id = 3;

INSERT INTO treatment (name, gender, age, pregnant, diet, exercise, no_smoking, no_alcohol, mental_therapy, insulin_injection, glyburide, metformin, beta_lactams, tetracycline, acarbose, sulfonylurease, dapagliflozin, pioglitazone, GLP1RA_therapy, lisinopril, liraglutides, exenatide, ozempic, empagliflozin, antipsychotics, corticosteroids, sitagliptin, aspirin, collagen, elastin, DPP4_inhibitors) VALUES ('patient 4', 'male', '60', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'1', b'1', b'1', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0');

INSERT INTO treatment (patient_name, gender, age, pregnant, diet, exercise, no_smoking, no_alcohol, mental_therapy, insulin_injection, glyburide, metformin, beta_lactams, tetracycline, acarbose, sulfonylurease, dapagliflozin, pioglitazone, GLP1RA_therapy, lisinopril, liraglutides, exenatide, ozempic, empagliflozin, antipsychotics, corticosteroids, sitagliptin, aspirin, collagen, elastin, DPP4_inhibitors) VALUES ('patient 5', 'female', '52', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'1', b'1', b'1', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0');

INSERT INTO treatment (name, gender, age, pregnant, diet, exercise, no_smoking, no_alcohol, mental_therapy, insulin_injection, glyburide, metformin, beta_lactams, tetracycline, acarbose, sulfonylurease, dapagliflozin, pioglitazone, GLP1RA_therapy, lisinopril, liraglutides, exenatide, ozempic, empagliflozin, antipsychotics, corticosteroids, sitagliptin, aspirin, collagen, elastin, DPP4_inhibitors) VALUES ('patient 6', 'male', '68', b'0', b'0', b'1', b'1', b'1', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'1', b'0', b'1', b'1', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0');

INSERT INTO treatment (name, gender, age, pregnant, diet, exercise, no_smoking, no_alcohol, mental_therapy, insulin_injection, glyburide, metformin, beta_lactams, tetracycline, acarbose, sulfonylurease, dapagliflozin, pioglitazone, GLP1RA_therapy, lisinopril, liraglutides, exenatide, ozempic, empagliflozin, antipsychotics, corticosteroids, sitagliptin, aspirin, collagen, elastin, DPP4_inhibitors) VALUES ('patient 7', 'female', '38', b'0', b'1', b'1', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'1', b'0', b'1', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0');

INSERT INTO treatment (name, gender, age, pregnant, diet, exercise, no_smoking, no_alcohol, mental_therapy, insulin_injection, glyburide, metformin, beta_lactams, tetracycline, acarbose, sulfonylurease, dapagliflozin, pioglitazone, GLP1RA_therapy, lisinopril, liraglutides, exenatide, ozempic, empagliflozin, antipsychotics, corticosteroids, sitagliptin, aspirin, collagen, elastin, DPP4_inhibitors) VALUES ('patient 8', 'male', '43', b'0', b'1', b'1', b'0', b'0', b'0', b'0', b'0', b'1', b'0', b'0', b'0', b'0', b'0', b'1', b'0', b'0', b'0', b'0', b'0', b'1', b'0', b'0', b'0', b'0', b'0', b'0', b'0');

INSERT INTO treatment (name, gender, age, pregnant, diet, exercise, no_smoking, no_alcohol, mental_therapy, insulin_injection, glyburide, metformin, beta_lactams, tetracycline, acarbose, sulfonylurease, dapagliflozin, pioglitazone, GLP1RA_therapy, lisinopril, liraglutides, exenatide, ozempic, empagliflozin, antipsychotics, corticosteroids, sitagliptin, aspirin, collagen, elastin, DPP4_inhibitors) VALUES ('patient 9', 'female', '34', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'1', b'0', b'0', b'0', b'0', b'0', b'1', b'0', b'0', b'0', b'0', b'0', b'1', b'0', b'0', b'1', b'0', b'0', b'0', b'0');

ALTER TABLE treatment RENAME COLUMN name to patient_name

UPDATE treatment SET patient_name = "patient11" WHERE id = 8

UPDATE treatment SET age = '50' WHERE patient_name = "patient11"

INSERT INTO treatment (patient_name, gender, age, pregnant, diet, exercise, no_smoking, no_alcohol, mental_therapy, insulin_injection, glyburide, metformin, beta_lactams, tetracycline, acarbose, sulfonylurease, dapagliflozin, pioglitazone, GLP1RA_therapy, lisinopril, liraglutides, exenatide, ozempic, empagliflozin, antipsychotics, corticosteroids, sitagliptin, aspirin, collagen, elastin, DPP4_inhibitors) VALUES ('patient 10', 'male', '50', b'0', b'1', b'1', b'1', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'1');

INSERT INTO treatment (patient_name, gender, age, pregnant, diet, exercise, no_smoking, no_alcohol, mental_therapy, insulin_injection, glyburide, metformin, beta_lactams, tetracycline, acarbose, sulfonylurease, dapagliflozin, pioglitazone, GLP1RA_therapy, lisinopril, liraglutides, exenatide, ozempic, empagliflozin, antipsychotics, corticosteroids, sitagliptin, aspirin, collagen, elastin, DPP4_inhibitors) VALUES ('patient 9', 'female', '34', b'0', b'0', b'1', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'1', b'1', b'1', b'0');


