import { Link, useLocation } from "react-router";

export function NotFoundPage() {

    // hooks
    const {pathname} = useLocation();

    //console.log(location)

    return (
        <>
            <h2> Strona nie odnaleziona 😢 </h2>
            <div className="alert alert-warning">
                Nie znam strony <code>{pathname}</code>
                <Link to="/" className="btn btn-outline-primary mx-3"> Powrót do 🏠 ? </Link>
            </div>
        </>
    );
}
