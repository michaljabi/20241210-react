import {AdvancedNotification} from "./components/AdvancedNotification.tsx";
import {Notification} from "./components/Notification.tsx";

export function CompositionAndProps() {

    const logic = 'Przekazywanie props z logiki';

    return (
        <>
            <h2>Kompozycja i przekazywanie props</h2>
            <h3 className="subtitle is-4 bold subtitle is-family-monospace">
                CompositionAndProps.tsx
            </h3>
            <div className="box">
                <Notification text="Przekazywanie props" type="is-success" />
                <Notification text={logic} />
                <AdvancedNotification>
                    <div>Przykład komponowania...</div>
                </AdvancedNotification>
                <AdvancedNotification type="is-warning">
                    Przykład jednego komponentu / <code>JSX</code> w drugim
                </AdvancedNotification>
            </div>
        </>
    );
}
