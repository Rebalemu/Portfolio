function HeroIntro(){
    return(
        <div className="introduction">
            <h1>Hello, I'm </h1>
            <div className="name">
                <p>Rebira Alemu</p>
            </div>
            <h4>| Software Engineer</h4>
            <div className="hero-buttons">
                <button className="button" id="button1"> <a href="#portfolio">View Projects</a> </button>
                <button className="button" id="button2"> <a href="#contact">Contact Me</a> </button>
            </div>
        </div>
    );
}
export default HeroIntro;