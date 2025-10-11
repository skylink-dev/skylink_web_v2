import axiosApi from "@/axios/api";

export const apiService = {
  // Submit contact form
  submitContactForm: (formData) => {
    const payload = {
      "first_name": formData.name || "",
      "last_name": formData.lastName || "",
      "phone": formData.phone || "",
      "email": formData.email || "",
      "message": formData.message || "",
      "service": formData.subject || "",
    };
    
    return axiosApi.post("contacts/", payload);
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
  }
};

// Custom hook for contact operations
export const useContactService = () => {
  const submitContact = async (formData) => {
    try {
      const response = await contactService.submitContactForm(formData);
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: error.response?.data || error.message };
    }
  };

  return { submitContact };
};