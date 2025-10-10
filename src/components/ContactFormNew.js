import Link from 'next/link';
import React, { useState } from 'react';

export default function ContactFormNew() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        mobile: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        description: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Clear error when typing
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    };

    const validateForm = () => {
    const newErrors = {};

    Object.entries(formData).forEach(([key, value]) => {
        if (key !== 'description' && !value.trim()) {
            newErrors[key] = `${key.replace(/([A-Z])/g, ' $1')} is required.`; // "zipCode" -> "Zip Code"
        }
    });

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email.';
    }

    return newErrors;
};

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const form = document.createElement('form');
        form.method = 'POST';
        form.action = 'https://crm.zoho.in/crm/WebToLeadForm';
        form.acceptCharset = 'UTF-8';

        const hiddenFields = {
            xnQsjsdp: '0c22517a6c222f5c06a8a030ddb43d0774631f11cedd96ca198f53f9409f77e2',
            xmIwtLD: '66f43a3ca2fae9ae22e447a7462bf5004f04685208d764ae8624344f443850c39c941b381ce50d26754856ac4d9431e6',
            actionType: 'TGVhZHM=',
            returnURL: 'null',
            ldeskuid: '',
            LDTuvid: '',
            'zc_gad': ''
        };

        Object.entries(hiddenFields).forEach(([name, value]) => {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = name;
            input.value = value;
            form.appendChild(input);
        });

        const mappedFormData = {
            'First Name': formData.firstName,
            'Last Name': formData.lastName,
            'Mobile': formData.mobile,
            'Email': formData.email,
            'Street': formData.street,
            'City': formData.city,
            'State': formData.state,
            'Zip Code': formData.zipCode,
            'Description': formData.description
        };

        Object.entries(mappedFormData).forEach(([name, value]) => {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = name;
            input.value = value;
            form.appendChild(input);
        });

        document.body.appendChild(form);
        form.submit();
        document.body.removeChild(form);
    };

    const formFields = [
        { label: 'First Name', name: 'firstName' , required: true  },
        { label: 'Last Name', name: 'lastName', required: true },
        { label: 'Mobile', name: 'mobile', required: true  },
        { label: 'Email', name: 'email' ,  required: true },
        { label: 'Street', name: 'street',  required: true  },
        { label: 'City', name: 'city' ,  required: true },
        { label: 'State', name: 'state' ,  required: true },
        { label: 'Pin Code', name: 'zipCode'}
    ];

    return (
        <div className="aem-GridColumn aem-GridColumn--default--12 baem-wrapper" id="baem-container">
            <div className="rai-form">
                <div className="max-width-background theme-neutral-bg pad-t-xl pad-b-xl">
                    <div className="absolute-fill overflow-hidden">
                        <div className="absolute-fill bgcolor"></div>
                    </div>
                    <div className="container rel">
                        <div className="row justify-center text-center">
                            <div className="grid-col-12-md grid-col-10">
                                <div className="RAIHeader">
                                    <div className="eyebrow-heading pad-b-xs">
                                        <h2 className="heading-xxl multi-cta-heading">Talk to a Skylink sales expert</h2>
                                    </div>
                                    <div className="type-base pad-b-xs multi-cta-body">
                                        <p>Call us at <Link href="tel:+919944199445">+919944199445</Link> for more information.</p>
                                    </div>
                                    <div className="legal-container">
                                        <div className="type-legal multi-cta-legal">
                                            <p>Sales experts are available Monday – Friday, 7 a.m. – 7 p.m. CT.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-center text-center">
                            <div className="grid-col-12 nopad pad-t-xxs">
                                <section className="body-section" id="raileadform">
                                    <div className="container">
                                        <div className="row justify-center text-center">
                                            <div className="grid-col-12-md grid-col-8 nopad">
                                                <form onSubmit={handleSubmit} noValidate>
                                                    <div className="row flex-wrap">
                                                        {formFields.map(({ label, name, required }) => (
                                                            <div className="field-div grid-col-6 grid-col-12-xs grid-col-12-md" key={name}>
                                                                <label className="block text-sm font-medium mb-1">
                                                                    {label} {required && <span className="text-red-500">*</span>}
                                                                </label>
                                                                <input
                                                                    type={name === 'email' ? 'email' : 'text'}
                                                                    name={name}
                                                                    value={formData[name]}
                                                                    onChange={handleChange}
                                                                    className="w-full border border-gray-300 rounded p-2"
                                                                    required={false}
                                                                />
                                                                {errors[name] && (
                                                                    <p className="text-red-500 text-sm mt-1 errors">{errors[name]}</p>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>

                                                    <div className="mb-4">
                                                        <label className="block text-sm font-medium mb-1 text-left" style={{"marginBottom":"10px"}}>Description</label>
                                                        <textarea
                                                            name="description"
                                                            value={formData.description}
                                                            onChange={handleChange}
                                                            rows="4"
                                                            className="w-full border border-gray-300 rounded p-2"
                                                        />
                                                    </div>

                                                    <div className="flex gap-3">
                                                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded btn-primary" style={{"marginTop":"10px"}}>
                                                            Submit
                                                        </button>
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                setFormData({
                                                                    firstName: '',
                                                                    lastName: '',
                                                                    mobile: '',
                                                                    email: '',
                                                                    street: '',
                                                                    city: '',
                                                                    state: '',
                                                                    zipCode: '',
                                                                    description: ''
                                                                });
                                                                setErrors({});
                                                            }}
                                                            className="bg-gray-300 text-black px-4 py-2 rounded btn-secondary" style={{"marginTop":"10px", "marginLeft":"10px"}}>
                                                            Reset
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
