import Image from "next/image";

interface NextProps {
    width: number;
    height: number;
    className?: string;
};

const Next: React.FC<NextProps> = ({
    width,
    height,
    className
}) => {
    return (
        <Image src="/next.svg" alt="nextjs" width={width} height={height} className={className} />
    );
};

export default Next;