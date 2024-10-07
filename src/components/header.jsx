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
    </section>
    )
}