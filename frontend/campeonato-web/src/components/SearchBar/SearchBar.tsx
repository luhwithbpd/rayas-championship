import "./SearchBar.css";

import { Search } from "lucide-react";

interface Props{

    placeholder?:string;

}

export function SearchBar({

    placeholder="Pesquisar..."

}:Props){

    return(

        <div className="search">

            <Search size={18}/>

            <input placeholder={placeholder}/>

        </div>

    );

}