import { House, Users, CheckCircle2, ClipboardPen } from "lucide-react";
import "./Footer.css";

export function Footer() {
    return (
        <footer className="footer">

            <button className="footer-button">
                <House size={22} />
                <span>Início</span>
            </button>

            <button className="footer-button">
                <Users size={22} />
                <span>Times</span>
            </button>

            <button className="footer-button">
                <CheckCircle2 size={22} />
                <span>Eventos</span>
            </button>

            <button className="footer-button">
                <ClipboardPen size={22} />
                <span>Partidas</span>
            </button>

        </footer>
    );
}