import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './register.css';
import { useDispatch } from 'react-redux';
import { addUser } from '../userSlice';
import axios from 'axios';

const schema = yup.object().shape({
    name: yup.string().required("This field is required"),
    age: yup.string().required("This field is required"),
    sex: yup.string().required("This field is required"),
    mobile: yup.string().matches(/^[6-9]\d{9}$/,
     { message: "Enter valid indian number", excludeEmptyString: false }),
    //govtId: yup.string().required("This field is required"),
    govtId:yup.string().required("This field is required")
    .when("ID", {is: "aadhar",
      then:() => yup.string() .matches(/^\d{12}$/, "Aadhar ID should be a valid 12-digit numeric string"),
      otherwise:()=> yup.string().matches(/^[A-Z]{5}\d{4}[A-Z]$/, "PAN ID should be a valid 10-digit alpha-numeric string")}),
    contactNo: yup.string().matches(/^[6-9]\d{9}$/, { message: "Enter valid indian number", excludeEmptyString: false }),

})

const RegisterNew = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [value, setValue] = useState({
        name: '',
        age: '',
        sex: '',
        mobile: '',
        govtId: '',
        guardian: '',
        email: '',
        contactNo: '',
        address: '',
        state: '',
        city: '',
        country: '',
        pincode: '',
        occupation: '',
        religion: '',
        maritalStatus: '',
        bloodGroup: '',
        nationality: ''
    })

    const { register, handleSubmit, formState: { errors } } = useForm({

        resolver: yupResolver(schema),
    })

    // const onSubmit = value => console.log(value);
    const onSubmit = (e) => {
        e.preventDefault();
        setValue({
            name: '',
            age: '',
            sex: '',
            mobile: '',
            govtId: '',
            guardian: '',
            email: '',
            contactNo: '',
            address: '',
            state: '',
            city: '',
            country: '',
            pincode: '',
            occupation: '',
            religion: '',
            maritalStatus: '',
            bloodGroup: '',
            nationality: ''
        })
        dispatch(addUser([{
            name: value.name,
            age: value.age,
            sex: value.sex,
            mobile: value.mobile,
            govtId: value.govtId,
            guardian: value.guardian,
            email: value.email,
            contactNo: value.contactNo,
            address: value.address,
            state: value.state,
            city: value.city,
            country: value.country,
            pincode: value.pincode,
            occupation: value.occupation,
            religion: value.religion,
            maritalStatus: value.maritalStatus,
            bloodGroup: value.bloodGroup,
            nationality: value.nationality
        }]))
        axios.post("http://localhost:8000/api/user/adduser", {
            name: value.name,
            age: value.age,
            sex: value.sex,
            mobile: value.mobile,
            govtId: value.govtId,
            guardian: value.guardian,
            email: value.email,
            contactNo: value.contactNo,
            address: value.address,
            state: value.state,
            city: value.city,
            country: value.country,
            pincode: value.pincode,
            occupation: value.occupation,
            religion: value.religion,
            maritalStatus: value.maritalStatus,
            bloodGroup: value.bloodGroup,
            nationality: value.nationality
        })
            .then(res => {
                alert("Data Saved Successfully!", res)
                navigate("/")
            })
    }
    const Sex_OPTIONS = [
        { text: "Male", value: 'male' },
        { text: "Female", value: 'female' },
        { text: "Other", value: 'other' },
    ]

    const ID_OPTIONS = [
        { text: "PAN", value: 'pan' },
        { text: "Aadhar", value: 'aadhar' },
    ]

    const Guardian_OPTIONS = [
        { text: "Legal Guardian", value: 'legal_guardian' },
        { text: "Primary Guardian", value: 'primary_guardian' },
        { text: "Authorised to Collect", value: 'authorised' },
    ]

    const State_OPTIONS = [
        { text: "Kerala", value: 'kerala' },
        { text: "Tamil Nadu", value: 'tamil_nadu' },
        { text: "Goa", value: 'goa' },
    ]

    const City_OPTIONS = [
        { text: "Kozhikode", value: 'kozhikode' },
        { text: "Ernamkulam", value: 'ernamkulam' },
        { text: "Palakkad", value: 'palakkad' },
    ]

    const Country_OPTIONS = [
        { text: "India", value: 'india' },
        { text: "USA", value: 'usa' },
        { text: "UAE", value: 'uae' },
    ]

    const Religion_OPTIONS = [
        { text: "Hinduism", value: 'hinduism' },
        { text: "Christianity", value: 'christianity' },
        { text: "Sikhism", value: 'sikhism' },
        { text: "Islam", value: 'islam' },
        { text: "Buddhism", value: 'buddhism' },
        { text: "Jainism", value: 'jainism' },
    ]

    const Marital_OPTIONS = [
        { text: "Married", value: 'married' },
        { text: "Un Married", value: 'cunmarried' },
    ]

    const Blood_OPTIONS = [
        { text: "A +", value: 'a_positive' },
        { text: "A -", value: 'a_negative' },
        { text: "B +", value: 'b_positive' },
        { text: "B -", value: 'b_negative' },
        { text: "AB +", value: 'ab_positive' },
        { text: "AB -", value: 'ab_negative' },
        { text: "O +", value: 'o_positive' },
        { text: "O -", value: 'o_negative' },
    ]


    return (
        <div className='m-4'>
            {/* <h1>Registration Form</h1> */}
            {/* <div> */}
            <div className='container form_boarder'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h5 className='title'>Personal Details</h5>
                    <div className='row'>
                        <div className='col-md-5 column'>
                            <label className='FormLabel4'>
                                <span className='required '>Name</span>
                            </label>
                            <input className="form-control"
                                type='text'
                                name='name'
                                placeholder='Enter Name'
                                {...register("name", { required: true })}
                                value={value.name}
                                onChange={(e) => setValue({ ...value, name: e.target.value })}
                            />

                            {errors.name && (
                                <span className="display-next field_level_error">{errors.name?.message}</span>
                            )}

                        </div>
                        <div className='col-md-4 column'>
                            <label className='FormLabel1'>
                                <span className='required'>Date of Birth or Age</span>
                            </label>
                            <input
                                className="form-control input-field"
                                type='text'
                                name='age'
                                placeholder='DD/MM/YYYY or Age in year'
                                {...register("age", { required: true })}
                                value={value.age}
                                onChange={(e) => setValue({ ...value, age: e.target.value })}
                            />
                            {errors.age && (
                                <span className="field_level_error">{errors.age?.message}</span>
                            )}
                        </div>
                        <div className='col-md-3 column'>
                            <label className='FormLabel3'>
                                <span className='required text'>Sex</span>
                            </label>
                            <select className="form-control input-text"
                                name='sex'
                                {...register("sex", { required: true })}
                                value={value.sex}
                                onChange={(e) => setValue({ ...value, sex: e.target.value })}
                            >
                                <option value="">Select Sex</option>
                                {Sex_OPTIONS.map((option, index) => (
                                    <option key={index} value={option.value}>{option.text}</option>
                                ))}
                            </select>
                            {errors.sex && (
                                <span className="field_level_error">{errors.sex?.message}</span>
                            )}
                        </div>

                    </div>
                    <div className='row'>
                        <div className='col-md-5  column form-group'>
                            <label className='FormLabel2'>Mobile</label>
                            <input
                                className="form-control"
                                type='number'
                                name='mobile'
                                placeholder='Enter Mobile'
                                {...register("mobile", { required: true })}
                                value={value.mobile}
                                onChange={(e) => setValue({ ...value, mobile: e.target.value })}
                            />

                            {errors.mobile && (
                                <span className="field_level_error">{errors.mobile?.message}</span>
                            )}

                        </div>
                        <div className='col-md-7 column form-group'>
                            <label className='FormLabel1'>Govt Issued ID</label>

                            <select
                                className="form-control input-text"
                                name='govtId'
                                {...register("govtId", { required: true })}
                                value={value.govtId}
                                onChange={(e) => setValue({ ...value, govtId: e.target.value })}
                            >
                                <option value="">ID Type</option>
                                {ID_OPTIONS.map((option, index) => (
                                    <option key={index} value={option.value}>{option.text}</option>
                                ))}
                            </select>
                            <input
                                className="form-control"
                                type='text'
                                name='govtId'
                                placeholder='Enter Govt ID'

                            />
                            {errors.govtId && (
                                <span className="field_level_error">{errors.govtId?.message}</span>
                            )}
                        </div>
                    </div>
                    <h5 className='title'>Contact Details</h5>
                    <div className='row'>
                        <div className='col-md-5 column'>
                            <label className='FormLabel1'>Guardian Details</label>
                            <select className="form-control input-text">
                                <option>Select Label</option>
                                {Guardian_OPTIONS.map((option, index) => (
                                    <option key={index} value={option.value}>{option.text}</option>
                                ))}
                            </select>
                            <input
                                className="form-control"
                                type='text'
                                name='guardian'
                                placeholder='Guardian Name'
                            />

                        </div>
                        <div className='col-md-3 column'>
                            <label className='FormLabel'>Email</label>
                            <input
                                className="form-control"
                                type='email'
                                name='email'
                                placeholder='Enter Email'
                                value={value.email}
                                onChange={(e) => setValue({ ...value, email: e.target.value })}
                            />
                        </div>
                        <div className='col-md-4 column'>
                            <label className='FormLabel1'>Emergency Contact Number</label>
                            <input
                                className="form-control input-field"
                                type='number'
                                name='contactNo'
                                placeholder='Enter Emergency No '
                                {...register("contactNo", { required: true })}
                                value={value.contactNo}
                                onChange={(e) => setValue({ ...value, contactNo: e.target.value })}
                            />


                            {errors.contactNo && (
                                <span className="field_level_error">{errors.contactNo?.message}</span>
                            )}

                        </div>

                    </div>
                    <h5 className='title'>Address Details</h5>
                    <div className='row'>
                        <div className='col-md-5 column'>
                            <label className='FormLabel2'>Address</label>
                            <input
                                className="form-control"
                                type='text'
                                name='address'
                                placeholder='Enter Address'
                                value={value.address}
                                onChange={(e) => setValue({ ...value, address: e.target.value })}
                            />

                        </div>
                        <div className='col-md-3 column'>
                            <label className='FormLabel'>State</label>
                            <select className="form-control input-text"
                                value={value.state}
                                onChange={(e) => setValue({ ...value, state: e.target.value })}
                            >
                                <option>Select State</option>
                                {State_OPTIONS.map((option, index) => (
                                    <option key={index} value={option.value}>{option.text}</option>
                                ))}
                            </select>
                        </div>
                        <div className='col-md-4 column'>
                            <label className='FormLabel'>City</label>
                            <select className="form-control input-text"
                                value={value.city}
                                onChange={(e) => setValue({ ...value, city: e.target.value })}
                            >
                                <option>Select City</option>
                                {City_OPTIONS.map((option, index) => (
                                    <option key={index} value={option.value}>{option.text}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='row '>
                        <div className='col-md-5 column'>
                            <label className='FormLabel2'>Country</label>
                            <select className="form-control input-text"
                                value={value.country}
                                onChange={(e) => setValue({ ...value, country: e.target.value })}
                            >
                                <option>Select Country</option>
                                {Country_OPTIONS.map((option, index) => (
                                    <option key={index} value={option.value}>{option.text}</option>
                                ))}
                            </select>
                        </div>
                        <div className='col-md-3 column'>
                            <label className='FormLabel'>Pincode</label>
                            <input
                                className="form-control"
                                type='number'
                                name='pincode'
                                placeholder='Enter Pincode'
                                value={value.pincode}
                                onChange={(e) => setValue({ ...value, pincode: e.target.value })}
                            />
                        </div>
                    </div>
                    <h5 className='title'>Other Details</h5>
                    <div className='row'>
                        <div className='col-md-3 column'>
                            <label className='FormLabel2'>Occupation</label>
                            <input
                                className="form-control"
                                type='text'
                                name='occupation'
                                placeholder='Enter Occupation'
                                value={value.occupation}
                                onChange={(e) => setValue({ ...value, occupation: e.target.value })}
                            />

                        </div>
                        <div className='col-md-3 column'>
                            <label className='FormLabel'>Religion</label>
                            <select className="form-control input-text"
                                value={value.religion}
                                onChange={(e) => setValue({ ...value, religion: e.target.value })}
                            >
                                <option>Select Religion</option>
                                {Religion_OPTIONS.map((option, index) => (
                                    <option key={index} value={option.value}>{option.text}</option>
                                ))}
                            </select>
                        </div>
                        <div className='col-md-3 column'>
                            <label className='FormLabel'>Marital Status</label>
                            <select className="form-control input-field input-text"
                                value={value.maritalStatus}
                                onChange={(e) => setValue({ ...value, maritalStatus: e.target.value })}
                            >
                                <option>Select Marital Status</option>
                                {Marital_OPTIONS.map((option, index) => (
                                    <option key={index} value={option.value}>{option.text}</option>
                                ))}
                            </select>
                        </div>
                        <div className='col-md-3 column'>
                            <label className='FormLabel'>Blood Group</label>
                            <select className="form-control input-field input-text"
                                value={value.bloodGroup}
                                onChange={(e) => setValue({ ...value, bloodGroup: e.target.value })}
                            >
                                <option >Select Blood Group</option>
                                {Blood_OPTIONS.map((option, index) => (
                                    <option key={index} value={option.value}>{option.text}</option>
                                ))}
                            </select>
                        </div>


                    </div>
                    <div className='row'>
                        <div className='col-md-3 column'>
                            <label className='FormLabel2'>Nationality</label>
                            <select className="form-control input-text"
                                value={value.nationality}
                                onChange={(e) => setValue({ ...value, nationality: e.target.value })}
                            >
                                <option>Select Nationality</option>
                                {Country_OPTIONS.map((option, index) => (
                                    <option key={index} value={option.value}>{option.text}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12 btn-div'>
                            <button type="submit" className="btn btn-outline-danger mt-2">
                                <Link to={"/"} className='btn-cancel' >
                                    CANCEL <br /><span className='span-text'>(ESC)</span>
                                </Link>
                            </button>
                            <button type="submit" className="btn btn-success mt-2" >
                                SUBMIT <br />
                                <span className='span-text'>(X S)</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        // </div>
    )
}

export default RegisterNew
