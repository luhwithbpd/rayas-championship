import "./Select.css";

interface Props{

    label:string;

    children:React.ReactNode;

}

export function Select({label,children}:Props){

    return(

        <div className="select-group">

            <label>{label}</label>

            <select>

                {children}

            </select>

        </div>

    );

}