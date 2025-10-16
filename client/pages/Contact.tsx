import { useState, FormEvent, useEffect } from 'react';
import { 
  ChevronDown, 
  ArrowRight, 
  Check,
  Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast, Toaster } from 'sonner';

// Indonesian cities for the dropdown
const indonesianCities = [
  'Jakarta', 'Surabaya', 'Bandung', 'Bekasi', 'Medan', 
  'Depok', 'Tangerang', 'Palembang', 'Semarang', 'Makassar',
  'Bogor', 'Bekasi', 'Bandar Lampung', 'Padang', 'Malang',
  'Pekanbaru', 'Denpasar', 'Banjarmasin', 'Yogyakarta', 'Surakarta'
].sort();

interface FormData {
  name: string;
  location: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
  subscribe: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

interface TouchedFields {
  [key: string]: boolean;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    location: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
    subscribe: false
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<TouchedFields>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  
  const serviceTypes = [
    'Legal Services',
    'Tax and Financing',
    'Law Consultation',
    'Others'
  ];

  const validateField = (name: string, value: string): string => {
    if (!value.trim()) return 'This field is required';
    
    switch (name) {
      case 'email':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return 'Please enter a valid email address';
        }
        break;
      case 'phone':
        if (!/^[+]?[\s.-]?[0-9\s.-]{8,}$/.test(value)) {
          return 'Please enter a valid phone number (min 8 digits)';
        }
        break;
      case 'name':
        if (value.length < 2) {
          return 'Name must be at least 2 characters';
        }
        break;
      case 'message':
        if (value.length < 10) {
          return 'Message must be at least 10 characters';
        }
        break;
    }
    return '';
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    
    // Only validate if the field is required and has been touched
    if (name in errors || ['name', 'email', 'phone', 'message'].includes(name)) {
      const error = validateField(name, formData[name as keyof FormData] as string);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;
    
    const newValue = type === 'checkbox' ? checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));
    
    // Only validate if the field has been touched before
    if (touched[name] || name in errors) {
      const error = validateField(name, newValue as string);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleLocationSelect = (city: string) => {
    setFormData(prev => ({
      ...prev,
      location: city
    }));
    setShowLocationDropdown(false);
  };

  const handleServiceTypeSelect = (type: string) => {
    setFormData(prev => ({
      ...prev,
      serviceType: prev.serviceType === type ? '' : type
    }));
  };

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    // Allows international phone numbers, with optional + and spaces/dashes
    const re = /^[+]?[\s.-]?[0-9\s.-]{8,}$/;
    return re.test(phone);
  };

  const validateForm = (): boolean => {
    // Mark all fields as touched to show all errors
    const newTouched: TouchedFields = {
      name: true,
      email: true,
      phone: true,
      message: true
    };
    setTouched(newTouched);
    
    // Validate all fields
    const newErrors: FormErrors = {};
    let isValid = true;
    
    const fieldsToValidate = ['name', 'email', 'phone', 'message'] as const;
    
    fieldsToValidate.forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });
    
    setErrors(newErrors);
    return isValid;
  };

  // Mock function for development
  const mockSubmitForm = async (data: FormData): Promise<{ success: boolean; message?: string }> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real app, you would remove this and use the actual Web3Forms API
    console.log('Form submitted:', data);
    return { 
      success: true, 
      message: 'Thank you! Your message has been sent successfully.' 
    };
  };

  // Real Web3Forms submission
  const submitToWeb3Forms = async (data: FormData): Promise<{ success: boolean; message?: string }> => {
    const formDataToSend = new FormData();
    formDataToSend.append('access_key', '77ce8064-c6e3-4209-9579-bb83915a2796');
    formDataToSend.append('name', data.name);
    formDataToSend.append('email', data.email);
    formDataToSend.append('phone', data.phone);
    formDataToSend.append('location', data.location);
    formDataToSend.append('service_type', data.serviceType);
    formDataToSend.append('message', data.message);
    formDataToSend.append('subscribe', data.subscribe ? 'Yes' : 'No');
    formDataToSend.append('subject', 'New Contact Form Submission');
    formDataToSend.append('from_name', 'Pokum Contact Form');
    formDataToSend.append('botcheck', '');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });
      return await response.json();
    } catch (error) {
      console.error('Submission error:', error);
      return { 
        success: false, 
        message: 'Network error. Please try again later.' 
      };
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validate form fields
    if (!validateForm()) {
      toast.error('Please fill in all required fields correctly');
      return;
    }

    setIsSubmitting(true);
    setError('');
    
    // Show loading toast
    const toastId = toast.loading('Sending your message...');

    try {
      // Use mock in development, real API in production
      // const result = await mockSubmitForm(formData);
      const result = await submitToWeb3Forms(formData);
      
      if (result.success) {
        // Show success toast
        toast.success(result.message || 'Message sent successfully!', { id: toastId });
        
        // Reset form
        setFormData({
          name: '',
          location: '',
          email: '',
          phone: '',
          serviceType: '',
          message: '',
          subscribe: false
        });
        
        // Reset form state
        setTouched({});
        setErrors({});
        setIsSuccess(true);
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to send message';
      setError(errorMessage);
      toast.error(errorMessage, { id: toastId });
    } finally {
      if (!isSubmitting) {
        toast.dismiss(toastId);
      }
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-center" richColors closeButton />

      {/* Hero Section */}
      <section className="bg-white pt-48 pb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Background decorative text */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] overflow-hidden">
            <div className="text-[180px] font-bold text-black font-helvetica-world tracking-tight whitespace-nowrap">
              pokumpokumpokum
            </div>
          </div>
          
          <div className="relative z-10">
            <div className="relative">
              <div className="relative z-0">
                <h1 className="text-[80px] sm:text-[100px] md:text-[120px] lg:text-[151px] font-bold text-black font-helvetica-world tracking-tight whitespace-nowrap">
                  Contact Us
                </h1>
              </div>
              
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 pr-8 z-10">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e0728f26d3bdf73e27a4231eca2857954f325cb7?width=1200" 
                  alt="Vintage rotary phone" 
                  className="w-full h-auto max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="absolute bottom-20 left-0 right-0 border-t border-black/40"></div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white py-20 pb-64">
        <div className="w-full px-4 sm:px-8 md:px-16 lg:px-[120px]">
          <div className="max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            {/* Contact Information */}
            <div className="space-y-12">
              <div className="space-y-5">
                <h2 className="text-4xl font-bold text-black font-helvetica-world">Contact Information</h2>
                <p className="text-lg text-gray-500 font-helvetica-world leading-7">
                  Masih ada pertanyaan? Isi form berikut ini. Tim kami akan segera menghubungi Anda dalam kurun waktu 1 x 24 jam.
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-gray-500 font-helvetica-world">or contact us via other channels:</p>
                
                <div className="space-y-7">
                  <div className="flex items-center space-x-3">
                    <img 
                      src="https://res.cloudinary.com/dn8wwzjaj/image/upload/v1759824828/contact-mail_o98ifc.png" 
                      alt="Email" 
                      className="w-5 h-5 object-contain"
                    />
                    <a href="mailto:pohonhukum.id@gmail.com" className="text-lg text-gray-700 font-helvetica-world hover:underline">corporate@pokum.id</a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <img 
                      src="https://res.cloudinary.com/dn8wwzjaj/image/upload/v1759824839/contact-phone_wasjti.png" 
                      alt="Phone" 
                      className="w-5 h-5 object-contain"
                    />
                    <a href="tel:+6282283863111" className="text-lg text-gray-700 font-helvetica-world hover:underline">+62 822-8386-3111</a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <img 
                      src="https://res.cloudinary.com/dn8wwzjaj/image/upload/v1759824782/contact-tiktok_lawkiw.png" 
                      alt="TikTok" 
                      className="w-5 h-5 object-contain"
                    />
                    <a 
                      href="https://www.tiktok.com/@pohonhukumindonesia?_t=ZS-90Yo6HcAlvN&_r=1" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-lg text-gray-700 font-helvetica-world hover:underline"
                    >
                      Pokum
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <img 
                      src="https://res.cloudinary.com/dn8wwzjaj/image/upload/v1759824820/contact-instagram_nhvc1m.png" 
                      alt="Instagram" 
                      className="w-5 h-5 object-contain"
                    />
                    <a 
                      href="https://www.instagram.com/pokum.id" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-lg text-gray-700 font-helvetica-world hover:underline"
                    >
                      pokum.id
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <img 
                      src="https://res.cloudinary.com/dn8wwzjaj/image/upload/v1759824824/contact-linkedin_dohk1z.png" 
                      alt="LinkedIn" 
                      className="w-5 h-5 object-contain"
                    />
                    <a 
                      href="https://www.linkedin.com/company/pokum-id" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-lg text-gray-700 font-helvetica-world hover:underline"
                    >
                      Pokum ID
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {isSuccess ? (
                <div className="bg-green-50 text-green-800 p-6 rounded-lg text-center">
                  <div className="text-4xl mb-4">🎉</div>
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="mb-4">Your message has been sent successfully. We'll get back to you soon!</p>
                  <Button 
                    onClick={() => setIsSuccess(false)}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {error && (
                    <div className="bg-red-50 text-red-700 p-4 rounded-lg">
                      {error}
                    </div>
                  )}
                {/* Name and Location Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="bg-blue-50/30 p-4 rounded">
                      <div className="w-full">
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          placeholder="My name is" 
                          className={`w-full bg-transparent text-xl text-black font-helvetica-world placeholder-black/40 border-none outline-none ${touched.name && errors.name ? 'border-b-2 border-red-500' : ''}`}
                          required
                        />
                        {touched.name && errors.name && (
                          <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                        )}
                      </div>
                  </div>
                  <div className="relative">
                    <div 
                      className="bg-blue-50/30 p-4 rounded flex items-center justify-between cursor-pointer"
                      onClick={() => setShowLocationDropdown(!showLocationDropdown)}
                    >
                      <input 
                        type="text" 
                        name="location"
                        value={formData.location}
                        readOnly
                        placeholder="I am based in" 
                        className="w-full bg-transparent text-xl text-black font-helvetica-world placeholder-black/40 border-none outline-none cursor-pointer"
                        required
                      />
                      <ChevronDown className={`w-6 h-6 text-black ml-2 transition-transform ${showLocationDropdown ? 'rotate-180' : ''}`} />
                    </div>
                    {showLocationDropdown && (
                      <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
                        {indonesianCities.map((city) => (
                          <div 
                            key={city}
                            className="p-3 hover:bg-gray-100 cursor-pointer flex items-center"
                            onClick={() => handleLocationSelect(city)}
                          >
                            {formData.location === city && <Check className="w-4 h-4 mr-2 text-blue-600" />}
                            <span className={formData.location === city ? 'font-medium text-blue-600' : ''}>
                              {city}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Email and Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="bg-blue-50/30 p-4 rounded">
                    <div className="w-full">
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="Email" 
                        className={`w-full bg-transparent text-xl text-black font-helvetica-world placeholder-black/40 border-none outline-none ${touched.email && errors.email ? 'border-b-2 border-red-500' : ''}`}
                        required
                      />
                      {touched.email && errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  <div className="bg-blue-50/30 p-4 rounded">
                    <div className="w-full">
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="Phone Number (e.g., +62 812-3456-7890)" 
                        className={`w-full bg-transparent text-xl text-black font-helvetica-world placeholder-black/40 border-none outline-none ${touched.phone && errors.phone ? 'border-b-2 border-red-500' : ''}`}
                        required
                      />
                      {touched.phone && errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Help Type Selection */}
                <div className="space-y-8">
                  <h3 className="text-xl font-bold text-gray-700 font-helvetica-world">I need help with: <span className="text-red-500">*</span></h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {serviceTypes.map((type) => (
                      <div 
                        key={type}
                        className="flex items-center space-x-3 cursor-pointer"
                        onClick={() => handleServiceTypeSelect(type)}
                      >
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${formData.serviceType === type ? 'bg-blue-600 border-2 border-blue-600' : 'border-2 border-black/60'}`}>
                          {formData.serviceType === type && <Check className="w-4 h-4 text-white" />}
                        </div>
                        <span className={`text-xl font-helvetica-world ${formData.serviceType === type ? 'text-black' : 'text-gray-700/60'}`}>
                          {type}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <div className="w-full">
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder="Write your question or message here" 
                      rows={4}
                      className={`w-full bg-blue-50/30 p-5 rounded text-xl text-black font-helvetica-world placeholder-black/40 border-none outline-none resize-none ${touched.message && errors.message ? 'border-b-2 border-red-500' : ''}`}
                      required
                    />
                    {touched.message && errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                    )}
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                  <div 
                    className="flex items-center space-x-3 cursor-pointer"
                    onClick={() => setFormData(prev => ({ ...prev, subscribe: !prev.subscribe }))}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${formData.subscribe ? 'bg-blue-600 border-2 border-blue-600' : 'border-2 border-black/60'}`}>
                      {formData.subscribe && <Check className="w-4 h-4 text-white" />}
                    </div>
                    <span className="text-xl text-gray-700 font-helvetica-world">Opt in for the mailing list</span>
                  </div>

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-8 py-5 rounded-xl font-bold text-lg group transition-colors"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Inquiry
                        <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
              )}
            </div>
          </div>
        </div>
      </div>
      </section>

    </div>
  );
}
