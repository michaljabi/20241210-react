


export function ItemsInCart({counter = 0}: { counter?: number}) {

    if(counter === 0){
        return "";
    }


    return (
        <div className="alert alert-primary" role="alert">
            Masz już {counter} elementów w koszyku
        </div>
    );
}
