import React from 'react'
import { Button } from 'react-bootstrap'

class SortByIdDesc extends React.Component
{
    render=()=>
    {
        return(
            <Button variant="outline-primary" onClick={()=>this.props.setSortBy('desc')}>Sort by id desc</Button>
        );
    }
}
export default SortByIdDesc;