import React, { useReducer } from 'react';
import InputField from '../Atoms/InputField';
import "./RegisterForm.scss";

const initialState = {
    firstName: '',
    lastName: '',
    address: '',
    phoneNumber: '',
    email: '',
    prefix: '',
    workPhone: '',
    cellPhone: '',
    jobTitle: '',
    company: '',
    businessAddress: '',
    companyWebsite: '',
    companyDescription: '',
    productServices: '',
    staffList: '',
    competitors: '',
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_FIELD':
            return { ...state, [action.field]: action.value };
        default:
            return state;
    }
};

const RegisterForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [errors, setErrors] = React.useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: 'UPDATE_FIELD', field: name, value });
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        if (value.trim() === '') {
            setErrors((prevErrors) => ({ ...prevErrors, [name]: 'Field must be filled' }));
        } else if (!/^[A-Za-z]{2,}$/.test(value)) {
            setErrors((prevErrors) => ({ ...prevErrors, [name]: 'Field must contain at least two alphabets' }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const formFields = Object.keys(initialState);
        const newErrors = {};
        let hasError = false;

        formFields.forEach((field) => {
            if (state[field].trim() === '') {
                newErrors[field] = 'Field must be filled';
                hasError = true;
            }
        });

        if (hasError) {
            setErrors(newErrors);
        } else {
            // Handle RegisterForm submission logic here
        }
    };

    return (
        <form onSubmit={handleSubmit} className="exhibit">
            <div className="register-wrap">
                <label htmlFor="prefix">Prefix:</label>
                <InputField
                    type="text"
                    id="prefix"
                    name="prefix"
                    value={state.prefix}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                />
                {errors.prefix && <span className="error">{errors.prefix}</span>}
            </div>
            <div className="register-wrap">
                <label htmlFor="firstName">First Name:</label>
                <InputField
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={state.firstName}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                />
                {errors.firstName && <span className="error">{errors.firstName}</span>}
            </div>

            <div className="register-wrap">
                <label htmlFor="lastName">Last Name:</label>
                <InputField
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={state.lastName}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                />
                {errors.lastName && <span className="error">{errors.lastName}</span>}
            </div>

            <div className="register-wrap">
                <label htmlFor="address">Address:</label>
                <InputField
                    type="text"
                    id="address"
                    name="address"
                    value={state.address}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                />
                {errors.address && <span className="error">{errors.address}</span>}
            </div>

            <div className="register-wrap">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <InputField
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={state.phoneNumber}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                />
                {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
            </div>

            <div className="register-wrap">
                <label htmlFor="email">Email:</label>
                <InputField
                    type="email"
                    id="email"
                    name="email"
                    value={state.email}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                />
                {errors.email && <span className="error">{errors.email}</span>}
            </div>



            <div className="register-wrap">
                <label htmlFor="workPhone">Work Phone:</label>
                <InputField
                    type="tel"
                    id="workPhone"
                    name="workPhone"
                    value={state.workPhone}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                />
                {errors.workPhone && <span className="error">{errors.workPhone}</span>}
            </div>

            <div className="register-wrap">
                <label htmlFor="cellPhone">Cell Phone:</label>
                <InputField
                    type="tel"
                    id="cellPhone"
                    name="cellPhone"
                    value={state.cellPhone}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                />
                {errors.cellPhone && <span className="error">{errors.cellPhone}</span>}
            </div>

            <div className="register-wrap">
                <label htmlFor="jobTitle">Job Title:</label>
                <InputField
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    value={state.jobTitle}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                />
                {errors.jobTitle && <span className="error">{errors.jobTitle}</span>}
            </div>

            <div className="register-wrap">
                <label htmlFor="comp
                any">Company:</label>
                <InputField
                    type="text"
                    id="company"
                    name="company"
                    value={state.company}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                />
                {errors.company && <span className="error">{errors.company}</span>}
            </div>

            <div className="register-wrap">
                <label htmlFor="businessAddress">Business Address:</label>
                <InputField
                    type="text"
                    id="businessAddress"
                    name="businessAddress"
                    value={state.businessAddress}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                />
                {errors.businessAddress && <span className="error">{errors.businessAddress}</span>}
            </div>

            <div className="register-wrap">
                <label htmlFor="companyWebsite">Company Website:</label>
                <InputField
                    type="text"
                    id="companyWebsite"
                    name="companyWebsite"
                    value={state.companyWebsite}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                />
                {errors.companyWebsite && <span className="error">{errors.companyWebsite}</span>}
            </div>

            <div className="register-wrap">
                <label htmlFor="companyDescription">Company Description:</label>
                <InputField
                    type="text"
                    id="companyDescription"
                    name="companyDescription"
                    value={state.companyDescription}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                />
                {errors.companyDescription && <span className="error">{errors.companyDescription}</span>}
            </div>

            <div className="register-wrap">
                <label htmlFor="productServices">Product/Services to Exhibit:</label>
                <InputField
                    type="text"
                    id="productServices"
                    name="productServices"
                    value={state.productServices}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                />
                {errors.productServices && <span className="error">{errors.productServices}</span>}
            </div>

            <div className="register-wrap">
                <label htmlFor="staffList">List of Staff:</label>
                <InputField
                    type="text"
                    id="staffList"
                    name="staffList"
                    value={state.staffList}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                />
                {errors.staffList && <span className="error">{errors.staffList}</span>}
            </div>

            <div className="register-wrap">
                <label htmlFor="competitors">Competitors You Want to Hear:</label>
                <InputField
                    type="text"
                    id="competitors"
                    name="competitors"
                    value={state.competitors}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                />
                {errors.competitors && <span className="error">{errors.competitors}</span>}
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default RegisterForm;
