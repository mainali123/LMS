import React from "react";

function DefaultButton({buttonName}: { buttonName: string }) {
    return (
        <button className='h-9 w-[100%] bg-[#5C469C] hover:bg-[#452E8B] text-white rounded'>
            {buttonName}
        </button>
    )
}

function SocialLogin({imageSrc, name}: {imageSrc: string, name: string}) {
    return (
        <button className='flex flex-row h-9 w-[100%] bg-white border-2 text-black font-semibold rounded justify-center'>
            <img src={imageSrc} height={`30px`} width={`30px`} className={`pr-2`}/>
            <p className={`pt-0.5`}>{name}</p>
        </button>
    )
}

export {DefaultButton, SocialLogin}