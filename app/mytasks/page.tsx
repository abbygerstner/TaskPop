import NavBar from "@/components/navbar/navBar";
import Image from "next/image";

export default function MyTasksPage() {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6 bg-navy">
            <NavBar />
            <h1 className="my-6 mb-6 text-2xl">My tasks</h1>
            <div className="m-4">
                <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <img className="rounded-lg object-cover h-full w-full hover:scale-110 transition" src="/taskPic.jpg" alt="Task Picture"/>
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-3 space-y-2">
                        <h2 className="mb-4 text-xl">Task Name</h2>

                        <p className="mb-2"><strong>Check in date: </strong>10/24/2024</p>
                        <p className="mb-2"><strong>Check out date: </strong>10/24/2024</p>

                        <p className="mb-2"><strong>Hours worked: </strong>5</p>
                        <p className="mb-2"><strong>Total: </strong>$100</p>


                        <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-teal text-white rounded-xl">Go to task</div>

                    </div>
                </div>
                <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <img className="rounded-lg object-cover h-full w-full hover:scale-110 transition" src="/taskPic.jpg" alt="Task Picture"/>
                        </div>
                    </div>

                    <div className="col-span-3 space-y-2">
                        <h2 className="mb-4 text-xl">Task Name</h2>

                        <p className="mb-2"><strong>Check in date: </strong>10/24/2024</p>
                        <p className="mb-2"><strong>Check out date: </strong>10/24/2024</p>

                        <p className="mb-2"><strong>Hours worked: </strong>5</p>
                        <p className="mb-2"><strong>Total: </strong>$100</p>

                        <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-teal text-white rounded-xl">Go to task</div>
                    </div>
                </div>
            </div>
        </main>
    )
}

