import NavBar from "@/components/navbar/navBar";
import ConversationDetail from "@/components/inbox/conversationDetail";

export default function ChatPage() {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6 bg-navy">
            <NavBar />
            <ConversationDetail />
        </main>
    )
}
