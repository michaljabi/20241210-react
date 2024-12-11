export function Notification({text, type = ''}: {text: string, type?: string}) {
    return (
        <div className={'notification' + ' ' + type}>
            {text}
        </div>
    );
}
