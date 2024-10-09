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
        <div className="w-72 h-auto bg-gray-200 border border-gray-300 rounded-lg p-5 m-4">
            <div className="image flex place-content-center">
                <div className="w-56 h-56">
                    <img className="w-full rounded-lg" src="https://picsum.photos/50/50" alt="Event Image"/>
                </div>
            </div>
            <div className="info mt-2 pl-3">
                <p className="font-bold text-teal">{eventName}</p>
                <p>Here's some cool info!</p>
            </div>
        </div>
    )
}
