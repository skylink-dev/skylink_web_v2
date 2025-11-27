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
                newErrors[key] = `${key.replace(/([A-Z])/g, ' $1')} is required.`;
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
        { label: 'First Name', name: 'firstName', required: true },
        { label: 'Last Name', name: 'lastName', required: true },
        { label: 'Mobile', name: 'mobile', required: true },
        { label: 'Email', name: 'email', required: true },
        { label: 'Street', name: 'street', required: true },
        { label: 'City', name: 'city', required: true },
        { label: 'State', name: 'state', required: true },
        { label: 'Pin Code', name: 'zipCode' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="px-6 py-8 sm:px-8 sm:py-10">
                        {/* Header Section */}
                        <div className="text-center mb-8">
                            <div className="mb-4">
                                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                                    Talk to a Skylink sales expert
                                </h2>
                                <div className="w-16 h-1 bg-red-600 mx-auto rounded-full"></div>
                            </div>
                            <div className="text-base text-gray-600 mb-3">
                                <p>Call us at 
                                    <Link href="tel:+919944199445" className="text-red-600 hover:text-red-700 font-semibold ml-1 transition-colors">
                                        +91 99441 99445
                                    </Link> for more information.
                                </p>
                            </div>
                            <div className="text-sm text-gray-500">
                                <p>Sales experts are available Monday – Friday, 7 a.m. – 7 p.m. CT.</p>
                            </div>
                        </div>

                        {/* Form Section */}
                        <div className="bg-gray-50 rounded-lg p-6 sm:p-8">
                            <form onSubmit={handleSubmit} noValidate className="space-y-6">
                                {/* Form Fields Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {formFields.map(({ label, name, required }) => (
                                        <div key={name} className="space-y-2">
                                            <label className="block text-sm font-semibold text-gray-700">
                                                {label} {required && <span className="text-red-500">*</span>}
                                            </label>
                                            <input
                                                type={name === 'email' ? 'email' : 'text'}
                                                name={name}
                                                value={formData[name]}
                                                onChange={handleChange}
                                                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 ${
                                                    errors[name] 
                                                        ? 'border-red-300 bg-red-50' 
                                                        : 'border-gray-300 hover:border-gray-400'
                                                }`}
                                                required={false}
                                            />
                                            {errors[name] && (
                                                <p className="text-red-600 text-sm font-medium flex items-center gap-1">
                                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                    </svg>
                                                    {errors[name]}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* Description Textarea */}
                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-gray-700">
                                        Description
                                    </label>
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        rows="3"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent hover:border-gray-400 transition-all duration-200 resize-none"
                                        placeholder="Tell us about your requirements..."
                                    />
                                </div>

                                {/* Buttons */}
                                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                                    <button
                                        type="submit"
                                        className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 shadow-md hover:shadow-lg"
                                    >
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
                                        className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 shadow-md hover:shadow-lg"
                                    >
                                        Reset
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}