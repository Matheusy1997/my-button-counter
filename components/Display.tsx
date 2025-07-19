interface DisplayProps {
    count: number
}

export default function Display({ count }: Readonly<{ count: number }>) {
    return (
        <div>
            {count}
        </div>
    );
}