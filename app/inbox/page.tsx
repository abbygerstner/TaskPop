import NavBar from "@/components/navbar/navBar";
import Conversation from "@/components/inbox/conversation";

export default function InboxPage() {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6 bg-navy space-y-4">
            <NavBar />
            <h1 className="my-6 mb-6 text-2xl">Inbox</h1>
            <Conversation />
            <Conversation />
            <Conversation />
        </main>
    )
}