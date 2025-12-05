import axiosApi from "@/axios/api";

export const apiService = {
  // Submit contact form
  submitContactForm: (formData) => {
    const payload = {
      first_name: formData.name || "",
      last_name: "" || formData.last_name, // You're not collecting last name in your form
      phone: formData.phone || "",
      email: formData.email || "",
      message: "" || formData.message, // You're not collecting message in your form
      service: "" || formData.service, // You're not collecting service in your form
      address: "" || formData.address, // You're not collecting address in your form
      location: "" || formData.location,
    };

    // console.log("Sending payload:", payload); // Add this for debugging

    return axiosApi.post("contacts/", payload);
  },

  submitSubscribe: (formData) => {
    const payload = {
      email: formData.email || "",
    };

    return axiosApi.post("subscription/subscribe/", payload);
  },

  // Get all contacts (if needed)
  getContacts: () => {
    return axiosApi.get("contacts/");
  },

  // Get contact by ID
  getContactById: (id) => {
    return axiosApi.get(`contacts/${id}/`);
  },

  // Update contact
  updateContact: (id, formData) => {
    return axiosApi.put(`contacts/${id}/`, formData);
  },

  // Delete contact
  deleteContact: (id) => {
    return axiosApi.delete(`contacts/${id}/`);
  },

  checkFesability: (formData) => {
    // console.log("Testint the application dsd");
    // console.log(formData);
    return axiosApi.post("fisability/check/", formData);
  },
};
