import "./Modal.css";

interface Props{

    open:boolean;

    title:string;

    children:React.ReactNode;

    onClose:()=>void;

}

export function Modal({

    open,

    title,

    children,

    onClose

}:Props){

    if(!open) return null;

    return(

        <div className="modal-overlay">

            <div className="modal">

                <div className="modal-header">

                    <h2>{title}</h2>

                    <button onClick={onClose}>✕</button>

                </div>

                <div className="modal-body">

                    {children}

                </div>

            </div>

        </div>

    );

}