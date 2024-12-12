interface Props {
    counter?: number;
}

export function ItemsInCart({counter = 0}: Props) {

    if(counter === 0){
        return "";
    }


    return (
        <div className="alert alert-primary" role="alert">
            Masz już {counter} elementów w koszyku
        </div>
    );
}
