import "./Home.css";

import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

import { Users, Trophy, ClipboardList, CalendarDays } from "lucide-react";

import { MenuCard } from "../../components/MenuCard/MenuCard";

export default function Home() {
    return (
        <>
            <Header />

            <main className="container">

                <div className="cards-grid">

                    <MenuCard
                        title="Jogos"
                        description="Criar e acompanhar jogos"
                        icon={<CalendarDays size={30} />}
                        path="/jogos"
                    />

                    <MenuCard
                        title="Torneios"
                        description="Gerenciar torneios"
                        icon={<Trophy size={30} />}
                        path="/torneios"
                    />

                    <MenuCard
                        title="Times"
                        description="Gerenciar equipes"
                        icon={<Users size={30} />}
                        path="/times"
                    />

                    <MenuCard
                        title="Partidas"
                        description="Registrar partidas"
                        icon={<ClipboardList size={30} />}
                        path="/partidas"
                    />

                </div>

            </main>

            <Footer />
        </>
    );
}