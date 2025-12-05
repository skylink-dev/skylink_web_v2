// utils/contactFormHandler.js

export async function handleContactFormSubmit(formData) {
  try {
    // Example: sending form data to your API endpoint
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    const data = await response.json();
    // console.log('Form submitted successfully:', data);
    return data;
  } catch (error) {
    // console.error('Error submitting form:', error);
    throw error;
  }
}
