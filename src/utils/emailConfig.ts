// Initialize EmailJS with your public key
import emailjs from '@emailjs/browser';

export const initEmailJS = () => {
  emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your EmailJS public key
};