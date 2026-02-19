import '../styles/CVResult.css'
import date from '../assets/date.svg'

export function CVResult({info}) {
  return (
    <div className="cv-result">
      <h1>{info.name.length > 0 ? info.name + '\'s' : ''} CV</h1>
      <h2>Educations</h2>
      <h3>{info.school} - {info.title}</h3>
      <h3 className='date'><img src={date} alt="" />{info.studyDate} - {info.studyEndDate}</h3>

      <h2>Experience</h2>
      <h3>Previously worked on {info.company}, as a {info.position}</h3>
      <h3 className='date'><img src={date} alt="" />{info.workDate} - {info.workEndDate}</h3>
      <h3>{info.responsibilities}</h3>


      <div className="footer">
        <span>{info.email},</span> <span>{info.phone}</span>
      </div>
    </div>
  );
}
