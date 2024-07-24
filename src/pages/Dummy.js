import React from "react";
import { Link } from "react-router-dom";

export default function Dummy() {
    return (
        <div className="text-primary text-6xl font-semibold min-h-[700px] flex flex-col justify-center items-center">
            Will Be Ready Soon
            <Link to='/' className='underline text-xl text-black py-10'>Go back</Link>
        </div>
    )
}
