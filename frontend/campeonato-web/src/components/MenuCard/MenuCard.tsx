import "./MenuCard.css";
import { useNavigate } from "react-router-dom";

type Props = {
    title: string;
    description: string;
    icon: React.ReactNode;
    color?: "blue" | "yellow";
    path: string;
};

export function MenuCard({
    title,
    description,
    icon,
    color,
    path,
}: Props) {

    const navigate = useNavigate();

    return (
        <div
            className={`menu-card ${color ?? ""}`}
            onClick={() => navigate(path)}
        >
            {icon}

            <h3>{title}</h3>

            <p>{description}</p>
        </div>
    );
}