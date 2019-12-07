import React, {Component} from 'react';
import CardList from './CardList';
import {myFriends} from './myFriends';
import SearchBox from './SearchBox';
import './App.css';


class App extends Component {

    constructor() {
        super()
        this.state = {
            myFriends: myFriends,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {        
        this.setState({searchfield: event.target.value})
    }

    render(){
        const filteredFriends = this.state.myFriends.filter((friend) => {
            return friend.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            <div className="tc" >       
                <h1 className="f1">RoboFamily</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <CardList myFriends={filteredFriends}/>;
            </div>
        );
    }
}


export default App;