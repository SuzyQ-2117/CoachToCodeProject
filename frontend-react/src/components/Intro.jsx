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
                <p>There's some basic info about me on this page. My partner & I live in south Wales!</p>
            </div>

            <div className="top-far-left">
                <h4>Front-end Stack</h4>
                <br />
                <p>I built out the front-end of this app using these technologies:</p>
                <br />
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
            </div>

            <div className="top-left">
                <h4>Back-end Stack</h4>
                <br />
                <p>The back-end of this app was built in:</p>
                <br />
                <ul>
                    <li><p>Java</p></li>
                    <li><p>Springboot</p></li>
                    <li><p>Maven</p></li>
                    <li><p>SQL</p></li>
                </ul>
            </div>

            <div className="top-right">
                <h4>Other Tech used</h4>
                <br />
                <p>Not outright required, but here are some of the other things I used to help me in the creation of this project:</p>
                <br />
                <ul>
                    <li><p>Postman</p></li>
                    <li><p>MySQL Workbench</p></li>
                    <li><p>NPM</p></li>
                    <li><p>JS-Confetti</p></li>
                </ul>
            </div>

            <div className="top-far-right">
                <h4>Key challenges</h4>
                <br />
                <p>Some of the things I found particularly challenging when working on this app:</p>
                <br />
                <ul>
                    <li><p>I just started coding and let this project take form as I was going</p></li>
                    <li><p>Easy to keep working on the same thing over & over</p></li>
                    <li><p>Ambitious plans (like the animations)</p></li>
                    <li><p>Troubleshooting retained state</p></li>
                </ul>
            </div>

            <div className="mid-line">
                <p>This was originally going to be a complete copy & paste of the first section so that I could see what the layout looked like, but I decided that would look silly and actually wouldn't give me the look I was trying to visualise - especially as my project will look like this current example layout.</p>
                <br />
                <p>HTML was the first programming language I learned. I began learning HTML way back in 2017 so that I could build a custom Hive page for my department at the time. That was really when I rediscovered my love for the logic that coding embodies. </p>
                <br />
                <p>I've absolutely loved learning everything on my reskil journey so far and can't wait to get started with my new lab!</p>
            </div>

            <div className="bottom-left">
                <h4>Storm</h4>
                <br />
                <p>My partner & I have a German Shepherd called Storm - he is our absolute pride and joy. He's two years old and is still so full of puppy energy!</p>
                <br />
                <p>Storm was born in a litter of 4 on 20th May 2022. His siblings are called Samson, Mable and Nyah! </p>
                <br />
                <p>Storm currently weighs 32.7kgs (which is really small for a GSD).</p>
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
                <p>Self-led study around full-time working and additional, temporary caring responsibilities. Passed all exams first time and completed CeMAP within 5 months.</p>
                <br />
                <p>2021: Business Development Manager</p>
                <p>Supported a patch of c.3200 mortgage brokers spread across the north-west of England and north Wales, helping with BTL Mortgage application queries.</p>
                <br />
                <p>2023: Achieved CeRER</p>
                <p>Self-led study again, fitting in around full-time work. Passed first time after only a few weeks of study.</p>
                <br />
            </div>

            <div className="bottom-right">
                <h4>Outside of work</h4>
                <br />
                <p>Outside of work, Im a serial hobbyist! I love to learn about and try new things.</p>
                <br />
                <p>I love to play video games. Destiny 2 has slipped back into my current retation, but I also enjoy playing Minecraft and Skyrim (literal thousands of hours in Skyrim). I'm a big RPG/open-world explorer but also enjoy the occasional platformer!</p>
                <br />
                <p>I taught myself to crochet and love making little amigurumis (this is a technique where you crochet around in a circle). I've currently got a Bulbasaur on my hook waitinf to be finished!</p>
                <br />
                <p>I taught myself to do gel nails during the pandemic so I'm also the local nail lady!</p>
                <br />
                <p>I have a love/hate relationship with the gym - in that I hate actually going there but love working out once I'm there!</p>
            </div>

        </div>
    )
}