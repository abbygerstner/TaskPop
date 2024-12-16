import NavBar from "@/components/navbar/navBar";
import Image from "next/image";
import TaskList from "@/components/Tasks/TaskList";

export default function ManagerTasksPage() {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6 bg-navy">
            <NavBar />
            <h1 className="my-6 mb-6 text-2xl">Manage tasks</h1>

            <div className="col-span-1 md:col-span-3 pl-0 pr-4 md:pl-6">
                    <TaskList />
            </div>
        </main>
    )
}