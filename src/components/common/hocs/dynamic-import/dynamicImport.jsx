import React, { lazy, Suspense } from 'react';
// import { Something } from 'material-ui/something';

const dynamicImport = ImportComponent => {
	const C = lazy(ImportComponent);

	const DynamicImport = props => (
		<Suspense fallback={<div>placeholder for something else</div>}>
			<C {...props} />
		</Suspense>
	);

	DynamicImport.displayName = 'DynamicImport';
	return DynamicImport;
};

export default dynamicImport;
