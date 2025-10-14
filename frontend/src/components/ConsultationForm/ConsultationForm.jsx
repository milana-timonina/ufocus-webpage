import React, { useState } from "react";
import emailjs from "emailjs-com";               // same lib you used originally
import "./ConsultationForm.css";                 // your original styles
import { useTranslation } from "react-i18next"; // for translations (safe if keys missing)

const ConsultationForm = () => {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [grade, setGrade] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleDateChange = (e) => setSelectedDate(e.target.value);
  const handleTimeChange = (e) => setSelectedTime(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, email, grade, selectedDate, selectedTime };
    const emailSubject = `Consultation Booking - ${selectedDate} ${selectedTime} - ${name}`;
    const emailBody =
      `Name: ${name}\nEmail: ${email}\nGrade: ${grade}\nSelected Date: ${selectedDate}\nSelected Time: ${selectedTime}`;

    // ---- Preview friendly: if IDs are missing, pretend success so you can test UI ----
    const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_rtaegwh";   // your original service ID
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
    const USER_ID     = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_USER_ID";

    try {
      if (TEMPLATE_ID === "YOUR_TEMPLATE_ID" || USER_ID === "YOUR_USER_ID") {
        await new Promise((r) => setTimeout(r, 500)); // fake send
        alert("Email (preview) — looks good!");
      } else {
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          { ...formData, subject: emailSubject, message: emailBody },
          USER_ID
        );
        alert("Email sent successfully!");
      }
      // reset
      setName(""); setEmail(""); setGrade(""); setSelectedDate(""); setSelectedTime("");
    } catch (err) {
      console.error(err);
      alert("Failed to send email. Please try again.");
    }
  };

  return (
    <div className="consultation" id="consult">
      <div className="form-header">
        <h2>{t("consult.title", "START BY BOOKING YOUR FREE CONSULTATION!")}</h2>
        <p>{t("consult.subtitle", "We are available 24/7. Fill out the form carefully and we will contact you via e-mail.")}</p>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit} className="consult-form"> {/* wrapper class for mobile tweaks if needed */}
          <div className="form-group">
            <label>{t("consult.fullname", "Your full name")}</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t("consult.fullname_ph", "Your full name")}
              required
            />
          </div>

          <div className="form-group">
            <label>{t("consult.email", "Your e-mail")}</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("consult.email_ph", "Your e-mail")}
              required
            />
          </div>

          <div className="form-group">
            <label>{t("consult.grade", "Your grade")}</label>
            <input
              type="text"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              placeholder={t("consult.grade_ph", "Your current grade")}
              required
            />
          </div>

          <div className="form-group">
            <label>{t("consult.day", "Choose the day")}</label>
            <input type="date" value={selectedDate} onChange={handleDateChange} required />
          </div>

          <div className="form-group">
            <label>{t("consult.time", "Choose preferred time")}</label>
            <select value={selectedTime} onChange={handleTimeChange} required>
              <option value="">
                {t("consult.time_ph", "Select time period, when we will arrange consultation")}
              </option>
              <option value="8:00-10:00">8:00-10:00 (EEST)</option>
              <option value="11:00-12:00">11:00-12:00 (EEST)</option>
              <option value="13:00-14:00">13:00-14:00 (EEST)</option>
              <option value="14:00-15:00">14:00-15:00 (EEST)</option>
              <option value="15:00-16:00">15:00-16:00 (EEST)</option>
              <option value="16:00-17:00">16:00-17:00 (EEST)</option>
              <option value="17:00-18:00">17:00-18:00 (EEST)</option>
              <option value="18:00-19:00">18:00-19:00 (EEST)</option>
            </select>
          </div>

          <div className="form-summary">
            <h3>{t("consult.selected_title", "Selected Day and Time:")}</h3>
            <p>
              {selectedDate || t("consult.not_selected", "Not selected")} –{" "}
              {selectedTime || t("consult.not_selected", "Not selected")}
            </p>
          </div>

          <button type="submit" className="submit-button">
            {t("consult.cta", "BOOK YOUR FREE CONSULTATION!")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConsultationForm;
