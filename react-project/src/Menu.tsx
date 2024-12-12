import { NavLink } from "react-router";
import { ReactNode } from "react";

function ActiveLinkLi({ to, children }: { to: string; children: ReactNode }) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? "is-active" : "")}
      >
        {children}
      </NavLink>
    </li>
  );
}

export function Menu() {
  return (
    <nav className="menu column">
      <p className="menu-label">
        Część A - <strong>Podstawy</strong>
      </p>
      <ul className="menu-list">
        <ActiveLinkLi to="/sample"> Przykład komponentu </ActiveLinkLi>
        <ActiveLinkLi to="/using-jsx"> Korzystanie z JSX </ActiveLinkLi>
        <ActiveLinkLi to="/hermetic-style"> Hermetyczność stylu </ActiveLinkLi>
        <ActiveLinkLi to="/composition-and-props">
          {" "}
          Komponowanie i propsy{" "}
        </ActiveLinkLi>
        <ActiveLinkLi to="/render-data-collection">
          {" "}
          Renderowanie kolekcji danych{" "}
        </ActiveLinkLi>
      </ul>
      <p className="menu-label">
        Część B - <strong>Komunikacja</strong>
      </p>
      <ul className="menu-list">
        <ActiveLinkLi to="/parent-to-child">
          {" "}
          Relacja parent - child{" "}
        </ActiveLinkLi>
        <ActiveLinkLi to="/child-to-parent">
          {" "}
          Relacja child - parent{" "}
        </ActiveLinkLi>
        <ActiveLinkLi to="/long-distance">
          {" "}
          Context: daleka odległość...{" "}
        </ActiveLinkLi>
      </ul>
      <p className="menu-label">
        Część C - <strong>Stan danych i hooks</strong>
      </p>
      <ul className="menu-list">
        <ActiveLinkLi to="/use-state"> useState </ActiveLinkLi>
        <ActiveLinkLi to="/use-effect"> useEffect </ActiveLinkLi>
        <ActiveLinkLi to="/use-ref"> useRef </ActiveLinkLi>
      </ul>
      <p className="menu-label">
        Część D - <strong>Formularze</strong>
      </p>
      <ul className="menu-list">
        <ActiveLinkLi to="/input-sample">
          {" "}
          Przykładowy input (kontrolowany){" "}
        </ActiveLinkLi>
        <ActiveLinkLi to="/formik"> Formik </ActiveLinkLi>
        <ActiveLinkLi to="/react-hook-form"> ReactHook Form </ActiveLinkLi>
      </ul>
      <p className="menu-label">
        Część E - <strong>Zarządzanie stanem</strong>
      </p>
      <ul className="menu-list">
        <ActiveLinkLi to="/redux"> Redux </ActiveLinkLi>
      </ul>
      <p className="menu-label">
        Część F - <strong>Testowanie komponentu</strong>
      </p>
      <ul className="menu-list">
        <ActiveLinkLi to="/test-preview"> Podgląd komponentu </ActiveLinkLi>
      </ul>
    </nav>
  );
}
