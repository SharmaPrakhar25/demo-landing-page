import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { API_ENDPOINTS, VALIDATION_MESSAGES } from '@/lib/constants';

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

const initialFormData: ContactFormData = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  service: "",
  message: "",
};

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const { toast } = useToast();

  const submitContactForm = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", API_ENDPOINTS.CONTACT, data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: VALIDATION_MESSAGES.MESSAGE_SUCCESS,
      });
      setFormData(initialFormData);
    },
    onError: (error) => {
      console.error('Contact form error:', error);
      toast({
        title: "Error",
        description: VALIDATION_MESSAGES.MESSAGE_ERROR,
        variant: "destructive",
      });
    },
  });

  const validateForm = (data: ContactFormData): boolean => {
    const required = ['firstName', 'lastName', 'email', 'service', 'message'] as const;
    return required.every(field => data[field].trim() !== '');
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm(formData)) {
      toast({
        title: "Missing Information",
        description: VALIDATION_MESSAGES.REQUIRED_FIELDS,
        variant: "destructive",
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      toast({
        title: "Invalid Email",
        description: VALIDATION_MESSAGES.EMAIL_INVALID,
        variant: "destructive",
      });
      return;
    }

    submitContactForm.mutate(formData);
  };

  return {
    formData,
    handleInputChange,
    handleSubmit,
    isSubmitting: submitContactForm.isPending,
    isSuccess: submitContactForm.isSuccess,
    error: submitContactForm.error,
  };
} 