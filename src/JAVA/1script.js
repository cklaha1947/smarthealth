document.getElementById('symptomForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const symptomInput = document.getElementById('symptom').value.toLowerCase();
    
    const symptoms = [
        { symptom: 'fever', diagnosis: 'You might have the flu or an infection.' },
        { symptom: 'cough', diagnosis: 'You might have a cold or respiratory infection.' },
        { symptom: 'headache', diagnosis: 'You might have a migraine or tension headache.' },
        { symptom: 'stomach ache', diagnosis: 'You might have indigestion or a stomach virus.' },
        { symptom: 'sore throat', diagnosis: 'You might have a throat infection or strep throat.' },
        { symptom: 'runny nose', diagnosis: 'You might have a common cold or allergies.' },
        { symptom: 'fatigue', diagnosis: 'You might have chronic fatigue syndrome or need more rest.' },
        { symptom: 'nausea', diagnosis: 'You might have food poisoning or morning sickness.' }
    ];
    
    let diagnosis = 'Please consult a healthcare provider for a proper diagnosis.';
    
    for (let i = 0; i < symptoms.length; i++) {
        if (symptoms[i].symptom === symptomInput) {
            diagnosis = symptoms[i].diagnosis;
            break;
        }
    }
    
    document.getElementById('result').innerText = diagnosis;
});
