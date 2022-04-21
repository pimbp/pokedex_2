import React from 'react'
import Tile from './tile'
import Searchbox from '../utils/searchbox'
import SortByIdAsc from "../utils/sortByIdAsc";
import SortByIdDesc from "../utils/sortByIdDesc";
import SortByNameAsc from "../utils/sortByNameAsc";
import SortByNameDesc from "../utils/sortByNameDesc";
import Toggle from "../utils/toggle_button";
import axios from "axios";

class View extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state=
            {
                params: {name: '',
                sortByName: '',
                sortById: 'asc',
                type: []},
                reload: true,
                pokemon: new Array()
            }
    }
    setName=(value)=>
    {
        this.setState({params:{name: value}});
    }
    setSortByName=(value)=>
    {
        this.setState({params:{sortByName: value}});
    }
    setSortById=(value)=>
    {
        this.setState({params:{sortById: value}});
    }
    addType=(value)=>
    {
        this.state.params.type.push(value);
    }
    remType=(value)=>
    {
        this.state.params.type.splice(value, 1);
    }
    setReload=()=>
    {
        this.setState({reload: !this.state.reload})
    }
    render=()=> {
        console.log(this.state.params);
        axios.get("http://localhost:8000/api/pokedex", {params: this.state.params}).then((res)=>{
            this.state.pokemon = res.data;
            console.log(this.state.pokemon);
        })
        return (
            <div style={{border: '3px solid black', borderRadius: '3px', width: '700px', height: '700px', float: 'left' }}>
                <div style={{border: '3px solid black', borderRadius: '5px', width: '80%', marginLeft: '10%', height: '7%', marginTop: '10px'}}>
                    <Searchbox name={this.state.params.name} setName={this.setName}></Searchbox>
                </div>
                <div style={{border: '3px solid black', borderRadius: '5px', width: '82%', marginLeft: '8.5%', height: '6%', marginTop: '10px'}}>
                    <SortByIdAsc setSortBy={this.setSortById}></SortByIdAsc>
                    <SortByIdDesc setSortBy={this.setSortById}></SortByIdDesc>
                    <SortByNameAsc setSortBy={this.setSortByName}></SortByNameAsc>
                    <SortByNameDesc setSortBy={this.setSortByName}></SortByNameDesc>
                </div>
                <div style={{border: '3px solid black', borderRadius: '5px', width: '80%', marginLeft: '10%', height: '20%', marginTop: '10px'}}>
                    <Toggle addType={this.addType} types={this.state.params.type} remType={this.remType} setReload={this.setReload}>Normal</Toggle>
                    <Toggle addType={this.addType} types={this.state.params.type} remType={this.remType} setReload={this.setReload}>Fighting</Toggle>
                    <Toggle addType={this.addType} types={this.state.params.type} remType={this.remType} setReload={this.setReload}>Flying</Toggle>
                    <Toggle addType={this.addType} types={this.state.params.type} remType={this.remType} setReload={this.setReload}>Poison</Toggle>
                    <Toggle addType={this.addType} types={this.state.params.type} remType={this.remType} setReload={this.setReload}>Ground</Toggle>
                    <Toggle addType={this.addType} types={this.state.params.type} remType={this.remType} setReload={this.setReload}>Rock</Toggle>
                    <Toggle addType={this.addType} types={this.state.params.type} remType={this.remType} setReload={this.setReload}>Bug</Toggle>
                    <Toggle addType={this.addType} types={this.state.params.type} remType={this.remType} setReload={this.setReload}>Ghost</Toggle>
                    <Toggle addType={this.addType} types={this.state.params.type} remType={this.remType} setReload={this.setReload}>Steel</Toggle>
                    <Toggle addType={this.addType} types={this.state.params.type} remType={this.remType} setReload={this.setReload}>Fire</Toggle>
                    <Toggle addType={this.addType} types={this.state.params.type} remType={this.remType} setReload={this.setReload}>Water</Toggle>
                    <Toggle addType={this.addType} types={this.state.params.type} remType={this.remType} setReload={this.setReload}>Grass</Toggle>
                    <Toggle addType={this.addType} types={this.state.params.type} remType={this.remType} setReload={this.setReload}>Electric</Toggle>
                    <Toggle addType={this.addType} types={this.state.params.type} remType={this.remType} setReload={this.setReload}>Psychic</Toggle>
                    <Toggle addType={this.addType} types={this.state.params.type} remType={this.remType} setReload={this.setReload}>Ice</Toggle>
                    <Toggle addType={this.addType} types={this.state.params.type} remType={this.remType} setReload={this.setReload}>Dragon</Toggle>
                    <Toggle addType={this.addType} types={this.state.params.type} remType={this.remType} setReload={this.setReload}>Dark</Toggle>
                    <Toggle addType={this.addType} types={this.state.params.type} remType={this.remType} setReload={this.setReload}>Fairy</Toggle>


                </div>
                    <div style={{border: '3px solid black', borderRadius: '5px', width: '80%', marginLeft: '10%', height: '60%', marginTop: '10px', overflow: 'auto'}}>
                        <Tile pokemon={this.state.pokemon} setReload={this.setReload}></Tile>
                    </div>
            </div>
        );
    }
}
export default View;