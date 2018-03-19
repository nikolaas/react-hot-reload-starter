import React from 'react';

export class RouteLoading extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            delay: 200,
            pastDelay: false,
        };

        this.timeout = setTimeout(() => {
            this.setState({ pastDelay: true });
            this.timeout = null;
        }, this.state.delay);
    }

    componentWillUnmount() {
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
    }

    render() {
        const { pastDelay } = this.state;
        return pastDelay ? <div>Loading...</div> : null;
    }

}
