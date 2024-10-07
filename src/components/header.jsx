export function Header() {
    


    return (
    <section className="header">
        <div className="container-mode">
            <div className="dark-mode">
                <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
                </label>
                <p>DARK MODE</p>
            </div>
            <p>|</p>
            <p>TÜRKÇE'YE GEÇ</p>
        </div>
        <div className="container-links">
            <div className="container-name">
             <img src="./src/images/ellipse.png"/>
             <p className="letter">B</p> 
            </div>
            <div className="container-hire">
                <p>Skills</p>   
                <p>Projects</p>   
                <button>Hire me</button>   
            </div>   
        </div>
    </section>
    )
}