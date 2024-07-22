import suzy from '../media/suzy.jpg';

export default function Intro() {
    return(
        <div>
            <div className="top-section flex">
                <div className="intro-left">
                    <h1>Hello Internet!</h1>
                    <h2>I'm Suzy Q!</h2>
                    <p>I'm going to write a bunch of stuff in here about who I am and what my experience is.</p>
                    <p>It might be worth outlining a brief summary of my career history as this is for interenal use, but remember this will be public on GitHub</p>
                </div>
                <div className="intro-right">
                    <img src={suzy} alt="A photo of the project creator" className="selfie"/>
                </div>
            </div>
            <div className="bottom-section">

            </div>
        </div>
    )
}