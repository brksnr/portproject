import { useDarkMode } from "../contexts/darkmodecontext"

export function Header() {
    const {darkMode, toggleDarkMode} = useDarkMode();


    return (
    <section className={!darkMode ? "header" : "header"}>
        <div className="container-mode">
            <div className="dark-mode">
                <label className="switch">
                <input type="checkbox" onClick={toggleDarkMode}/>
                <span className="slider round"></span>
                </label>
                {!darkMode ? <p>DARK MODE</p> : <p>LIGHT MODE</p>}
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