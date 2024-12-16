import NavBar from "@/components/navbar/navBar";
import ProfileIcon from "@/components/navbar/ProfileIcon";
import ContactButton from "@/components/ContactButton";
import TaskList from "@/components/Tasks/TaskList";

export default function ManagerDetailPage() {
    return (
        <main className="max-w-[1500px] mx-auto pb-6">
            <NavBar />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
                <aside className="col-span-1 mb-4">
                    <div className="flex flex-col items-center rounded-xl border-4 border-light-navy shadow-xl">
                        <ProfileIcon />
                        <h1 className="mt-6 text-2xl">Manager Name</h1>
                        <ContactButton />
                    </div>
                    
                </aside>

                <div className="col-span-1 md:col-span-3 pl-0 pr-4 md:pl-6">
                    <TaskList />
                </div>
            </div>

        </main>
    )
}