import {Link} from "react-router";

export function NotFoundPage() {
    return (
        <>
            <h2> Strona nie odnaleziona 😢 </h2>
            <div className="alert alert-warning">
                Nie znam strony <code>/unknown</code>
                <Link to="/" className="btn btn-outline-primary mx-3"> Powrót do 🏠 ? </Link>
            </div>
        </>
    );
}
