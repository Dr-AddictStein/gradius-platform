import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the type for the context value
interface ModalContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

// Default context value
const defaultContextValue: ModalContextType = {
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
};

// Create the context
const ModalContext = createContext<ModalContextType>(defaultContextValue);

// Provider component
export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// Custom hook to use the modal context
export const useModal = () => useContext(ModalContext);
