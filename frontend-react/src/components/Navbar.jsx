import { NavLink } from "react-router-dom"
import suzy from '../media/suzy.jpg';

export default function Navbar() {
    return (
        <div className="sidebar">
            <img src={suzy} className="selfie" alt="The project creator" />
            <br />
            <h3>Suzy Brown</h3>
            <br />
            <h6>Trainee Software Engineer</h6>
            <br />
            <p className="border-bottom">I'm currently training as part of a career reskill! I'll be working in the Devices Lab</p>
            <ul>
                <li>
                    <NavLink to='/' className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about' className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About Me</NavLink>
                </li>
                <li>
                    <NavLink to='/todo' className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>To-Do App</NavLink>
                </li>
            </ul>
        </div>
    )
}