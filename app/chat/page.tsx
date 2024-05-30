import Image from "next/image";
import NavBar from "@/components/navBar";
/* https://flowbite.com/docs/components/chat-bubble/ */
/* https://tailwindflex.com/@manon-daniel/chat-template */

export default function Chat() {
    return (
        <div className="wholeWebsite bg-fixed bg-[url('/bckg.jpg')]">
        <NavBar />
        <div className="h-4/5 w-4/5 flex flex-col bg-navy px-12 m-auto mt-6">
    <div className="bg-gray-200 flex-1 overflow-y-scroll">
        <div className="px-12 py-6">
            <div className="flex items-center mb-2">
                <img className="w-8 h-8 rounded-full mr-2" src="https://picsum.photos/50/50" alt="User Avatar"/>
                <div className="font-medium">John Doe</div>
            </div>
            <div className="bg-white rounded-lg p-2 shadow mb-2 max-w-sm">
                Hi, how can I help you?
            </div>
            <div className="flex items-center justify-end">
                <div className="bg-blue-500 text-white rounded-lg p-2 shadow mr-2 max-w-sm">
                    Sure, I can help with that.
                </div>
                <img className="w-8 h-8 rounded-full" src="https://picsum.photos/50/50" alt="User Avatar"/>
            </div>
        </div>
    </div>
    <div className="bg-gray-100 pb-4 py-2 pt-48">
        <div className="flex items-center">
            <input className="w-full border rounded-full py-2 px-4 mr-2" type="text" placeholder="Type your message..."/>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full">
        Send
      </button>
        </div>
    </div>
</div>
<div className="spaceholder h-screen"></div>

</div>
    )
}