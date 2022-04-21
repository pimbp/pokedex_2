import React from 'react'
import { Button } from 'react-bootstrap'

class SortByIdAsc extends React.Component
{
    render=()=>
    {
        return(
            <Button variant="outline-primary" onClick={()=>this.props.setSortBy('asc')}>Sort by id asc</Button>
        );
    }
}
export default SortByIdAsc;