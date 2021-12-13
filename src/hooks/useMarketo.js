import { useState, useEffect } from 'react';

function appendScript(baseUrl, setScriptLoaded) {
	if (window.MktoForms2) return setScriptLoaded(true);

	const script = document.createElement('script');
	script.src = `${baseUrl}/js/forms2/js/forms2.min.js`;
	script.async = true;
	script.onload = () => (window.MktoForms2 ? setScriptLoaded(true) : null);
	document.body.appendChild(script);
}

function useMarketo({ baseUrl, munchkinId, formId, modal, user, callback }) {
	const [scriptLoaded, setScriptLoaded] = useState(false);

	//marketo reloads this script anytime something on the page rerenders. To avoid this behavior,
	//the loadform method is only called if the form tag has no children in its array.
	//the modal would render the form twice because it has the same id and already exists on the pages,
	//so the modal as a bool is passed in to conditionally call the appendScript function.

	useEffect(() => {
		const form = document.getElementById(`mktoForm_${formId}`);
		if (scriptLoaded && !form.children.length) {
			window.MktoForms2.loadForm(baseUrl, munchkinId, formId, callback);

			return;
		}
		!modal && appendScript(baseUrl, setScriptLoaded);
	}, [scriptLoaded, baseUrl, munchkinId, formId, modal, callback]);

	return [scriptLoaded];
}

export default useMarketo;
