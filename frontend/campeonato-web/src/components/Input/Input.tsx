import "./Input.css";

type InputProps = {
    label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ label, ...props }: InputProps) {
    return (
        <div className="input-group">
            <label>{label}</label>

            <input {...props} />
        </div>
    );
}