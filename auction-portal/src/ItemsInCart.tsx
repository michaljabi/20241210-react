interface Props {
    counter?: number;
}

// counter = 0 to zapis, w którym mówię:
// jeśli nikt nie podał argumentu z counter (innymi słowy counter to undefinded) to ustaw go na 0
export function ItemsInCart({counter}: Props) {

    // if(counter === 0 || counter === undefined){
    if(!counter){
        return "";
    }


    return (
        <div className="alert alert-primary" role="alert">
            Masz już {counter} elementów w koszyku
        </div>
    );
}
