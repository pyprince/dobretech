import React, {useState, useRef} from "react";
import DatePicker from "react-date-picker";
import countries from "../countries";

import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

const country_names = countries.map(country => country.name);
const genders = ['Male', 'Female'];
const programs = ['Cloud Computing', 'Cybersecurity', 'UB Program'];
const dates = ['October 2024', 'November 2024', 'Feburary 2025'];
const payment_methods = ['Paypal','Stripe', 'Moon Pay'];

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
    const [birthDate, setBirthDate] = useState('');

    const setFirstName = (isValid) => {
        setValidation(prev => ({ ...prev, firstName: isValid }));
    }

    const setLastName = (isValid) => {
        setValidation(prev => ({...prev, lastName: isValid}));
    }

    const setEmail = (isValid) => {
        setValidation(prev => ({...prev, email: isValid}));

    }

    const setPhone = (isValid) => {
        setValidation(prev => ({...prev, phone: isValid}));

    }

    const setAddress = (isValid) => {
        setValidation(prev => ({...prev, address: isValid}));

    }

    const setGender = (isValid) => {
        setValidation(prev => ({...prev, gender: isValid}));
    }

    const setCountry = (isValid) => {
        setValidation(prev => ({...prev, country: isValid}));
    }

    const setProgram = (isValid) => {
        setValidation(prev => ({...prev, program: isValid}));
    }

    const setBirthDateValidation = (isValid) => {
        setValidation(prev => ({...prev, birth: isValid}));
   }

    const setPaymentMethod = (isValid) => {
        setValidation(prev => ({...prev, paymentMethod: isValid}));
   }

   const handleDateChange = (newDate) => {
        if (newDate) {
            const formattedDate = newDate.toISOString().slice(0, 10);
            setBirthDate(formattedDate);
            console.log("Selected Date:", formattedDate);
        }
    };

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const addressRef = useRef();
    const genderRef = useRef();
    const countryRef = useRef();
    const programRef = useRef();
    const dateRef = useRef();
    const paymentMethodRef = useRef();

    const validateField = (ref, setValidationFunc) => {
        setValidationFunc(ref.current.value.length > 0);
    }

    const validateInfo = () => {
        validateField(firstNameRef, setFirstName);
        validateField(lastNameRef, setLastName);
        validateField(emailRef, setEmail);
        validateField(phoneRef, setPhone);
        validateField(addressRef, setAddress);
        validateField(genderRef, setGender);
        validateField(countryRef, setCountry);
        validateField(programRef, setProgram);
        if(birthDate) setBirthDateValidation(true); else setBirthDateValidation(false);
        validateField(paymentMethodRef, setPaymentMethod);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const firstName = firstNameRef.current.value;
        const lastName = lastNameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const address = addressRef.current.value;
        const gender = genderRef.current.value;
        const country = countryRef.current.value;
        const program = programRef.current.value;
        const date = dateRef.current.value;
        const payment_method = paymentMethodRef.current.value;
        
        let flag = true;
        if(!firstName) flag = false;
        if(!lastName) flag = false;
        if(!email) flag = false;
        if(!phone) flag = false;
        if(!birthDate) flag = false;
        if(!address) flag = false;
        if(!gender) flag = false;
        if(!country) flag = false;
        if(!program) flag = false;
        if(!date) flag = false;
        if(!payment_method) flag = false;
        
        validateInfo();
        if (flag) {
            // Proceed with form submission
            const applyData = {
                firstName: firstNameRef.current.value,
                lastName: lastNameRef.current.value,
                email: emailRef.current.value,
                phone: phoneRef.current.value,
                birth: birthDate,
                address: addressRef.current.value,
                gender: genderRef.current.value,
                country: countryRef.current.value,
                program: programRef.current.value,
                date: dateRef.current.value,
                payment_method: paymentMethodRef.current.value
            }
            console.log('Application sent!', applyData);
        }
        else {
            // Alert or push notification
            console.log("Please fill all fields.");
            return;
        }
    }

    return (
        <>
            <h1 className="text-primary text-center text-5xl font-semibold p-2 mt-12">Apply now</h1>
            <p className="text-secondary text-center text-xl py-1">Don't be late, apply with us today!</p>
            <div className="flex flex-wrap justify-center items-center gap-10 p-10 mb-10">
                <form className="flex flex-col sm:gap-5 w-[600px] apply-form">
                    <div className="sm:flex flex-wrap justify-center sm:justify-between">
                        <TextInputElement type='text' placeholder='First Name' isValid={validation.firstName} elementRef={firstNameRef} />
                        <TextInputElement type='text' placeholder='Last Name' isValid={validation.lastName} elementRef={lastNameRef} />
                    </div>
                    <div className="sm:flex flex-wrap justify-center sm:justify-between">
                        <TextInputElement type='email' placeholder='Email' isValid={validation.email} elementRef={emailRef} required />
                        <TextInputElement type='text' placeholder='Phone' isValid={validation.phone} elementRef={phoneRef} />
                    </div>
                    <div className="sm:flex flex-wrap justify-center sm:justify-between">
                        <div>
                            <div className="text-secondary text-sm px-4 pt-1">Birth of Date</div>
                            <div className="apply-form-input text-black sm:w-[280px] rounded-md py-3">
                                <DatePicker 
                                    onChange={handleDateChange} 
                                    value={birthDate}
                                />
                            </div>
                            {!validation.birth && <div className="text-red-500 text-sm px-4 pt-1">This field is required!</div>}
                        </div>
                        <div className="mt-5">
                            <TextInputElement type='text' placeholder='Address' isValid={validation.address} elementRef={addressRef} />
                        </div>
                    </div>
                    <div className="sm:flex flex-wrap justify-center sm:justify-between">
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
                            <img src="/images/icons/apply_ub.svg" alt="UB IT" className="mx-auto" />
                            <h5 className="text-primary text-center font-semibold mt-8">UB IT Career Training</h5>
                            <p className="text-secondary text-center">This training is done in partnership with the University of Buea.</p>
                        </div>
                        <div className="w-[240px] py-6">
                            <img src="/images/icons/apply_certification.svg" alt="Certification" className="mx-auto" />
                            <h5 className="text-primary text-center font-semibold mt-8">Certification Training</h5>
                            <p className="text-secondary text-center">Gain mastering and proficiency</p>
                        </div>
                    </div>
                    <div className="text-center mt-6">
                        <button className="bg-tomato text-white mx-auto px-10 py-2 rounded-md active:text-primary" onClick={() => {}}>Download Admission Steps</button>
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
