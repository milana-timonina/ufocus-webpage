import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import './ConsultationForm.css';

const ConsultationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [grade, setGrade] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      name,
      email,
      grade,
      selectedDate,
      selectedTime,
    };

    const emailSubject = `Consultation Booking - ${selectedDate} ${selectedTime} - ${name}`;
    const emailBody = `
      Name: ${name}\n
      Email: ${email}\n
      Grade: ${grade}\n
      Selected Date: ${selectedDate}\n
      Selected Time: ${selectedTime}
    `;

    // Send email using EmailJS
    emailjs
      .send(
        'service_rtaegwh', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          ...formData,
          subject: emailSubject,
          message: emailBody,
        },
        'YOUR_USER_ID' // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          alert('Email sent successfully!');
          console.log('SUCCESS!', response.status, response.text);
        },
        (err) => {
          alert('Failed to send email. Please try again.');
          console.log('FAILED...', err);
        }
      );
  };

  return (
    <div className="consultation">
      <div className="form-header">
        <h2>START BY BOOKING YOUR FREE CONSULTATION!</h2>
        <p>We are available 24/7. Fill out the form carefully and we will contact you via e-mail.</p>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Your full name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              required
            />
          </div>

          <div className="form-group">
            <label>Your e-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your e-mail"
              required
            />
          </div>

          <div className="form-group">
            <label>Your grade</label>
            <input
              type="text"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              placeholder="Your current grade"
              required
            />
          </div>

          <div className="form-group">
            <label>Choose the day</label>
            <input
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Choose preferred time</label>
            <select value={selectedTime} onChange={handleTimeChange} required>
              <option value="">Select time period, when we will arrange consultation</option>
              <option value="8:00-10:00">8:00-10:00 (EEST time)</option>
              <option value="11:00-12:00">11:00-12:00 (EEST time)</option>
              <option value="13:00-14:00">13:00-14:00 (EEST time)</option>
              <option value="14:00-15:00">14:00-15:00 (EEST time)</option>
              <option value="15:00-16:00">15:00-16:00 (EEST time)</option>
              <option value="16:00-17:00">16:00-17:00 (EEST time)</option>
              <option value="17:00-18:00">17:00-18:00 (EEST time)</option>
              <option value="18:00-19:00">18:00-19:00 (EEST time)</option>
            </select>
          </div>

          <div className="form-summary">
            <h3>Selected Day and Time:</h3>
            <p>{selectedDate ? selectedDate : "Not selected"} - {selectedTime ? selectedTime : "Not selected"}</p>
          </div>
          <button type="submit" className="submit-button">
            BOOK YOUR FREE CONSULTATION!
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConsultationForm;
