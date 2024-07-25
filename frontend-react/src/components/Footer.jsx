import teams from '../media/teams.png';
import linkedin from '../media/linkedin.png';
import github from '../media/github.png';

export default function Footer() {
    return (
        <div className="footer flex">
            <div className="footer-half left-footer"> 
                <ul>
                    <li>e: suzy.brown@anemailaccount.com</li>
                    <li>m: 07123 456789</li>
                    <li>a: 101 The Street, Anytown AB12 3CD</li>
                </ul>
            </div>
            <div className="footer-half right-footer">
                <ul className="flex">
                    <li><img src={teams} alt=""/></li>
                    <li><a href="https://www.linkedin.com/in/suzy-brown-aa4764251/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt=""/></a></li>
                    <li><a href="https://github.com/SuzyQ-2117" target="_blank" rel="noopener noreferrer"><img src={github} alt=""/></a></li>
                </ul>
            </div>
        </div>
    )
}