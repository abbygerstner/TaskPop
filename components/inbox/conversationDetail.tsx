'use client';

import CustomButton from "../forms/CustomButton"

export default function ConversationDetail(){
    return(
        <div>
            <div className="max-h-[400px] overflow-auto flex flex-col space-y-4">
                <div className="w-[80%] py-4 px-6 rounded-xl bg-light-navy">
                    <p className="font-bold text-gray-500">John Doe</p>

                    <p>Message</p>
                </div>

                <div className="w-[80%] ml-[20%] py-4 px-6 rounded-xl bg-dark-teal">
                    <p className="font-bold text-gray-500">TaskPop Official</p>

                    <p>Hello World!</p>
                </div>
            </div>
            
            <div className="mt-4 py-4 px-6 flex border-teal rounded-xl">
                <input
                    type="text"
                    placeholder="Type your message..."
                    className="w-full p-2 bg-light-navy rounded-xl"
                />

                <CustomButton 
                    label='Send'
                    onClick={() => console.log('Clicked')}
                    className="w-[100px]"
                />
            </div>
        </div>
    )
}