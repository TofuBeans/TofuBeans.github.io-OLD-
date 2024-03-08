import Twemoji from "../Twemoji"
import { Link, useMatch, useResolvedPath } from "react-router-dom"

// User's birthday (YYYY-MM-DD format)
const birthday = '2010-05-02';

// User's timezone
const timezone = 'Europe/London';

// Function to calculate age based on birthday
function calculateAge(birthday) {
    const today = new Date();
    const birthDate = new Date(birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function getCurrentDateTime(timezone) {
  const options = {
      timeZone: timezone,
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
  };
  return new Intl.DateTimeFormat('en-US', options).format(new Date());
}

export default function Pronouns() {
  return (
    <>
      <div className="pronouns-container">
        <Link to={"/"} className="special-button" id="backhome">go back to home</Link>
        <div className="separator"></div>
        <div className="profile-header">
          <img className="profile-picture" src="pfp.png" alt="Profile Picture"></img>
          <h1>@JunieUnbound</h1>
        </div>
        <div className="flag m-5">
          <img src="trans-flag.png"></img>
          <span>Trans</span>
        </div>
        <div className="flag">
          <img src="lesbian-flag.png"></img>
          <span>Lesbian</span>
        </div>
        <div className="bio">
          <p>
            <br></br>
            <strong>TL;DR;</strong>
            <br></br>
            - fem & romantic terms are very good
            <br></br>
            - masc very bad
            <br></br>
            - idm the rest
          </p>
        </div>
        <div className="age">
          <p><strong>Age: </strong>{"I am currently " + calculateAge(birthday) + " years old."}</p>
        </div>
        <div className="timezone">
          <p><strong>Date & Time: </strong>In my timezone (Europe/London), it is currently <strong>{getCurrentDateTime(timezone)}</strong></p>
        </div>
        <div className="words">
          <div className="separator"></div>
          <div className="group">
            <div className="columns">
              <div className="column">

                <h3 className="group-heading">Names</h3>

                <p><span className="material-icons good" title="preferred">favorite</span>
                <span className="good" title="preferred">Junie</span></p>

                <p><span className="material-icons okay" title="okay">thumb_up</span>
                <span className="okay" title="okay">Juniper</span></p>

                <p><span className="material-icons kys" title="kys">do_not_disturb_on</span>
                <span className="kys" title="kys">[DEADNAME]</span></p>

              </div>
              <div className="column">

                <h3 className="group-heading">Pronouns</h3>

                <p><span className="material-icons good" title="preferred">favorite</span>
                <span className="good" title="preferred">She/Her</span></p>

                <p><span className="material-icons okay" title="okay">thumb_up</span>
                <span className="okay" title="okay">They/Them</span></p>

                <p><span className="material-icons kys" title="kys">do_not_disturb_on</span>
                <span className="kys" title="kys">He/Him</span></p>

              </div>
              <div className="column">

                <h3 className="group-heading">Titles</h3>

                <p><span className="material-icons good" title="preferred">favorite</span>
                <span className="good" title="preferred">Mrs</span></p>

                <p><span className="material-icons kys" title="kys">do_not_disturb_on</span>
                <span className="kys" title="kys">Mr</span></p>

              </div>
            </div>
          </div>
          <div className="separator"></div>
          <div className="group">
            <div className="columns">
              <div className="column">

                <h3 className="group-heading">Compliments</h3>

                <p><span className="material-icons good" title="preferred">favorite</span>
                <span className="good" title="preferred">pretty</span></p>

                <p><span className="material-icons good" title="preferred">favorite</span>
                <span className="good" title="preferred">hot</span></p>

                <p><span className="material-icons okay" title="okay">thumb_up</span>
                <span className="okay" title="okay">cute</span></p>

                <p><span className="material-icons kys" title="kys">do_not_disturb_on</span>
                <span className="kys" title="okay">handsome</span></p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}