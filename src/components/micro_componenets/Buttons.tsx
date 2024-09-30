import React from "react";

function DefaultButton({buttonName}: { buttonName: string }) {
    return (
        <button className='h-9 w-[100%] bg-[#5C469C] hover:bg-[#452E8B] text-white rounded'>
            {buttonName}
        </button>
    )
}

export {DefaultButton}