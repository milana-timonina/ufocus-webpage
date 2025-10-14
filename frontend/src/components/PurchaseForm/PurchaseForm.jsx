import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import './PurchaseForm.css';

const PurchaseForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [packageOption, setPackageOption] = useState('');
  const [additionalOption, setAdditionalOption] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      name,
      email,
      packageOption,
      additionalOption,
    };

    const emailSubject = `Purchase Request - ${packageOption} - ${name}`;
    const emailBody = `
      Name: ${name}\n
      Email: ${email}\n
      Package Selected: ${packageOption}\n
      Additional Option Selected: ${additionalOption || 'None'}
    `;

    // Send email using EmailJS
    emailjs
      .send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
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
    <div className="custom-form-container">
      <h1 className="custom-form-title">FILL OUT THE FORM TO PURCHASE THE DESIRABLE OPTION</h1>
      <p className="custom-form-description">
        We are available 24/7. After filling out the form, we will contact you to share the billing and your provider information.
      </p>
      <form className="custom-form" onSubmit={handleSubmit}>
        <div className="custom-form-row">
          <div className="custom-form-group">
            <label className="custom-form-label">Your full name</label>
            <input
              className="custom-form-input"
              type="text"
              placeholder="John Smith"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="custom-form-group">
            <label className="custom-form-label">Your e-mail</label>
            <input
              className="custom-form-input"
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="custom-form-group">
            <label className="custom-form-label">Choose preferred package</label>
            <select
              className="custom-form-select"
              value={packageOption}
              onChange={(e) => setPackageOption(e.target.value)}
              required
            >
              <option value="">Select a package</option>
              <option value="PACKAGE NO 1: Basic">PACKAGE NO 1: Basic</option>
              <option value="PACKAGE NO 2: High School (grade 9-11)">
                PACKAGE NO 2: High School (grade 9-11)
              </option>
              <option value="PACKAGE NO 3: Extra-curricular">PACKAGE NO 3: Extra-curricular</option>
              <option value="PACKAGE NO 4: Academic Guidance">PACKAGE NO 4: Academic Guidance</option>
              <option value="PACKAGE NO 5: U-Focus">PACKAGE NO 5: U-Focus</option>
            </select>
          </div>

          <div className="custom-form-group">
            <label className="custom-form-label">Choose preferred additional option</label>
            <select
              className="custom-form-select"
              value={additionalOption}
              onChange={(e) => setAdditionalOption(e.target.value)}
            >
              <option value="">Select an additional option</option>
              <option value="Academic evaluation and tutoring service twice a week in selected subjects">
                Academic evaluation and tutoring service twice a week in selected subjects
              </option>
              <option value="University Match">"University Match"</option>
              <option value="Admissions Strategy Planning (1-3 universities)">
                Admissions Strategy Planning (1-3 universities)
              </option>
              <option value="College Essay Refinement">College Essay Refinement</option>
              <option value="Resume Review and Guidance">Resume Review and Guidance</option>
              <option value="Volunteering Experience Counseling">Volunteering Experience Counseling</option>
              <option value="Interview Preparation">Interview Preparation</option>
              <option value="Entrance Exam Preparation">Entrance Exam Preparation</option>
              <option value="Application Review (1 university)">Application Review (1 university)</option>
              <option value="Application Review (3 universities)">Application Review (3 universities)</option>
              <option value="Application Review (5 universities)">Application Review (5 universities)</option>
              <option value="Moving Abroad Services">Moving Abroad Services</option>
              <option value="1 Tutoring lesson in any subject">1 Tutoring lesson in any subject</option>
              <option value="5 Tutoring lessons in any subject">5 Tutoring lessons in any subject</option>
            </select>
          </div>
        </div>
        <button className="custom-form-button" type="submit">
          BUY YOUR PACKAGE
        </button>
      </form>
    </div>
  );
};

export default PurchaseForm;
