import React, { Component } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import { fetchData } from '../services/userService';
import { Loader } from './components/Loader/Loader';
// import { passingTime } from '../shared/functions';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isGrid: localStorage.getItem('isGrid') === 'true' ? true : false,
			users: localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : null,
			isLoading: true,
			searchedUsers: null,
			page: 'list',
			lastTimeFetchedUsers: null,
			intervalFetch: null,
			timePassedSinceLastFetch: null,
		}
	}

	loadUsers = () => {
		if (!this.state.users) this.fetchUsers();
		else this.setState({
			isLoading: false
		});
	}

	passingTime = (start) => {
		let millis = Date.now() - start;
		let output;
	
		if (millis < 60000) {
			output = 'Less than minute';
		}
		if (millis < 3600000) {
			const minutes = Math.floor(millis / 60000);
			if (minutes < 2) output = '1 minute';
			else output = `${minutes} minutes`;
		}
		if (millis < 86400000) {
			const hours = Math.floor(millis / 3600000);
			if (hours < 2) output = 'Over an hour';
			else output = `${hours} hours`;
		}
		if (millis < 604800000) {
			const days = Math.floor(millis / 86400000);
			if (days < 2) output = 'Over a day';
			else output = `${days} days`;
		}
		if (millis < 2678400000) {
			output = 'Over a week';
		}
		else output = 'Over a month';
	
		this.setState({
			timePassedSinceLastFetch: output,
		})
	}

	fetchUsers = () => {
		const { intervalFetch } = this.state;

		fetchData()
			.then((listOfUsers) => {
				const currentTime = Date.now();
				this.setState({
					users: listOfUsers,
					isLoading: false,
					lastTimeFetchedUsers: currentTime,
				});
				return listOfUsers;
			})
			.then((listOfUsers) => {
				const start = this.state.lastTimeFetchedUsers;
				let interval;

				if (intervalFetch) {
					clearInterval(intervalFetch);
					interval = setInterval(this.passingTime, 1000, start);
				} else {
					interval = setInterval(this.passingTime, 1000, start);
				}
				
				this.setState({
					intervalFetch: interval,
				});

				localStorage.setItem('users', JSON.stringify(listOfUsers));
			});

	}

	searchUsersByName = (e) => {
		const searchInput = e.target.value.toLowerCase();
		const users = this.state.users;
		const searchedUsers = users.filter(({ fullName }) => {
			return fullName.toLowerCase().includes(searchInput);
		});
		this.setState({
			searchedUsers,
		})
	}

	handleRefreshPage = (e) => {
		e.preventDefault();
		this.setState({
			isLoading: true,
		})
		this.fetchUsers();
	}

	handleLayoutChange = (e) => {
		e.preventDefault();
		const isGrid = !this.state.isGrid;
		localStorage.setItem('isGrid', isGrid);
		this.setState({
			isGrid,
		})
	}

	handlePageLinkClick = (e) => {
		e.preventDefault();

		if (e.nativeEvent.target.outerText === 'About') {
			this.setState({
				page: 'about',
			});
		} else {
			this.setState({
				page: 'list',
			});
		}
	}

	componentDidMount() {
		this.loadUsers();
	}

	render() {
		const { isGrid, isLoading, users, searchedUsers, page, timePassedSinceLastFetch } = this.state;
		const usersToDisplay = searchedUsers ? searchedUsers : users;

		return (
			<>
				<Header
					isGrid={isGrid}
					onLayoutChange={this.handleLayoutChange}
					onRefresh={this.handleRefreshPage}
					onPageLinkClick={this.handlePageLinkClick}
				/>
				{isLoading ?
					<Loader /> :
					<Main
						isGrid={isGrid}
						page={page}
						users={usersToDisplay}
						onSearch={this.searchUsersByName}
					/>
				}
				<Footer lastFetched={timePassedSinceLastFetch} />
			</>
		)
	}
}

export default App;
