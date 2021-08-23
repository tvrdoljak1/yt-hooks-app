import React from 'react';
import './SearchBar.css'

class SearchBar extends React.Component{

    state = {term: ''}

    onInputChange = (event) => {
        this.setState({term: event.target.value});
    }

    onInputSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
        
    }



    render(){
        return(
            <div className="Search-bar">
                <form action="" onSubmit={this.onInputSubmit}>
                    <div className="ui category search search">
                        <div className="ui icon input">
                            <input onChange={this.onInputChange} value={this.state.term} className="prompt input" type="text" placeholder="Search videos..."></input>
                            <i className="search icon"></i>
                        </div>
                        <div className="results"></div>
                    </div>
                </form> 
            </div>
        );
    }
}

export default SearchBar;