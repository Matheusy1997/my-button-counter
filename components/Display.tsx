interface DisplayProps {
    count: number
}

export default function Display({ count }:  DisplayProps) {
    return (
        <div className={`text-4xl font-bold m-1.5 w-96 text-center ${count < 0 ? "bg-red-500 text-white" : "bg-white text-black"} rounded`}>
            {count}
        </div>
    );
}