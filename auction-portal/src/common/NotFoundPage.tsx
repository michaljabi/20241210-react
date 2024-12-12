import { Link, useLocation, useNavigate } from "react-router";

export function NotFoundPage() {

    // hooks
    const {pathname} = useLocation();
    const navigate = useNavigate();

    //console.log(location)

    return (
        <>
            <h2> Strona nie odnaleziona 😢 </h2>
            <div className="alert alert-warning">
                Nie znam strony <code>{pathname}</code>
                <Link to="/" className="btn btn-outline-primary mx-3"> Powrót do 🏠 ? </Link>
            </div>
            <div>
                <button className="btn btn-secondary" onClick={() => navigate("/")}>
                    Powrót do 🏠 kodem...
                </button>
            </div>
        </>
    );
}
