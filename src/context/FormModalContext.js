import React, { useState, createContext } from 'react';

const FormModalContext = createContext();

export function FormModalProvider({ children }) {
	const [formModalOpen, setFormModalOpen] = useState(false);
	//handles state for email input in hero
	const [email, setEmail] = useState(null);

	//handler for opening the form modal
	const handleModalClick = () => {
		setFormModalOpen(true);
	};
	return (
		<FormModalContext.Provider
			value={{
				formModalOpen,
				setFormModalOpen,
				handleModalClick,
				email,
				setEmail,
			}}>
			{children}
		</FormModalContext.Provider>
	);
}

export default FormModalContext;
