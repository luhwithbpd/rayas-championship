import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

import "./MainLayout.css";

interface Props{

    children:React.ReactNode;

}

export function MainLayout({

    children

}:Props){

    return(

        <>

            <Header/>

            <main className="layout">

                {children}

            </main>

            <Footer/>

        </>

    );

}