import React from 'react'
import { Button } from 'react-bootstrap'

class SortByNameDesc extends React.Component
{
    render=()=>
    {
        return(
            <Button variant="outline-primary" onClick={()=>this.props.setSortBy('desc')}>Sort by name desc</Button>
        );
    }
}
export default SortByNameDesc;