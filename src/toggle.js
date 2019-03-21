import React from 'react';

export class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn : true};
        // this.handleToggle = this.handleToggle.bind(this);
        // this.handleToggle = () => {
        //     this.setState({isToggleOn: !this.state.isToggleOn});
        // }
    }

    handleToggle(id){
            this.setState({isToggleOn: !this.state.isToggleOn});
            console.log(id);
        }

    // handleToggle = (id) =>  {
    //     this.setState({isToggleOn: !this.state.isToggleOn});
    //     console.log(id);
    // }

    render() {
        return (
            <button onClick={this.handleToggle.bind(this, 'id')}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
        )
    }

}