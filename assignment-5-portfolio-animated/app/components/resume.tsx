import Image from 'next/image'
import React from 'react'
import CV from "@/app/resume.png"

export default function Resume() {
    return (
        <div>
            <Image className=" " src={CV} alt="img" />
        </div>
    )
}
