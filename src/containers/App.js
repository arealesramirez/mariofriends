import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Header from '../components/Header';
import ErrorBoundry from '../components/ErrorBoundry';
import { friends } from '../models/friends';
import './App.css';
import { setSearchField, requestFriends } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchFriends.searchField,
        friends: state.requestFriends.friends,
        isPending: state.requestFriends.isPending,
        error: state.requestFriends.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestFriends())
    }
}

class App extends Component {

    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const { searchField, onSearchChange, friends, isPending } = this.props;
        const filteredFriends = friends.filter((_friends) => {
            return _friends.name.toLowerCase().includes(searchField.toLowerCase())
        });
        return isPending ?
            <h1>Loading</h1> :
            (
                <div className='tc' >
                    <Header />
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList friends={filteredFriends} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);