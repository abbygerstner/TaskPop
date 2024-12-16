'use client';

import { useState } from "react";
import ProfileIcon from "./ProfileIcon";


const UserNav = () => {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <div className="p-2 relative inline-block">
            <button className="flex items-center cursor-pointer">
                <ProfileIcon/>
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>

                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            </button>

            {isOpen && (
                <div className="w-[220px] absolute top-[60] border rounded-xl shadow-md flex flex-col cursor-pointer">
                    <p>asdf</p>
                    <p>asdf</p>
                </div>
            )}
        </div>
    )
}

export default UserNav;