import Image from "next/image";

export default function NavBar(){
    return(
    <nav className="bg-navy sticky top-0 flex justify-between font-bold text-white w-full px-5 items-center">
    <a href="/">
    <Image src="/TaskPopLogo.png" alt="Logo" className="logo" width="100" height="100">
    </Image>
    </a>
    <div className = "text-md flex gap-20">
        <a href="/" className='navLink navLink1'>Home</a>
        <a href="/chat">Chat</a>
        <a href="/about" className='navLink navLink2'>About</a>
        <a href="/contact" className='navLink navLink3'>Contact</a>
        <a href="/profile" className="navLink navLink4">Profile</a>
        <a href="/login">Login</a>
    </div>
    </nav>
    )
}