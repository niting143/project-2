// EmailJS Configuration
// You can either set these values directly here or use environment variables

export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_tlfskcq", // Your EmailJS service ID
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_5cr0kum", // Your EmailJS template ID
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "LtbNUKN1A1V9KJbnq", // Your EmailJS public key
};

// Email addresses to send quotes to
export const QUOTE_EMAILS = [
  "nitingautam15@gmail.com",
  "fixshowerandbalconyleaks@gmail.com",
];

// Email template variables
export const getEmailTemplateParams = (formData: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}) => ({
  to_email: "", // Will be set dynamically for each recipient
  from_name: formData.name,
  from_email: formData.email,
  from_phone: formData.phone,
  service_required: formData.service,
  message: formData.message,
  subject: `New Quote Request - ${formData.service}`,
});

// Helper function to check if EmailJS is properly configured
export const isEmailJSConfigured = () => {
  return EMAILJS_CONFIG.SERVICE_ID !== "service_id" && 
         EMAILJS_CONFIG.TEMPLATE_ID !== "template_id" && 
         EMAILJS_CONFIG.PUBLIC_KEY !== "public_key";
};
