import Image from "next/image";
import ProfileIcon from "@/components/ProfileIcon";
/* import dropdownBar from "@/components/dropdown"; */

export default function NavBar(){
    return(
    <nav className="bg-navy sticky top-0 flex justify-between font-bold text-white w-full px-5 items-center">
        <a href="/">
        <Image src="/TaskPopLogo.png" alt="Logo" className="logo" width="120" height="120"/>
        </a>
    <div className = "text-md flex gap-20">
        <a href="/chat">Chat</a>
        <a href="/about" className='navLink navLink2'>About</a>
        <a href="/contact" className='navLink navLink3'>Contact</a>
        <div className="dropdown show">
            <button className="btn dropdown-toggle" style={{border: "transparent"}}
                    id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                <ProfileIcon/>
            </button>
            <div className="dropdown-menu">                
                <li><a className="dropdown-item" href="/profile">My Profile</a></li>
                <li><a className="dropdown-item" href="/">My Dashboard </a></li>
                <hr class="dropdown-divider"/>
                <li><a className="dropdown-item" href="/login">Login</a></li>
                <li><a className="dropdown-item" href="/login">Signout</a></li>
            </div>
        </div>
    </div>
    </nav>
    )
}
