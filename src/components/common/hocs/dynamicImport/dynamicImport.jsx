import React, { Suspense } from 'react';
// import { Something } from 'material-ui/something';

const dynamicImport = ImportComponent => {
	return props => (
		<Suspense fallback={ <div>placeholder for something else</div> }>
			<ImportComponent { ...props } />
		</Suspense>
	);
};

export default dynamicImport;
