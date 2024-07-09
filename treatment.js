const treatmentData = [
  {
    name: 'patient 1', gender: 'female', age: 28, pregnant: 1, diet: 1, exercise: 1, no_smoking: 1, no_alcohol: 1, mental_therapy: 1, insulin_injection: 1, glyburide: 1, metformin: 1,
    beta_lactams: 0, tetracycline: 0, acarbose: 0, sulfonylurease: 0, dapagliflozin: 0, pioglitazone: 0, GLP1RA_therapy: 0, lisinopril: 0, liraglutides: 0, exenatide: 0, ozempic: 0,
    empagliflozin: 0, antipsychotics: 0, corticosteroids: 0, sitagliptin: 0, aspirin: 0, collagen: 0, elastin: 0, DPP4_inhibitors: 0
  },
  {
    name: 'patient 2', gender: 'male', age: 78, pregnant: 0, diet: 0, exercise: 0, no_smoking: 0, no_alcohol: 0, mental_therapy: 0, insulin_injection: 0, glyburide: 0, metformin: 1,
    beta_lactams: 1, tetracycline: 1, acarbose: 1, sulfonylurease: 1, dapagliflozin: 0, pioglitazone: 0, GLP1RA_therapy: 0, lisinopril: 0, liraglutides: 0, exenatide: 0, ozempic: 0,
    empagliflozin: 0, antipsychotics: 0, corticosteroids: 0, sitagliptin: 0, aspirin: 0, collagen: 0, elastin: 0, DPP4_inhibitors: 0
  },
  {
    name: 'patient 3', gender: 'female', age: 45, pregnant: 0, diet: 0, exercise: 1, no_smoking: 0, no_alcohol: 0, mental_therapy: 1, insulin_injection: 1, glyburide: 0, metformin: 1,
    beta_lactams: 0, tetracycline: 0, acarbose: 0, sulfonylurease: 1, dapagliflozin: 1, pioglitazone: 0, GLP1RA_therapy: 0, lisinopril: 0, liraglutides: 0, exenatide: 0, ozempic: 0,
    empagliflozin: 0, antipsychotics: 0, corticosteroids: 0, sitagliptin: 0, aspirin: 0, collagen: 0, elastin: 0, DPP4_inhibitors: 0
  },
  {
    name: 'patient 4', gender: 'male', age: 60, pregnant: 0, diet: 0, exercise: 0, no_smoking: 0, no_alcohol: 0, mental_therapy: 0, insulin_injection: 0, glyburide: 0, metformin: 0,
    beta_lactams: 0, tetracycline: 0, acarbose: 0, sulfonylurease: 0, dapagliflozin: 0, pioglitazone: 1, GLP1RA_therapy: 1, lisinopril: 1, liraglutides: 0, exenatide: 0, ozempic: 0,
    empagliflozin: 0, antipsychotics: 0, corticosteroids: 0, sitagliptin: 0, aspirin: 0, collagen: 0, elastin: 0, DPP4_inhibitors: 0
  },
  {
    name: 'patient 5', gender: 'female', age: 52, pregnant: 0, diet: 0, exercise: 0, no_smoking: 0, no_alcohol: 0, mental_therapy: 0, insulin_injection: 0, glyburide: 0, metformin: 0,
    beta_lactams: 0, tetracycline: 0, acarbose: 0, sulfonylurease: 0, dapagliflozin: 0, pioglitazone: 1, GLP1RA_therapy: 1, lisinopril: 1, liraglutides: 0, exenatide: 0, ozempic: 0,
    empagliflozin: 0, antipsychotics: 0, corticosteroids: 0, sitagliptin: 0, aspirin: 0, collagen: 0, elastin: 0, DPP4_inhibitors: 0
  },
  {
    name: 'patient 6', gender: 'male', age: 68, pregnant: 0, diet: 0, exercise: 1, no_smoking: 1, no_alcohol: 1, mental_therapy: 0, insulin_injection: 0, glyburide: 0, metformin: 0,
    beta_lactams: 0, tetracycline: 0, acarbose: 0, sulfonylurease: 0, dapagliflozin: 0, pioglitazone: 0, GLP1RA_therapy: 1, lisinopril: 0, liraglutides: 1, exenatide: 1, ozempic: 0,
    empagliflozin: 0, antipsychotics: 0, corticosteroids: 0, sitagliptin: 0, aspirin: 0, collagen: 0, elastin: 0, DPP4_inhibitors: 0
  },
  {
    name: 'patient 7', gender: 'female', age: 38, pregnant: 0, diet: 1, exercise: 1, no_smoking: 0, no_alcohol: 0, mental_therapy: 0, insulin_injection: 0, glyburide: 0, metformin: 0,
    beta_lactams: 0, tetracycline: 0, acarbose: 0, sulfonylurease: 0, dapagliflozin: 0, pioglitazone: 0, GLP1RA_therapy: 0, lisinopril: 0, liraglutides: 0, exenatide: 0, ozempic: 1,
    empagliflozin: 0, antipsychotics: 0, corticosteroids: 0, sitagliptin: 0, aspirin: 0, collagen: 0, elastin: 0, DPP4_inhibitors: 0
  },
  {
    name: 'patient 8', gender: 'male', age: 43, pregnant: 0, diet: 1, exercise: 1, no_smoking: 0, no_alcohol: 0, mental_therapy: 0, insulin_injection: 0, glyburide: 0, metformin: 1,
    beta_lactams: 0, tetracycline: 0, acarbose: 0, sulfonylurease: 0, dapagliflozin: 0, pioglitazone: 1, GLP1RA_therapy: 0, lisinopril: 0, liraglutides: 0, exenatide: 0, ozempic: 0,
    empagliflozin: 1, antipsychotics: 0, corticosteroids: 0, sitagliptin: 0, aspirin: 0, collagen: 0, elastin: 0, DPP4_inhibitors: 0
  },
  {
    name: 'patient 9', gender: 'female', age: 34, pregnant: 0, diet: 0, exercise: 0, no_smoking: 0, no_alcohol: 0, mental_therapy: 0, insulin_injection: 0, glyburide: 0, metformin: 1,
    beta_lactams: 0, tetracycline: 0, acarbose: 0, sulfonylurease: 0, dapagliflozin: 0, pioglitazone: 1, GLP1RA_therapy: 0, lisinopril: 0, liraglutides: 0, exenatide: 0, ozempic: 0,
    empagliflozin: 1, antipsychotics: 0, corticosteroids: 0, sitagliptin: 1, aspirin: 0, collagen: 0, elastin: 0, DPP4_inhibitors: 0
  },
  {
    name: 'patient 10', gender: 'male', age: 50, pregnant: 0, diet: 1, exercise: 1, no_smoking: 1, no_alcohol: 0, mental_therapy: 0, insulin_injection: 0, glyburide: 0, metformin: 0,
    beta_lactams: 0, tetracycline: 0, acarbose: 0, sulfonylurease: 0, dapagliflozin: 0, pioglitazone: 0, GLP1RA_therapy: 0, lisinopril: 0, liraglutides: 0, exenatide: 0, ozempic: 0,
    empagliflozin: 0, antipsychotics: 0, corticosteroids: 0, sitagliptin: 0, aspirin: 0, collagen: 0, elastin: 0, DPP4_inhibitors: 1
  },
  {
    name: 'patient 11', gender: 'female', age: 50, pregnant: 0, diet: 0, exercise: 1, no_smoking: 0, no_alcohol: 0, mental_therapy: 0, insulin_injection: 0, glyburide: 0, metformin: 0,
    beta_lactams: 0, tetracycline: 0, acarbose: 0, sulfonylurease: 0, dapagliflozin: 0, pioglitazone: 0, GLP1RA_therapy: 0, lisinopril: 0, liraglutides: 0, exenatide: 0, ozempic: 0,
    empagliflozin: 0, antipsychotics: 0, corticosteroids: 0, sitagliptin: 0, aspirin: 0, collagen: 1, elastin: 1, DPP4_inhibitors: 0
  }
];

const treatmentJsonl = treatmentData.map(entry => {
  const prompt = `Patient: ${entry.name}\nGender: ${entry.gender}\nAge: ${entry.age}\nPregnant: ${entry.pregnant}\nDiet: ${entry.diet}\nExercise: ${entry.exercise}\nNo Smoking: ${entry.no_smoking}\nNo Alcohol: ${entry.no_alcohol}\nMental Therapy: ${entry.mental_therapy}\nInsulin Injection: ${entry.insulin_injection}\nGlyburide: ${entry.glyburide}\nMetformin: ${entry.metformin}\nBeta Lactams: ${entry.beta_lactams}\nTetracycline: ${entry.tetracycline}\nAcarbose: ${entry.acarbose}\nSulfonylurease: ${entry.sulfonylurease}\nDapagliflozin: ${entry.dapagliflozin}\nPioglitazone: ${entry.pioglitazone}\nGLP1RA Therapy: ${entry.GLP1RA_therapy}\nLisinopril: ${entry.lisinopril}\nLiraglutides: ${entry.liraglutides}\nExenatide: ${entry.exenatide}\nOzempic: ${entry.ozempic}\nEmpagliflozin: ${entry.empagliflozin}\nAntipsychotics: ${entry.antipsychotics}\nCorticosteroids: ${entry.corticosteroids}\nSitagliptin: ${entry.sitagliptin}\nAspirin: ${entry.aspirin}\nCollagen: ${entry.collagen}\nElastin: ${entry.elastin}\nDPP4 Inhibitors: ${entry.DPP4_inhibitors}`;
  const completion = `Treatment Plan:\nDiet: ${entry.diet}\nExercise: ${entry.exercise}\nNo Smoking: ${entry.no_smoking}\nNo Alcohol: ${entry.no_alcohol}\nMental Therapy: ${entry.mental_therapy}\nInsulin Injection: ${entry.insulin_injection}\nGlyburide: ${entry.glyburide}\nMetformin: ${entry.metformin}\nBeta Lactams: ${entry.beta_lactams}\nTetracycline: ${entry.tetracycline}\nAcarbose: ${entry.acarbose}\nSulfonylurease: ${entry.sulfonylurease}\nDapagliflozin: ${entry.dapagliflozin}\nPioglitazone: ${entry.pioglitazone}\nGLP1RA Therapy: ${entry.GLP1RA_therapy}\nLisinopril: ${entry.lisinopril}\nLiraglutides: ${entry.liraglutides}\nExenatide: ${entry.exenatide}\nOzempic: ${entry.ozempic}\nEmpagliflozin: ${entry.empagliflozin}\nAntipsychotics: ${entry.antipsychotics}\nCorticosteroids: ${entry.corticosteroids}\nSitagliptin: ${entry.sitagliptin}\nAspirin: ${entry.aspirin}\nCollagen: ${entry.collagen}\nElastin: ${entry.elastin}\nDPP4 Inhibitors: ${entry.DPP4_inhibitors}`;
  return { prompt, completion };
});

fs.writeFileSync('treatment.jsonl', treatmentJsonl.map(JSON.stringify).join('\n'));
