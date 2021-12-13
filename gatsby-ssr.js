import React from 'react';
import { Layout } from './src/components/Layout/Layout';
import { PromotionProvider } from './src/context/PromotionContext';
import { FormModalProvider } from './src/context/FormModalContext';

export function wrapPageElement({ element, props }) {
	return <Layout {...props}>{element}</Layout>;
}

export function wrapRootElement({ element }) {
	return (
		<FormModalProvider>
			<PromotionProvider>{element}</PromotionProvider>
		</FormModalProvider>
	);
}
