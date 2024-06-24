-- Active: 1715816262104@@127.0.0.1@3306@nigger
CREATE TABLE `medical_history` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `patient_name` varchar(255) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `age` int NOT NULL,
  `pregnant` bit(1) NOT NULL,
  `type_2_diabetes` bit(1) NOT NULL,
  `type_1_diabetes` bit(1) NOT NULL,
  `hypertension` bit(1) NOT NULL,
  `smoking` bit(1) NOT NULL,
  `pneumonia` bit(1) NOT NULL,
  `fatigue` bit(1) NOT NULL,
  `gestational_diabetes` bit(1) NOT NULL,
  `polycystic_ovary_syndrome` bit(1) NOT NULL,
  `alcoholic` bit(1) NOT NULL,
  `fertility_treatments` bit(1) NOT NULL,
  `chronic_kidney_disease` bit(1) NOT NULL,
  `diet` bit(1) NOT NULL,
  `ischemic_stroke` bit(1) NOT NULL,
  `cognitive_changes` bit(1) NOT NULL,
  `hyperglycemia` bit(1) NOT NULL,
  `left_sided_weakness` bit(1) NOT NULL,
  `breast_cancer` bit(1) NOT NULL,
  `parkinsons` bit(1) NOT NULL,
  `tremors` bit(1) NOT NULL,
  `stiffness` bit(1) NOT NULL,
  `asthma` bit(1) NOT NULL,
  `allergies` bit(1) NOT NULL,
  `bipolar_disorder` bit(1) NOT NULL,
  `rheumatoid_arthritis` bit(1) NOT NULL,
  `ehlers_danlos_syndrome` bit(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

ALTER TABLE medical_history RENAME COLUMN `chronic_kidney disease` to chronic_kidney_disease

INSERT INTO medical_history (patient_name, gender, age, pregnant, type_2_diabetes, type_1_diabetes, hypertension, smoking, pneumonia, fatigue, gestational_diabetes, polycystic_ovary_syndrome, alcoholic, fertility_treatments, chronic_kidney_disease, diet, ischemic_stroke, cognitive_changes, hyperglycemia, left_sided_weakness, breast_cancer, parkinsons, tremors, stiffness, asthma, allergies, bipolar_disorder, rheumatoid_arthritis, ehlers_danlos_syndrome) VALUES ('patient 1', 'female', '28', b'1', b'0', b'0', b'0', b'0', b'0', b'0', b'1', b'1', b'1', b'1', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0');

INSERT INTO medical_history (patient_name, gender, age, pregnant, type_2_diabetes, type_1_diabetes, hypertension, smoking, pneumonia, fatigue, gestational_diabetes, polycystic_ovary_syndrome, alcoholic, fertility_treatments, chronic_kidney_disease, diet, ischemic_stroke, cognitive_changes, hyperglycemia, left_sided_weakness, breast_cancer, parkinsons, tremors, stiffness, asthma, allergies, bipolar_disorder, rheumatoid_arthritis, ehlers_danlos_syndrome) VALUES ('patient 2', 'male', '78', b'0', b'1', b'0', b'1', b'1', b'1', b'1', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0');

INSERT INTO medical_history (patient_name, gender, age, pregnant, type_2_diabetes, type_1_diabetes, hypertension, smoking, pneumonia, fatigue, gestational_diabetes, polycystic_ovary_syndrome, alcoholic, fertility_treatments, chronic_kidney_disease, diet, ischemic_stroke, cognitive_changes, hyperglycemia, left_sided_weakness, breast_cancer, parkinsons, tremors, stiffness, asthma, allergies, bipolar_disorder, rheumatoid_arthritis, ehlers_danlos_syndrome) VALUES ('patient 3', 'female', '45', b'0', b'1', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'1', b'0', b'1', b'1', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0');

UPDATE medical_history SET metformin = b'1', sulfonylurease = b'0', dapagliflozin = b'1' WHERE id = 3;

INSERT INTO medical_history (patient_name, gender, age, pregnant, type_2_diabetes, type_1_diabetes, hypertension, smoking, pneumonia, fatigue, gestational_diabetes, polycystic_ovary_syndrome, alcoholic, fertility_treatments, chronic_kidney_disease, diet, ischemic_stroke, cognitive_changes, hyperglycemia, left_sided_weakness, breast_cancer, parkinsons, tremors, stiffness, asthma, allergies, bipolar_disorder, rheumatoid_arthritis, ehlers_danlos_syndrome) VALUES ('patient 4', 'male', '60', b'0', b'1', b'0', b'1', b'0', b'0', b'0', b'0', b'0', b'1', b'0', b'0', b'0', b'1', b'1', b'1', b'1', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0');

INSERT INTO medical_history (patient_name, gender, age, pregnant, type_2_diabetes, type_1_diabetes, hypertension, smoking, pneumonia, fatigue, gestational_diabetes, polycystic_ovary_syndrome, alcoholic, fertility_treatments, chronic_kidney_disease, diet, ischemic_stroke, cognitive_changes, hyperglycemia, left_sided_weakness, breast_cancer, parkinsons, tremors, stiffness, asthma, allergies, bipolar_disorder, rheumatoid_arthritis, ehlers_danlos_syndrome) VALUES ('patient 5', 'female', '52', b'0', b'1', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'1', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0');

INSERT INTO medical_history (patient_name, gender, age, pregnant, type_2_diabetes, type_1_diabetes, hypertension, smoking, pneumonia, fatigue, gestational_diabetes, polycystic_ovary_syndrome, alcoholic, fertility_treatments, chronic_kidney_disease, diet, ischemic_stroke, cognitive_changes, hyperglycemia, left_sided_weakness, breast_cancer, parkinsons, tremors, stiffness, asthma, allergies, bipolar_disorder, rheumatoid_arthritis, ehlers_danlos_syndrome) VALUES ('patient 6', 'male', '68', b'0', b'1', b'0', b'1', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'1', b'1', b'1', b'0', b'0', b'0', b'0', b'0');

INSERT INTO medical_history (patient_name, gender, age, pregnant, type_2_diabetes, type_1_diabetes, hypertension, smoking, pneumonia, fatigue, gestational_diabetes, polycystic_ovary_syndrome, alcoholic, fertility_treatments, chronic_kidney_disease, diet, ischemic_stroke, cognitive_changes, hyperglycemia, left_sided_weakness, breast_cancer, parkinsons, tremors, stiffness, asthma, allergies, bipolar_disorder, rheumatoid_arthritis, ehlers_danlos_syndrome) VALUES ('patient 7', 'female', '38', b'0', b'1', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'1', b'1', b'0', b'0', b'0');

INSERT INTO medical_history (patient_name, gender, age, pregnant, type_2_diabetes, type_1_diabetes, hypertension, smoking, pneumonia, fatigue, gestational_diabetes, polycystic_ovary_syndrome, alcoholic, fertility_treatments, chronic_kidney_disease, diet, ischemic_stroke, cognitive_changes, hyperglycemia, left_sided_weakness, breast_cancer, parkinsons, tremors, stiffness, asthma, allergies, bipolar_disorder, rheumatoid_arthritis, ehlers_danlos_syndrome) VALUES ('patient 8', 'male', '43', b'0', b'1', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'1', b'0', b'0');

INSERT INTO medical_history (patient_name, gender, age, pregnant, type_2_diabetes, type_1_diabetes, hypertension, smoking, pneumonia, fatigue, gestational_diabetes, polycystic_ovary_syndrome, alcoholic, fertility_treatments, chronic_kidney_disease, diet, ischemic_stroke, cognitive_changes, hyperglycemia, left_sided_weakness, breast_cancer, parkinsons, tremors, stiffness, asthma, allergies, bipolar_disorder, rheumatoid_arthritis, ehlers_danlos_syndrome) VALUES ('patient 9', 'female', '34', b'0', b'1', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'1');

ALTER TABLE medical_history RENAME COLUMN name to patient_name

UPDATE medical_history SET patient_name = "patient11" WHERE id = 8

UPDATE medical_history SET age = '50' WHERE patient_name = "patient11"

INSERT INTO medical_history (patient_name, gender, age, pregnant, type_2_diabetes, type_1_diabetes, hypertension, smoking, pneumonia, fatigue, gestational_diabetes, polycystic_ovary_syndrome, alcoholic, fertility_treatments, chronic_kidney_disease, diet, ischemic_stroke, cognitive_changes, hyperglycemia, left_sided_weakness, breast_cancer, parkinsons, tremors, stiffness, asthma, allergies, bipolar_disorder, rheumatoid_arthritis, ehlers_danlos_syndrome) VALUES ('patient 10', 'male', '50', b'0', b'1', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0');

INSERT INTO medical_history (patient_name, gender, age, pregnant, type_2_diabetes, type_1_diabetes, hypertension, smoking, pneumonia, fatigue, gestational_diabetes, polycystic_ovary_syndrome, alcoholic, fertility_treatments, chronic_kidney_disease, diet, ischemic_stroke, cognitive_changes, hyperglycemia, left_sided_weakness, breast_cancer, parkinsons, tremors, stiffness, asthma, allergies, bipolar_disorder, rheumatoid_arthritis, ehlers_danlos_syndrome) VALUES ('patient 9', 'female', '34', b'0', b'1', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'0', b'1', b'0');

ALTER Table medical_history ALTER COLUMN `antiretroviral_therapy` DROP DEFAULT

UPDATE medical_history SET patient_name = "patient11", age = '50' WHERE id = 10

UPDATE medical_history SET antiretroviral_therapy = b'1' WHERE id = 11