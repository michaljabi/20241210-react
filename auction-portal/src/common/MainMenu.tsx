//rfc

// TS ftw
import {useState} from "react";
import {NavLink} from "react-router";

interface MenuItem {
    link: string;
    text: string;
}

export function MainMenu() {

    const items: MenuItem[] = [
        {
            link: "/auctions",
            text: "Aukcje"
        },
        {
            link: "/promotions",
            text: "Promocje"
        },
        {
            link: "/advices",
            text: "Podpowiadamy"
        }
    ]

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen)
        console.log('HELLo')
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-3 mb-3">
            {/*<button className="navbar-toggler" type="button" onClick={
                () => {
                    setIsMenuOpen(!isMenuOpen)
                    console.log('HELLo')
                }
            }>*/}
            <button className="navbar-toggler" type="button" onClick={handleClick}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={"collapse navbar-collapse " + (isMenuOpen ? 'show' : '')}>
                <ul className="navbar-nav">
                    {
                        items.map((item) => (
                            <li className="nav-item" key={item.link}>
                                <NavLink className="nav-link" to={item.link}>{item.text}</NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="text-light">
                <NavLink className="btn btn-outline-primary mx-2" to="/add-auction">
                    ➕ Dodaj
                </NavLink>
                <NavLink className="btn btn-outline-secondary" to="/cart">
                    Koszyk
                </NavLink>
            </div>
        </nav>
    );
}
