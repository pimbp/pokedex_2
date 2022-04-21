import React from 'react'
import { ToggleButton } from "react-bootstrap";
class Toggle extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            checked: false,
        }
    }
    render=()=> {
        return (
            <ToggleButton
                className="mb-2"
                id={this.props.children}
                type="checkbox"
                variant="outline-primary"
                checked={this.state.checked}
                value="1"
                onClick={() => {
                    this.props.setReload();
                    this.setState({checked: !this.state.checked});
                    if(this.props.types.includes(this.props.children))
                    {
                        this.props.remType(this.props.types.indexOf(this.props.children));
                    }
                    else {
                        this.props.addType(this.props.children)
                    }}}>
                {this.props.children}
            </ToggleButton>
        )
    }
}

export default Toggle;