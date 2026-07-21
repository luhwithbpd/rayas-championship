import { MainLayout } from "../../components/Layout/MainLayout";
import { Button } from "../../components/Button/Button";
import { SearchBar } from "../../components/SearchBar/SearchBar";

export default function Jogos() {
    return (
        <MainLayout>

            <h1>Jogos</h1>

            <SearchBar placeholder="Pesquisar jogos..." />

            <Button>
                + Novo jogo
            </Button>

        </MainLayout>
    );
}