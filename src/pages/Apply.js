import React from "react";

const Apply = () => {
    return (
        <>
            <h1 className="text-primary text-center text-5xl font-semibold p-2 mt-12">Apply now</h1>
            <p className="text-secondary text-center text-xl py-1">Don't be late, apply with us today!</p>
            <div className="flex flex-wrap py-10">
                <form className="w-[764px] apply-form">
                    <div className="flex justify-between py-2">
                        <div className="py-2">
                            <input type="text" placeholder="First Name" className="form-input w-[360px]" />
                        </div>
                        <div className="py-2">
                            <input type="text" placeholder="First Name" className="form-input w-[360px]" />
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <div>
                            <input type="text" placeholder="First Name" className="form-input w-[360px]" />
                        </div>
                        <div>
                            <input type="text" placeholder="First Name" className="form-input w-[360px]" />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Apply;
