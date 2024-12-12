//rfc

export function MainMenu() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-3 mb-3">
            <button className="navbar-toggler" type="button">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse show">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/auctions">Aukcje</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/promotions">Promocje</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/advices">Podpowiadamy</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
