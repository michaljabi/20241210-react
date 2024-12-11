export function UsingJsx() {

    const seeMeText = 'HOVER: Now you see me';

    const handleClick = () => console.log('Można je zapisać w postaci funkcji - callback\'a');

    return (
        <>
            <h2>Korzystanie z JSX</h2>
            <h3 className="subtitle is-4 bold subtitle is-family-monospace">
                UsingJsx.tsx
            </h3>
            <blockquote>
                @DOC: <a className="is-link" href="https://react.dev/learn/writing-markup-with-jsx" target="_blank">
                https://react.dev/learn/writing-markup-with-jsx
            </a>
            </blockquote>
            <div className="box">
                <span>{ 'tutaj ' + 'działa ' + 'JS!'} </span>
                <div>
                    Dowolny <code>innerHTML</code> obliczany z kodu można zapisać tak: { 600 + 20 * 2 }
                </div>
                <div>
                    Można <span title={seeMeText}> modyfikować atrybuty </span>
                </div>
                <div className="notification mt-3" onMouseOver={() => alert('Tak działają eventy')}>
                    Tutaj najedź kursorem
                </div>
                <div className="notification mt-3" onClick={handleClick}>
                    Tutaj kliknij i sprawdź <code>Console</code> w <em>narzędziach Dev</em> przeglądarki
                </div>
                <div style={{ backgroundColor: 'lightblue', padding: '10px', color: 'black' }}>
                    <code>style</code> musi być obiektem i piszemy <code>className</code> zamiast <code>class</code>
                </div>
            </div>
        </>
    )
}