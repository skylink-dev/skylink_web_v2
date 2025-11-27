'use client';
import React, { useEffect, useState } from 'react';
import { Close } from '@mui/icons-material';

const ZohoLeadForm = ({ formClose }) => {
  const [returnUrl, setReturnUrl] = useState('');
  const [errors, setErrors] = useState({});
  useEffect(() => {
    setReturnUrl(window.location.href);
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.defer = true;
    script.id = 'zsiqscript';
    script.src = 'https://salesiq.zoho.in/widget';
    document.head.appendChild(script);
  }, []);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateMobile = (mobile) => /^[6-9]\d{9}$/.test(mobile);
  const validatePincode = (pin) => /^\d{4,6}$/.test(pin);
  const checkMandatory = () => {
    const form = document.forms['WebToLeads833427000000664013'];
    const newErrors = {};
    const requiredFields = {
      First_Name: 'First name',
      Last_Name: 'Last name',
      Mobile: 'Mobile',
      LEADCF1: 'Plans',
      Email: 'Email',
      Street: 'Street',
      City: 'City',
      State: 'State',
      Zip_Code: 'Pincode',
      Description: 'Description',
    };
    for (let field in requiredFields) {
      const input = form[field];
      if (!input || input.value.trim() === '') {
        newErrors[field] = `${requiredFields[field]} is required.`;
      }
    }
    const email = form['Email']?.value.trim();
    if (email && !validateEmail(email)) {
      newErrors.Email = 'Invalid email format.';
    }
    const mobile = form['Mobile']?.value.trim();
    if (mobile && !validateMobile(mobile)) {
      newErrors.Mobile = 'Invalid mobile number. Enter 10 digits.';
    }
    const pin = form['Zip_Code']?.value.trim();
    if (pin && !validatePincode(pin)) {
      newErrors.Zip_Code = 'Invalid Pin Code. Enter 4–6 digits.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const fields = [
    { id: 'First_Name', label: 'First Name', placeholder: 'Enter your first name' },
    { id: 'Last_Name', label: 'Last Name', placeholder: 'Enter your last name' },
    { id: 'Mobile', label: 'Mobile', placeholder: 'Enter 10-digit mobile number' },
    { id: 'LEADCF1', label: 'Plans', placeholder: 'Choose your preferred plan' },
    { id: 'Email', label: 'Email', ftype: 'email', placeholder: 'example@example.com' },
    { id: 'Street', label: 'Street', placeholder: 'Enter your street address' },
    { id: 'City', label: 'City', placeholder: 'Enter your city' },
    { id: 'State', label: 'State', placeholder: 'Enter your state' },
    { id: 'Zip_Code', label: 'Pin Code', placeholder: 'Enter your area pin code' },
  ];
  const onClose = () => {
    formClose(false);
  }
  return (
    <div
      id="crmWebToEntityForm"
      className="zcwf_lblLeft crmWebToEntityForm"
      style={{ backgroundColor: 'white', color: 'black', maxWidth: '600px' }}
    >
      <span className="close-icons" onClick={onClose}><Close></Close></span>
      <form
        id="webform833427000000664013"
        name="WebToLeads833427000000664013"
        method="POST"
        action="https://crm.zoho.in/crm/WebToLeadForm"
        acceptCharset="UTF-8"
        onSubmit={(e) => {
          if (!checkMandatory()) {
            e.preventDefault();
          }
          else{
              formClose(false);
          }
        }}
      >
        <input type="hidden" name="xnQsjsdp" value="cf9004a4986bd16c6780fe57588782d06fdf6341903cf92ab7901343ae34b714" />
        <input type="hidden" name="zc_gad" id="zc_gad" value="" />
        <input type="hidden" name="xmIwtLD" value="11957794ad59ada601f8847e03159698fd312db8a5952503a60a5687d67be8de837fbc5f144927d6d1b6ccd742dadd9f" />
        <input type="hidden" name="actionType" value="TGVhZHM=" />
        <input type="hidden" name="returnURL" value={returnUrl} />
        <input type="hidden" id="ldeskuid" name="ldeskuid" />
        <input type="hidden" id="LDTuvid" name="LDTuvid" />
        <h3 style={{ color: 'black', fontFamily: 'Arial' }}>Customer Form</h3>
        {Array.from({ length: Math.ceil(fields.length / 2) }, (_, rowIndex) => {
          const pair = fields.slice(rowIndex * 2, rowIndex * 2 + 2);
          return (
            <div className="flex gap-4 mb-4 zcwf_row" key={rowIndex}>
              {pair.map(({ id, label, ftype, placeholder }) => (
                <div className= {pair.length === 1 ? 'w-full zcwf_col_lab' : 'w-1/2 zcwf_col_lab'} key={id}>
                  <label htmlFor={id} className="none text-sm font-medium text-gray-700 mb-1">
                    {label} <span className="text-red-500">*</span>
                  </label>
                  <div className=" zcwf_col_fld">
                    <input
                      type="text"
                      id={id}
                      name={id}
                      maxLength="255"
                      aria-label={label}
                      ftype={ftype}
                      placeholder={placeholder}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>
                  {errors[id] && (
                    <div className="text-red-500 text-xs mt-1">{errors[id]}</div>
                  )}
                </div>
              ))}
            </div>
          );
        })}
        <div className="zcwf_row full-width" style={{"gap":"0px"}}>
          <div className="zcwf_col_lab">
            <label htmlFor="Description">
              Description <span style={{ color: 'red' }}>*</span>
            </label>
          </div>
          <div className="zcwf_col_fld" style={{"width":"100%","flexDirection":"column"}}>
            <textarea
              id="Description"
              name="Description"
              aria-label="Description"
              placeholder="Describe your query or requirement"
            />
            {errors['Description'] && (
              <div style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>{errors['Description']}</div>
            )}
          </div>
        </div>
        <div className="zcwf_row submit-button-wrap" style={{"columnGap":"0px"}}>
          <div className="zcwf_col_lab"></div>
          <div className="zcwf_col_fld" style={{"width":"100%", "flexDirection":"row"}}>
            <input type="submit" id="formsubmit" className="formsubmit zcwf_button" value="Submit" />
            <input type="reset" className="zcwf_button" name="reset" value="Reset" />
          </div>
        </div>
      </form>
    </div>
  );
};
export default ZohoLeadForm;
