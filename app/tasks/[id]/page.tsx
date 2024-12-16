import Image from "next/image";
import NavBar from "@/components/navbar/navBar";
import TaskSidebar from "@/components/taskSidebar";

export default function TaskDetailPage() {
    return (
        <main className="max-w-[1500px] mx-auto pb-6">
            <NavBar />
            <div className="mb-4 w-full h-64 overflow-hidden rounded-xl relative">
                <img className="rounded-lg object-cover h-full w-full" src="https://picsum.photos/1500/1500" alt="Event Image"/>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl">Task Name</h1>
                    <span className="mb-6 block text-lg text-gray-600">
                        Description
                    </span>
                    <hr />
                    <div className="py-6 flex items-center space-x-4">
                        <img src="https://picsum.photos/50/50"
                        className="rounded-full"
                        alt="The user name"/>
                        <p><strong>John Doe</strong> is your manager</p>
                    </div>
                    <hr />
                    <p className="mt-6 text-lg">
                        Lorem ipsumalskjdflkjasl;kdjflkjalwjeflkajlf
                    </p>
                </div>
                <div className="col-span-2">
                    <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
                        <h2 className="mb-5 text-2xl">$20 per hour</h2>
                        <div className="mb-6 p-3 border border-gray-400 rounded-xl">
                            <label className="mb-2 block font-bold text-xs">Hours</label>
                            <select className="w-full -ml-1 text-xm rounded-lg">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>

                        <div className="w-full mb-6 py-6 text-center text-navy bg-teal rounded-xl hover:bg-dark-teal cursor-pointer transition">Book</div>
                        
                        <div className="mb-4 flex justify-between align-center">
                            <p>$20 * 4 hours</p>
                            <p>$80</p>
                        </div>

                        <div className="mb-4 flex justify-between align-center">
                            <p>TaskPop fee</p>
                            <p>-$5</p>
                        </div>

                        <hr />

                        <div className="mt-4 flex justify-between align-center font-bold">
                            <p>Total</p>
                            <p>$75</p>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    )
}