import Image from "next/image";

interface eventCardProps{
    eventName?: string;
    placeholder?: string;
    eventPhoto?: string;
    eventDateTime?: string;
    eventLocation?: string;
}

export default function EventCard({eventName}: eventCardProps){
    return(
        <div className="container w-32 h-32 bg-white">
            <div className="image">
                <p>{eventName}</p>
            </div>
            <div className="info">
                <p>Here's some cool info!</p>
            </div>
        </div>
    )
}
