import "./MenuCard.css";

type Props = {

    title: string;
    description: string;
    icon: React.ReactNode;
    color?: "blue" | "yellow";

};

export function MenuCard({
    title,
    description,
    icon,
    color
}: Props) {

    return (

        <div className={`menu-card ${color}`}>

            {icon}

            <h3>{title}</h3>

            <p>{description}</p>

        </div>

    );

}