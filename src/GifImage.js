import React, { PureComponent } from 'react';

class GifImage extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            hover: false
        };
    }
    render() {
        const { hover } = this.state;
        const { still, active } = this.props;
        return (
            <img
            onMouseEnter={() => this.setState({ hover: true })}
            onMouseLeave={() => this.setState({ hover: false })}
            src={hover ? active : still}
            />
        )
    }
}
export default GifImage;