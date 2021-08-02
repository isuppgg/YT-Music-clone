import { useState, useEffect } from 'react';

export const useModal = (intialValue = false) => {
   const [isOpen, setIsOpen] = useState(intialValue);

   useEffect(() => {
      const body = document.querySelector('body');
      body.style.overflow = isOpen ? 'hidden' : 'auto';
   }, [isOpen]);

   const changeVisibility = () => setIsOpen(!isOpen);
   const closeModal = () => setIsOpen(false);

   return [isOpen, changeVisibility, closeModal];
};
