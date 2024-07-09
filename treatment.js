const fs = require('fs');

const diabetesData = [
  {
    name: 'patient 1', gender: 'female', age: 28, pregnant: 1, min_WBC: 5700, max_WBC: 14000, min_RBC: 2720000, max_RBC: 4430000, min_hemoglobin: 10.5, max_hemoglobin: 12,
    min_platelet: 125000, max_platelet: 150000, min_glucose: 70, max_glucose: 100, min_calcium: 8.5, max_calcium: 10.5, min_albumin: 2.9, max_albumin: 3.7, min_sodium: 133,
    max_sodium: 139, min_potassium: 3.3, max_potassium: 4.8, min_creatinine: 0.25, max_creatinine: 1.05
  },
  {
    name: 'patient 2', gender: 'male', age: 78, pregnant: 0, min_WBC: 10000, max_WBC: 14000, min_RBC: 4200000, max_RBC: 4200000, min_hemoglobin: 38.8, max_hemoglobin: 38.8,
    min_platelet: 220000, max_platelet: 220000, min_glucose: 180, max_glucose: 180, min_calcium: 9.2, max_calcium: 9.2, min_albumin: 3.5, max_albumin: 3.5, min_sodium: 130,
    max_sodium: 135, min_potassium: 2.5, max_potassium: 3.4, min_creatinine: 1.2, max_creatinine: 1.2
  },
  {
    name: 'patient 3', gender: 'female', age: 45, pregnant: 0, min_WBC: 7200, max_WBC: 7200, min_RBC: 4100000, max_RBC: 4100000, min_hemoglobin: 11.5, max_hemoglobin: 11.5,
    min_platelet: 250000, max_platelet: 250000, min_glucose: 160, max_glucose: 160, min_calcium: 8.9, max_calcium: 8.9, min_albumin: 3.4, max_albumin: 3.4, min_sodium: 139,
    max_sodium: 139, min_potassium: 5, max_potassium: 5, min_creatinine: 2, max_creatinine: 2
  },
  {
    name: 'patient 4', gender: 'male', age: 60, pregnant: 0, min_WBC: 6800, max_WBC: 6800, min_RBC: 4500000, max_RBC: 4500000, min_hemoglobin: 14, max_hemoglobin: 14,
    min_platelet: 220000, max_platelet: 220000, min_glucose: 148, max_glucose: 148, min_calcium: 9.4, max_calcium: 9.4, min_albumin: 4, max_albumin: 4, min_sodium: 140,
    max_sodium: 140, min_potassium: 4.6, max_potassium: 4.6, min_creatinine: 1, max_creatinine: 1
  },
  {
    name: 'patient 5', gender: 'female', age: 52, pregnant: 0, min_WBC: 5200, max_WBC: 5200, min_RBC: 4600000, max_RBC: 4600000, min_hemoglobin: 13.5, max_hemoglobin: 13.5,
    min_platelet: 230000, max_platelet: 230000, min_glucose: 158, max_glucose: 158, min_calcium: 9.1, max_calcium: 9.1, min_albumin: 4.2, max_albumin: 4.2, min_sodium: 137,
    max_sodium: 137, min_potassium: 4.3, max_potassium: 4.3, min_creatinine: 0.8, max_creatinine: 0.8
  },
  {
    name: 'patient 6', gender: 'male', age: 68, pregnant: 0, min_WBC: 6300, max_WBC: 6300, min_RBC: 4700000, max_RBC: 4700000, min_hemoglobin: 14.1, max_hemoglobin: 14.1,
    min_platelet: 240000, max_platelet: 240000, min_glucose: 152, max_glucose: 152, min_calcium: 9.3, max_calcium: 9.3, min_albumin: 4.1, max_albumin: 4.1, min_sodium: 139,
    max_sodium: 139, min_potassium: 4.4, max_potassium: 4.4, min_creatinine: 1.1, max_creatinine: 1.1
  },
  {
    name: 'patient 7', gender: 'female', age: 38, pregnant: 0, min_WBC: 9000, max_WBC: 9000, min_RBC: 4800000, max_RBC: 4800000, min_hemoglobin: 13.7, max_hemoglobin: 13.7,
    min_platelet: 260000, max_platelet: 260000, min_glucose: 142, max_glucose: 142, min_calcium: 9.5, max_calcium: 9.5, min_albumin: 4.3, max_albumin: 4.3, min_sodium: 141,
    max_sodium: 141, min_potassium: 4.5, max_potassium: 4.5, min_creatinine: 0.9, max_creatinine: 0.9
  },
  {
    name: 'patient 8', gender: 'male', age: 43, pregnant: 0, min_WBC: 6500, max_WBC: 6500, min_RBC: 4600000, max_RBC: 4600000, min_hemoglobin: 14.2, max_hemoglobin: 14.2,
    min_platelet: 250000, max_platelet: 250000, min_glucose: 145, max_glucose: 145, min_calcium: 9.2, max_calcium: 9.2, min_albumin: 4.4, max_albumin: 4.4, min_sodium: 142,
    max_sodium: 142, min_potassium: 4.3, max_potassium: 4.3, min_creatinine: 0.8, max_creatinine: 0.8
  },
  {
    name: 'patient 9', gender: 'female', age: 34, pregnant: 0, min_WBC: 7000, max_WBC: 7000, min_RBC: 4700000, max_RBC: 4700000, min_hemoglobin: 13.9, max_hemoglobin: 13.9,
    min_platelet: 240000, max_platelet: 240000, min_glucose: 138, max_glucose: 138, min_calcium: 9.4, max_calcium: 9.4, min_albumin: 4.5, max_albumin: 4.5, min_sodium: 140,
    max_sodium: 140, min_potassium: 4.2, max_potassium: 4.2, min_creatinine: 0.7, max_creatinine: 0.7
  },
  {
    name: 'patient 10', gender: 'male', age: 50, pregnant: 0, min_WBC: 5800, max_WBC: 5800, min_RBC: 4600000, max_RBC: 4600000, min_hemoglobin: 13.8, max_hemoglobin: 13.8,
    min_platelet: 250000, max_platelet: 250000, min_glucose: 152, max_glucose: 152, min_calcium: 9.3, max_calcium: 9.3, min_albumin: 4.2, max_albumin: 4.2, min_sodium: 141,
    max_sodium: 141, min_potassium: 4.4, max_potassium: 4.4, min_creatinine: 0.9, max_creatinine: 0.9
  },
  {
    name: 'patient 11', gender: 'female', age: 50, pregnant: 0, min_WBC: 7800, max_WBC: 7800, min_RBC: 4400000, max_RBC: 4400000, min_hemoglobin: 13.9, max_hemoglobin: 13.9,
    min_platelet: 280000, max_platelet: 280000, min_glucose: 138, max_glucose: 138, min_calcium: 9, max_calcium: 9, min_albumin: 4, max_albumin: 4, min_sodium: 140, max_sodium: 140,
    min_potassium: 4.2, max_potassium: 4.2, min_creatinine: 0.9, max_creatinine: 0.9
  }
];

const diabetesJsonl = diabetesData.map(entry => {
  const prompt = `Patient: ${entry.name}\nGender: ${entry.gender}\nAge: ${entry.age}\nPregnant: ${entry.pregnant}\nWBC range: ${entry.min_WBC}-${entry.max_WBC}\nRBC range: ${entry.min_RBC}-${entry.max_RBC}\nHemoglobin range: ${entry.min_hemoglobin}-${entry.max_hemoglobin}\nPlatelet range: ${entry.min_platelet}-${entry.max_platelet}\nGlucose range: ${entry.min_glucose}-${entry.max_glucose}\nCalcium range: ${entry.min_calcium}-${entry.max_calcium}\nAlbumin range: ${entry.min_albumin}-${entry.max_albumin}\nSodium range: ${entry.min_sodium}-${entry.max_sodium}\nPotassium range: ${entry.min_potassium}-${entry.max_potassium}\nCreatinine range: ${entry.min_creatinine}-${entry.max_creatinine}`;
  const completion = `WBC: ${entry.min_WBC}-${entry.max_WBC}\nRBC: ${entry.min_RBC}-${entry.max_RBC}\nHemoglobin: ${entry.min_hemoglobin}-${entry.max_hemoglobin}\nPlatelet: ${entry.min_platelet}-${entry.max_platelet}\nGlucose: ${entry.min_glucose}-${entry.max_glucose}\nCalcium: ${entry.min_calcium}-${entry.max_calcium}\nAlbumin: ${entry.min_albumin}-${entry.max_albumin}\nSodium: ${entry.min_sodium}-${entry.max_sodium}\nPotassium: ${entry.min_potassium}-${entry.max_potassium}\nCreatinine: ${entry.min_creatinine}-${entry.max_creatinine}`;
  return { prompt, completion };
});

fs.writeFileSync('diabetes.jsonl', diabetesJsonl.map(JSON.stringify).join('\n'));
