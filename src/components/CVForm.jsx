export function CVForm({info, handler}) {
  return (
    <div className="cv-form">
      <h1>Create Your Own Personal CV</h1>
      <section>
        <h2>General Information</h2>
        <p>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" value={info.name} onChange={handler}/>
        </p>
        <p>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" value={info.email} onChange={handler}/>
        </p>
        <p>
          <label htmlFor="phone">Phone Number: </label>
          <input type="tel" id="phone" value={info.phone} onChange={handler}/>
        </p>
      </section>
      <section>
        <h2>Educational Experience</h2>
        <p>
          <label htmlFor="school">School Name: </label>
          <input type="text" id="school" value={info.school} onChange={handler}/>
        </p>
        <p>
          <label htmlFor="title">Title of Study: </label>
          <input type="text" id="title" value={info.title} onChange={handler}/>
        </p>
        <p>
          <label htmlFor="studyDate">Date of Study: </label>
          <input type="date" id="studyDate" value={info.studyDate} onChange={handler}/>
          <span>-</span>
          <input type="date" id="studyEndDate" value={info.studyEndDate} onChange={handler}/>
        </p>
      </section>
      <section>
        <h2>Practical Experience</h2>
        <p>
          <label htmlFor="company">Company Name: </label>
          <input type="text" id="company" value={info.company} onChange={handler}/>
        </p>
        <p>
          <label htmlFor="position">Position Title: </label>
          <input type="text" id="position" value={info.position} onChange={handler}/>
        </p>
        <p>
          <label htmlFor="responsibilities">Main Responsibilities: </label>
          <input type="text" id="responsibilities" value={info.responsibilities} onChange={handler}/>
        </p>
        <p>
          <label htmlFor="workDate">Date of Work: </label>
          <input type="date" id="workDate" value={info.workDate} onChange={handler}/>
          <span>-</span>
          <input type="date" id="workEndDate" value={info.workEndDate} onChange={handler}/>
        </p>
      </section>
    </div>
  );
}
