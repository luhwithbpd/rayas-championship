import { Header } from "../src/components/Header/Header";
import { Footer } from "../src/components/Footer/Footer";
import { Users } from "lucide-react";
import { MenuCard } from "./components/MenuCard/MenuCard";

export default function Home() {
    return (
        <>
            <Header />

            <main className="container">
                {/* Conteúdo */}
            </main>

            <MenuCard
                title="Jogos"
                description="Criar e acompanhar"
                icon={<Users size={22} />}
            />
            
            <MenuCard
                title="Torneios"
                description="Gerenciar torneios"
                icon={<Users size={22} />}
            />

            <MenuCard
                title="Times"
                description="Gerencie os times do campeonato"
                icon={<Users size={22} />}
            />

            <MenuCard
                title="Anotar"
                description="Iniciar uma partida"
                icon={<Users size={22} />}
            />

            <Footer />
        </>
    );
}