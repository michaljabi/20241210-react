export function Sample() {
    return (
        <>
            <h2>Oto przykładowy komponent</h2>
            <h3 className="subtitle bold is-family-monospace">Sample.tsx</h3>
            <div>
                Komponent w nowych aplikacjach React będzie zawsze funkcją
                <hr />
                Zasadniczo posiada on 2 elementy:
                <ul>
                    <li>
                        występujący po <code>return</code> kod <code>JSX</code>
                    </li>
                    <li>
                        Logikę w ciele funkcji (komponentu)
                    </li>
                </ul>
                <blockquote>
                    Komponenty będą posiadać oddzielne pliki <code>.jsx</code> lub <code>.tsx</code> podkreślające zawartość
                    <code>JSX</code>. Dodatkowo ZAWSZE ich nazwy funkcji muszą zaczynać się Wielką Literą.
                </blockquote>
            </div>
        </>
    )
}