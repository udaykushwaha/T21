function getHealthAdvice() {
    const symptoms = document.getElementById('symptoms').value;
    let advice = '';
    
    // Simple logic for demo purposes. Replace with real AI model logic.
    if (symptoms.toLowerCase().includes('headache')) {
        advice = 'It looks like you have a headache. Please take a pain reliever like ibuprofen or acetaminophen, rest in a quiet, dark room, and drink plenty of water.';
    } else if (symptoms.toLowerCase().includes('fever')) {
        advice = 'It looks like you have a fever. Stay hydrated, take fever-reducing medication like acetaminophen, and rest. If your fever persists for more than 3 days, consult a healthcare professional.';
    } else {
        advice = 'Your symptoms do not match our database. Please consult a healthcare professional for a proper diagnosis.';
    }
    
    document.getElementById('advice-output').innerHTML = `<p>${advice}</p>`;
}
