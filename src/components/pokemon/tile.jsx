import React from 'react';
import { Card } from 'react-bootstrap';

class Tile extends React.Component
{
    render=()=>{
            return(
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    {this.props.pokemon.map(item=>{
                        return(<Card style={{ width: '20%', height: '50%' }}>
                                <Card.Img variant='top' src={require('./assets/images/' + item.id.toString().padStart(3, '0') + '.png')}/>
                                <Card.Body>
                                     <Card.Title style={{fontSize: '12px'}}>{item.name.english}</Card.Title>
                                 </Card.Body>
                             </Card>);
                    })
                    }
                </div>
            )
    };
}
export default Tile;