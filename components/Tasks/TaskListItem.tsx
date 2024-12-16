import Image from "next/image";

interface eventCardProps{
    eventName?: string;
    placeholder?: string;
    eventPhoto?: string;
    eventDateTime?: string;
    eventLocation?: string;
}

export default function TaskListItem({eventName}: eventCardProps){
    return(
        <div className="cursor-pointer w-full h-auto border-4 border-light-navy rounded-lg p-5 m-4 hover:scale-105 object-cover transition hover:bg-light-navy">
            <div className="relative overflow-hidden aspect-square rounded-xl">
                <Image 
                    fill
                    src="/taskPic.jpg" 
                    sizes="(max-width:768px) 768px, (max-width: 1200px) 768px, 768px"
                    className="hover:scale-105 object-cover transition h-full w-full" 
                    alt="Task Image"
                    />
            </div>
            <div className="info mt-2 pl-3">
                <p className="font-bold text-teal">{eventName}</p>
                <p>Description</p>
            </div>
        </div>
    )
}
