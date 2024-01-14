'use client'
import Image from "next/image"

const Header4 = () => {
  return (
    <div className="flex my-14 border border-gray-300 px-5">
        <div className="flex items-center">
            <Image 
            src={'/fire.jpg'}
            alt="fire"
            width={200}
            height={200}
            className="w-32 h-32 rounded-full mr-5"
            />
            <div className="text-xl">
                <p className="font-bold">
                    Get access to exclusive deals
                </p>
                <p className="text-gray-400">
                    Only the best deals reach your inbox
                </p>
            </div>
        </div>
        <div className="flex items-center mx-20">
            <input 
            type="email" 
            className="px-6 py-3 rounded-lg mr-5 w-80 h-16 outline-none border border-gray-300" 
            placeholder="e.g. john@gmail.com"
            />
            <button 
            type="submit" 
            className=" w-48 rounded-lg h-14 bg-[#EE2A24] text-xl text-white cursor-pointer "
            >
                Notify Me
            </button>
        </div>
    </div>
  )
}

export default Header4