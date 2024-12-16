import Image from "next/image";
import ProfileIcon from "@/components/navbar/ProfileIcon";
import UserNav from "./UserNav";


export default function NavBar(){
    return(
    <nav className="w-full fixed sticky top-0 left-0 py-6 border-b-2 border-b-light-navy z-10 bg-navy flex justify-between font-bold text-white items-center">
        <a href="/">
        <Image src="/TaskPopLogoLong.jpg" alt="Logo" className="logo" width="200" height="100"/>
        </a>
        <div className = "text-md flex gap-20 pr-4">
            <a href="/about" className="navLink navLink2">About</a>
            <a className="dropdown-item" href="/profile">My Profile</a>
            <a className="dropdown-item" href="/">My Dashboard </a>
            <a className="dropdown-item" href="/login">Login</a>
            <UserNav/>
        </div>
    </nav>
    )
}
