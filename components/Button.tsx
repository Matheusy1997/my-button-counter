interface ButtonProps {
    type?: "add" | "subtract" | "reset";
    onClick: () => void;
    children: React.ReactNode;
}

export default function Button({ type = "add", onClick, children }: ButtonProps) {
    const styleButton = {
        add: "bg-green-500 text-white hover:bg-green-600",
        subtract: "bg-red-500 text-white hover:bg-red-600",
        reset: "bg-gray-500 text-white hover:bg-gray-600",
    }
    return (
        <button className={`px-4 py-2 w-30  m-1.5 rounded ${styleButton[type]}`} onClick={onClick}>
            {children}
        </button>
    );
}