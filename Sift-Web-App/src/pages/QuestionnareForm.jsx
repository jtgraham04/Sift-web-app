import React, { useState } from 'react';

const QuestionnaireForm = () => {
  const [responses, setResponses] = useState({});
  const [message, setMessage] = useState('');

  const questions = [
    { id: 'q1', question: 'What are your strongest skills?' },
    { id: 'q2', question: 'What is your ideal work environment?' },
    { id: 'q3', question: 'What motivates you the most in a job?' },
    { id: 'q4', question: 'Do you prefer teamwork or independent work?' },
    { id: 'q5', question: 'What industries are you interested in?' },
  ];

  const handleChange = (id, value) => {
    setResponses({ ...responses, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token'); // Retrieve the JWT from storage
      const response = await fetch('http://localhost:5002/api/questionnaire', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(responses),
      });
  
      const data = await response.json();
      if (response.ok) {
        setMessage('Responses submitted successfully!');
      } else {
        setMessage(data.message || 'Error submitting responses.');
      }
    } catch (err) {
      setMessage('An error occurred.');
    }
  };
  

  return (
    <div>
      <h2>Job Questionnaire</h2>
      <form onSubmit={handleSubmit}>
        {questions.map((q) => (
          <div key={q.id} style={{ marginBottom: '1rem' }}>
            <label>
              {q.question}
              <textarea
                value={responses[q.id] || ''}
                onChange={(e) => handleChange(q.id, e.target.value)}
                style={{ width: '100%', minHeight: '50px', marginTop: '0.5rem' }}
              />
            </label>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default QuestionnaireForm;
