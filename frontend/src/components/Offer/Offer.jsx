import React, { useState } from 'react';
import './Offer.css';

const ServiceBlock = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="service-block">
      <div className="service-header" onClick={toggleOpen}>
        <h2>{title}</h2>
        <span className="arrow">{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
        <div className="service-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

const Offer = () => {
  return (
    <div className="offer">
      <div className="number-name">
        <h1>Services</h1>
        <p>Here you can find all services that we offer and their description:</p>
      </div>
      <div className="services1">
      <ServiceBlock
        title="University Match"
        content="The U-Focus team will create a personalized list of 8-10 universities based on the student’s preferences, academic performance, and extracurricular achievements. The list will include 'reach,' target, and safety options. To get started, we will conduct a 30-minute Zoom interview and send out a questionnaire, based on which we will analyze the student’s profile. After that, we will send the results and recommendations via email and discuss them in 1-3 online meetings. If the student is not satisfied with the options provided, we will arrange a follow-up meeting to make substitutions."
      />
      <ServiceBlock
        title="Admissions Strategy Planning"
        content="After selecting suitable universities, we will dive deep into admission process schedules and create personalized timelines, including test preparations, essay writing deadlines, the scholarship application process, standardized test application and preparation, and every required condition. We will conduct online meetings, send reminders, and discuss every step of the application process. With this service, students will never miss a deadline and will perform up to their potential. This service is provided by conducting an initial Zoom meeting to understand the student’s needs. We will provide a timeline with suggestions, addressing each aspect of the application. U-Focus will stay in touch during the whole process, initiating Zoom meetings every two weeks or once a month, depending on the student’s preferences, and sending reminders about important deadlines."
      />
      <ServiceBlock
        title="College Essay Refinement"
        content="This service encompasses assistance with college essays, supplemental essays, and personal statement development. The U-Focus team will guide students through brainstorming, drafting, editing, and evaluating each essay required by their target institutions.
        This service is provided by conducting an initial Zoom meeting, where the student, with the help of our experts, decides on the topic of their essay using idea-mapping and brainstorming techniques.
        The student then proceeds to work on the essay, with weekly Zoom meetings to monitor progress, make suggestions, and propose improvements. When the essay is finished, it is sent to the editor, who makes the final retouches.
        The process takes about 4 weeks, but it is possible to shorten it. The services provided depend on the type of essay required."
      />
      <ServiceBlock
        title="Letters of Recommendation Development"
        content="We can guide students on choosing recommenders and strategies for approaching and soliciting recommendations. In instances where recommenders are open to feedback, we provide high-level guidance to students and/or directly to the recommenders.
        This service is provided during 2-3 Zoom meetings, where the student describes available resources."
      />
      <ServiceBlock
        title="Resume Review and Guidance"
        content="Our team will review every aspect of the student’s resume and develop a plan to strengthen their profile. We determine the student’s unique application angle and discuss the available resources to develop it further. Academic performance will be analyzed, and the team will make tutoring suggestions as well as draft a personalized study plan.
        This service is provided by sending out a lengthy questionnaire and conducting a Zoom meeting to understand the unique aspects of the applicant’s personality. We then create a list of suggestions and discuss them in a Zoom meeting. Each month, we monitor the student’s progress and suggest improvements."
      />
      <ServiceBlock
        title="Volunteering Experience Counseling"
        content="Volunteering is an excellent addition to any application. With the help of our team, students will receive guidance on how to become exceptional volunteers. We will provide a list of available volunteering resources, and consult on starting their own volunteering organization, volunteering abroad, and Erasmus+ projects they can join. This will be done through online meetings and email follow-ups. For this service, the support of our team is not limited, ensuring that students are ready to achieve outstanding accomplishments.
        This service is provided by an initial Zoom meeting to map out the action plan and create a volunteering strategy, where our team, using available resources, creates a list of activities and opportunities for the student to engage in. This includes volunteering abroad, community programs, and many others."
      />
      <ServiceBlock
        title="Interview Preparation"
        content="Performing well in admissions interviews is a crucial step on the way to getting accepted to the dream university. With the help of our team, students will have all the key resources, such as practice, guidance, tips, and “Blind Interviews,” to perform their best on the day of the actual interview.
        This service is provided by conducting a preparatory Zoom mock interview, 2 Zoom meetings, and a “Blind” interview, where the member of the U-Focus team does not have access to any prior history or details of the client, so the expert can give impartial feedback to create a list of suggestions and an improvement strategy."
      />
      <ServiceBlock
        title="Entrance Exam Preparation"
        content="During two months, the U-Focus team will help students prepare for entrance examinations. We will conduct mock exams based on actual written tests, analyze the results, and provide tutoring lessons to strengthen students’ knowledge of required topics.
        This service is provided by conducting a mock exam, analyzing the results, conducting 4-6 Zoom tutoring lessons depending on the need, and a final mock examination with an additional Zoom meeting."
      />
      <ServiceBlock
        title="Tutoring Services"
        content="The U-Focus team members are experienced tutors and are ready to help prepare for school, State, or any other examinations. Each lesson’s duration is 60 minutes.
        Subjects: Mathematics (English, Russian, Latvian); Physics (Russian, Latvian); Chemistry (Latvian, Russian); English (English, Russian, Latvian); Russian (Latvian, English); Economics (Latvian, English).
        The lessons are conducted online using the Zoom platform."
      />
      <ServiceBlock
        title="Application Review"
        content="This service includes final reviews of each of the student’s applications. We value our future students’ privacy, so these reviews will be done on a shared screen with students in control, to ensure that privacy concerns are strictly complied with.
        This service is provided during 1-3 Zoom meetings."
      />
      <ServiceBlock
        title="Moving Abroad Services (Pre-Departure Guidance, Visa Application Help, Locating an Apartment)"
        content="This service is crafted for students who are already admitted to an institution and are preparing to embark on the journey of a lifetime. We offer help with finding a place to live within the student’s budget, assisting with visa procedures (if necessary), finding the best airfare options, and addressing any additional concerns related to moving abroad.
        This service is provided by conducting the necessary number of Zoom meetings and email support."
      />
    </div>
    </div>
  );
};

export default Offer;
