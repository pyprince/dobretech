import React, {useState, useRef} from "react";
import countries from "../countries";

const country_names = countries.map(country => country.name);
const genders = ['Male', 'Female'];
const programs = ['Cloud Computing', 'Cybersecurity', 'UB Program'];
const dates = ['October 2024', 'November 2024', 'Feburary 2025'];
const payment_methods = ['Paypal', 'Moon Pay'];

const Apply = () => {
    const [validation, setValidation] = useState({
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
        birth: true,
        address: true,
        gender: true,
        country: true,
        program: true,
        date: true,
        paymentMethod: true
    });

    const setFirstName = (isValid) => {
        validation.firstName = isValid;
        setValidation({...validation});
    }

    const setLastName = (isValid) => {
        validation.lastName = isValid;
        setValidation(validation);
    }

    const setEmail = (isValid) => {
        validation.email = isValid;
        setValidation(validation);
    }

    const setPhone = (isValid) => {
        validation.phone = isValid;
        setValidation(validation);
    }

    const setBirth = (isValid) => {
        validation.birth = isValid;
        setValidation(validation);
    }

    const setAddress = (isValid) => {
        validation.address = isValid;
        setValidation(validation);
    }

    const setGender = (isValid) => {
        validation.gender = isValid;
        setValidation(validation);
    }

    const setCountry = (isValid) => {
        validation.country = isValid;
        setValidation(validation);
    }

    const setProgram = (isValid) => {
        validation.program = isValid;
        setValidation(validation);
    }

    const setDate = (isValid) => {
        validation.date = isValid;
        setValidation(validation);
    }

    const setPaymentMethod = (isValid) => {
        validation.paymentMethod = isValid;
        setValidation(validation);
    }

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const birthRef = useRef();
    const addressRef = useRef();
    const genderRef = useRef();
    const countryRef = useRef();
    const programRef = useRef();
    const dateRef = useRef();
    const paymentMethodRef = useRef();

    const validateInfo = () => {
        console.log(firstNameRef.current.value.length)
        if(firstNameRef.current.value.length === 0) setFirstName(false); else setFirstName(true);
        if(lastNameRef.current.value === 0) setLastName(false);else setLastName(true);
        if(emailRef.current.value === 0) setEmail(false);else setEmail(true);
        if(phoneRef.current.value === 0) setPhone(false);else setPhone(true);
        if(birthRef.current.value === 0) setBirth(false);else setBirth(true);
        if(addressRef.current.value === 0) setAddress(false);else setAddress(true);
        if(genderRef.current.value === 0) setGender(false);else setGender(true);
        if(countryRef.current.value === 0) setCountry(false);else setCountry(true);
        if(programRef.current.value === 0) setProgram(false);else setProgram(true);
        if(dateRef.current.value === 0) setDate(false);else setDate(true);
        if(paymentMethodRef.current.value === 0) setPaymentMethod(false); else setPaymentMethod(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        validateInfo();
    }

    return (
        <>
            <h1 className="text-primary text-center text-5xl font-semibold p-2 mt-12">Apply now</h1>
            <p className="text-secondary text-center text-xl py-1">Don't be late, apply with us today!</p>
            <div className="flex flex-wrap justify-center items-center gap-10 p-10 mb-10">
                <form className="flex flex-col sm:gap-5 w-[600px] apply-form">
                    <div className="sm:flex flex-wrap items-center justify-center sm:justify-between">
                        <TextInputElement type='text' placeholder='First Name' isValid={validation.firstName} elementRef={firstNameRef} />
                        <TextInputElement type='text' placeholder='Last Name' isValid={validation.lastName} elementRef={lastNameRef} />
                    </div>
                    <div className="sm:flex flex-wrap items-center justify-center sm:justify-between">
                        <TextInputElement type='email' placeholder='Email' isValid={validation.email} elementRef={emailRef} />
                        <TextInputElement type='text' placeholder='Phone' isValid={validation.phone} elementRef={phoneRef} />
                    </div>
                    <div className="sm:flex flex-wrap items-center justify-center sm:justify-between">
                        <TextInputElement type='text' placeholder='Date of Birth' isValid={validation.date} elementRef={birthRef} />
                        <TextInputElement type='text' placeholder='Address' isValid={validation.address} elementRef={addressRef} />
                    </div>
                    <div className="sm:flex flex-wrap items-center justify-center sm:justify-between">
                        <SelectElement values={genders} placeholder='Gender' elementRef={genderRef} isValid={validation.gender} width={'280px'} />
                        <SelectElement values={country_names} placeholder='Select Country' isValid={validation.country} elementRef={countryRef} width={'280px'} />
                    </div>
                    <div>
                        <SelectElement values={programs} placeholder='Select Program' elementRef={programRef} isValid={validation.program} width={'100%'} />
                    </div>
                    <div>
                        <SelectElement values={dates} elementRef={dateRef} isValid={validation.date} width={'100%'} />
                    </div>
                    <div>
                        <SelectElement values={payment_methods} placeholder='Select Registration Fee Payment Methods' elementRef={paymentMethodRef} isValid={validation.paymentMethod} width={'100%'} />
                    </div>
                    <div className="mt-8 self-center">
                        <button className="bg-primary text-white font-semibold rounded-md px-20 py-2 active:text-tomato" onClick={(e) => handleSubmit(e)}>Apply</button>
                    </div>
                </form>
                <div className="max-w-[480px]">
                    <div className="">
                        <h3 className="text-primary text-4xl font-semibold py-8">Enroll Now</h3>
                        <p className="text-secondary leading-8">In today’s digital age, the importance of cyber security and cloud computing cannot be overstated. As technology advances, so do the infra and risks associated with it.</p>
                    </div>
                    <div className="flex flex-wrap justify-center mt-10 gap-2">
                        <div className="w-[200px] py-6">
                            <img src="../images/icons/apply_ub.svg" alt="UB IT" className="mx-auto" />
                            <h5 className="text-primary text-center font-semibold mt-8">UB IT Career Training</h5>
                            <p className="text-secondary text-center">This training is done in partnership with the University of Buea.</p>
                        </div>
                        <div className="w-[240px] py-6">
                            <img src="../images/icons/apply_certification.svg" alt="Certification" className="mx-auto" />
                            <h5 className="text-primary text-center font-semibold mt-8">Certification Training</h5>
                            <p className="text-secondary text-center">Gain mastering and proficiency</p>
                        </div>
                    </div>
                    <div className="text-center mt-6">
                        <button className="bg-tomato text-white mx-auto px-10 py-2 rounded-md" onClick={() => {}}>Download Admission Steps</button>
                    </div>
                </div>
            </div>
        </>
    )
};

const TextInputElement = ({type, elementRef, placeholder, isValid}) => {
    return (
        <div className="py-2">
            <div className="apply-form-input sm:w-[280px] rounded-md">
                <input type={type} placeholder={placeholder} ref={elementRef} className="w-full h-12 outline-none text-black px-4 rounded-md" />
            </div>
            {!isValid && <div className="text-red-500 text-sm px-4 pt-1">This field is required!</div>}
        </div>
    )
}

const SelectElement = ({values, placeholder, isValid, elementRef, width}) => {
    return (
        <div className="py-2">
            <div className={`apply-form-input sm:w-[${width}] rounded-md`}>
                <select placeholder='Gender' ref={elementRef} className=" text-black outline-none w-full h-12 px-4 rounded-md" defaultValue={''}>
                    {placeholder && <option value='' disabled className="text-secondary">{placeholder}</option>}
                    {values.map((value, i) => <option value={value} key={i}>{value}</option>)}
                </select>
            </div>
            {!isValid && <div className="text-red-500 text-sm px-4 pt-1">This field is required!</div>}
        </div>
    )
}

export default Apply;
