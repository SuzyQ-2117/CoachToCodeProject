import htmlLogo from '../media/javascript-39396.png';
import reactLogo from '../media/react-logo.png'
import guardDog from '../media/IMG_4146.JPG';

export default function Intro() {
    return (
        <div className="container coloured-background">

            <div className="top-line">
                <h1>Hello Internet!</h1>
                <h2>I'm Suzy Q.</h2>
                <br />
                <p>I'm an aspiring Software Engineer! After 11 years in customer-facing and B2B roles, I've recently embarked on a complete career changed, facilitated by our wonderful Reskilling Team.</p>
                <br />
                <p>This is some more information about me. I have a 2-year-old black German Shepherd and my partner of 10 years & I live together in sunny South Wales (LOL IT'S NEVER SUNNY HERE).</p>

            </div>

            <div className="top-far-left">
                <h4>Front-end Stack . . . . . . . . . </h4>
                <br /> 
                <img src={htmlLogo} alt="Logos for HTML, CSS and JavaScript" />
                <img src={reactLogo} alt="Logo for React" />
                <p>Bootstrap</p>
            </div>

            <div className="top-left">
                <h4>Back-end Stack . . . . . . . . . .</h4>
                <p>Java</p>
                <p>Springboot</p>
                <p>Maven</p>
            </div>

            <div className="top-right">
                <h4>DevOps . . . . . . . . . . . . . . . . .</h4>
                <p>CI/CD with Jenkins</p>
                <p>Agile Methodology</p>
                <p>Google Cloud Platform (GCP)</p>
            </div>

            <div className="top-far-right">
                <h4>PLACEHOLDER TEXT . . . . . </h4>
                <p>PLACEHOLDER TEXT</p>
                <p>PLACEHOLDER TEXT</p>
                <p>PLACEHOLDER TEXT</p>
            </div>

            <div className="mid-line">
                <p>This was originally going to be a complete copy & paste of the first section so that I could see what the layout looked like, but I decided that would look silly and actually wouldn't give me the look I was trying to visualise - especially as my project will look like this current example layout.</p>
                <br />
                <p>HTML was the first programming language I learned. I began learning HTML way back in 2017 so that I could build a custom Hive page for my department at the time. That was really when I rediscovered my love for the logic that coding embodies. </p>
            </div>

            <div className="bottom-left">
                <h4>Storm</h4>
                <p>My partner & I have a German Shepherd called Storm - he is our absolute pride and joy. He's two years old and is still so full of puppy energy!</p>
                <br />
                <img src={guardDog} alt="Storm takes his Guard Dog Duties seriously" className="storm" />
            </div>

            <div className="bottom-mid">
                <h4>Career Highlights</h4>
                <br />
                <p>2013: Telephone Banking Customer Assistant</p>
                <p>Worked in a variety of teams and on a variety of shift patterns supporting customers with their Telephony queries. This also included facilitating inductions for new staff members as well as a brief period of Team Management.</p>
                <br />
                <p>2017: Achieved A-Level Maths</p>
                <p>Balancing full-time work and a part-time college course was tough, but I managed to complete all parts of my course and achieved a C at A-Level in Mathematics.</p>
                <br />
                <p>2017: MOT Support Specialist</p>
                <p>Moved into the Moments of Truth (MOT) Team providing industry-leading support to customers. I provided support through Bereavement, Financial Difficulties, Cancer Diagnoses, Representative Access requests and specialist needs.</p>
                <br />
                <p>2018: Banking Consultant</p>
                <p>Worked across 5 different branches providing Banking, Savings and Lending support to customers with a variety of needs. </p>
                <br />
                <p>2020: Achieved CeMAP</p>
                <p></p>
                <br />
                <p>2021: Business Development Manager</p>
                <p></p>
                <br />
                <p>2023: Achieved CeRER</p>
                <p></p>
                <br />
            </div>

            <div className="bottom-right">
                
            </div>

        </div>
    )
}