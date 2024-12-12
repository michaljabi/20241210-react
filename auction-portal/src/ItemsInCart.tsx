interface Props {
    counter?: number;
}

// counter = 0 to zapis, w którym mówię:
// jeśli nikt nie podał argumentu z counter (innymi słowy counter to undefinded) to ustaw go na 0
export function ItemsInCart({counter}: Props) {

    // if(counter === 0 || counter === undefined){
   /* if (!counter) {
        return <div className="alert alert-primary" role="alert">
            Nie masz elementów w koszyku, postaraj się coś wybrać
        </div>;
    }*/

    const computedText = !counter ?
        'Nie masz elementów w koszyku, postaraj się coś wybrać'
        :
        `Masz już ${counter} elementów w koszyku`

    return (<div className="alert alert-primary" role="alert">
        {computedText}
    </div>)

    /*return (
        <div className="alert alert-primary" role="alert">
            Masz już {counter} elementów w koszyku
        </div>
    );*/
}
