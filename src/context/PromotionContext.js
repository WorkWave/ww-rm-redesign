import React, { useState, createContext } from 'react';

const PromotionContext = createContext();

export function PromotionProvider({ children }) {
	const [open, setOpen] = useState(true);
	return (
		<PromotionContext.Provider value={{ open, setOpen }}>
			{children}
		</PromotionContext.Provider>
	);
}

export default PromotionContext;
