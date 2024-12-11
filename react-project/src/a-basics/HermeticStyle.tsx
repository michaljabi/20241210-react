import classes from './HermeticStyle.module.css'

export function HermeticStyle() {
    return (
        <>
            <h2>Hermetyczność styli</h2>
            <h3 className="subtitle is-4 bold subtitle is-family-monospace">
                HermeticStyle.tsx
            </h3>
            <div className="box">
                Osiągamy ją np. stosując tzw. CSS Modules, podejście skonfigurowane automatycznie w Vite.

                <blockquote className="mt-3">
                    @DOC: <a href="https://vite.dev/guide/features#css-modules" target="_blank" rel="noopener noreferrer">
                    https://vite.dev/guide/features#css-modules
                </a>
                </blockquote>
            </div>
            <div>
                <h1 className={classes.h1} > Style w tym </h1>
                <h2 className={classes.h2} > komponencie </h2>
                <h3 className={classes.h3} > Nie obowiązują w innych </h3>
            </div>
        </>
    );
}
