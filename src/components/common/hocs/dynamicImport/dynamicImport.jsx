import React from 'react';
// import { Something } from 'material-ui/something';

const dynamicImport = importComponent => {
	return class extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				component: null
			};
		}

		async componentDidMount() {
			const { default: component } = await importComponent();
			this.setState({ component });
		}

		render() {
			const { component: C } = this.state;
			// return C ? <C { ...this.props } /> : <Something />;
			return C ? <C { ...this.props } /> : <h3>oh, hai</h3>;
		}
	};
};

export default dynamicImport;
