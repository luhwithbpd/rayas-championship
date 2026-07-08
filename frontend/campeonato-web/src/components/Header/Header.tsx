import "./header.css";

export function Header() {
    return (
        <header className="header">
            <div className="logo">
                <h3>RAYAS CHAMPIONSHIP</h3>
                <span>Registro de Eventos</span>
            </div>

            <nav>
                <button>Entrar</button>
            </nav>
        </header>
    );
}