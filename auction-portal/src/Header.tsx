
interface Props {
    title?: string,
    myLuckyNumber?: number
}

// export function Header(props: {title?: string}) {
export function Header({ title = 'Auction Portal', myLuckyNumber }: Props) {

    return (
        <header className="mb-2 p-5 bg-warning">
            <h1>{title}</h1>
            <h4>{myLuckyNumber}</h4>
        </header>
    )
}




/*
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function HeaderOtherExample(props: Props) {
    // Destukturyzacja dopiero tutaj:
    const { title = 'Auction Portal' } = props;
    return (
        <header className="mb-2 p-5 bg-warning">
            <h1>{title}</h1>
        </header>
    )
}
*/