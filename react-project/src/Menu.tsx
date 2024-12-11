import { NavLink } from "react-router";
import { ReactNode } from "react";

function ActiveLinkLi({to, children}: {to: string, children: ReactNode}) {
    return (
        <li>
            <NavLink to={to} className={({isActive}) => isActive ? "is-active" : ""}>
                {children}
            </NavLink>
        </li>
    )
}

export function Menu() {
    return (
        <nav className="menu column">
            <p className="menu-label">Część A - <strong>Podstawy</strong></p>
            <ul className="menu-list">
                <ActiveLinkLi to="/sample"> Przykład komponentu </ActiveLinkLi>
                <ActiveLinkLi to="/using-jsx"> Korzystanie z JSX </ActiveLinkLi>
                <ActiveLinkLi to="/hermetic-style"> Hermetyczność stylu </ActiveLinkLi>
                <ActiveLinkLi to="/composition-and-props"> Komponowanie i propsy </ActiveLinkLi>
                <ActiveLinkLi to="/render-data-collection"> Renderowanie kolekcji danych </ActiveLinkLi>
            </ul>
            <p className="menu-label">Część E - <strong>Zarządzanie stanem</strong></p>
            <ul className="menu-list">
                <ActiveLinkLi to="/redux"> Redux </ActiveLinkLi>
            </ul>
        </nav>
    );
}
