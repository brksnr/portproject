export function Hero() {
    return (
        
        <div className="hero">
        
        <div className="hero-left">
            <div className="isim">
                <img src="./src/images/line.png"/>
                <a> Berk Şener</a>
            </div>
             <h1>Creative thinker Minimalism lover</h1>
            <p>Hi, I’m Almila. I’m a full-stack developer. 
            If you are looking for a Developer who to craft solid and scalable frontend
            products with great user experiences. Let’s shake hands with me.</p>
            <div className="hero-buttons">
                <button className="hire-button">Hire Me</button>
                <button className="github-button"><i class="fab fa-github"></i>Github</button>
                <button className="linkedin-button"><i class="fa-brands fa-linkedin-in"></i> Linkedin</button>
            </div>
        </div>
        <div className="hero-img">
        <img src="./src/images/almina.png"/>
        </div>
        </div>
           
    )
}