import React, { Component } from "react";
import ErrorIcon from './Error.svg';
import "./App.scss";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			teamMembers: [		
"Murari", "Jhaji", "Amit Singh", "Muchchad", "Lambu", "Kida", "Potter", "Prabhu", "Ele", "Rahman", "Bhai", "Patha"
			],
			rootSrc: ""
		};
	}

	componentWillMount() {
		this.createWheelUrl();
	}

	removeMemberFromList = member => {
		let membersList = [...this.state.teamMembers];
		var index = membersList.indexOf(member);
		if (index !== -1) {
			membersList.splice(index, 1);
			this.setState({ teamMembers: membersList }, () => {
				this.createWheelUrl();
			});
		}
	};

	createMemberTag = member => {
		return (
			<div className="search-tag" key={`${member}`}>
				{member}
				<span>
					<img
            			className="search-tag-remove"
            			src={ErrorIcon}
            			alt="error"
						size={20}
						onClick={() => this.removeMemberFromList(member)}
					/>
				</span>
			</div>
		);
	};

	createMemberTags = memberList => {
		return memberList.map(member => this.createMemberTag(member));
	};

	createWheelUrl = () => {
		let iframeSrc = "https://wheeldecide.com/e.php?";
		this.state.teamMembers.map((member, index) => {
			if (index + 1 < this.state.teamMembers.length) {
				iframeSrc = `${iframeSrc}c${index + 1}=${member}&`;
			} else {
				iframeSrc = `${iframeSrc}c${index +
					1}=${member}&t=Commerce+Intelligence&time=1`;
			}
		});
		this.setState({ rootSrc: iframeSrc });
	};

	render() {
		return (
			<div className="home-page-container">
				<header className="company-name">Ludo Premier League</header>
				<div className="main-content">
					<div className="members-list-container">
						<div className="members-list-container-header">
							PLAYERS LIST:
						</div>
					<div className="members-list">
						{this.createMemberTags(this.state.teamMembers)}
					</div>
					</div>
					

					<div className="spin-wheel-container">
						<iframe
							src={this.state.rootSrc}
							width="500"
							height="500"
							scrolling="no"
              frameborder="0"
              title="spin-wheel-iframe"
						></iframe>
					</div>
					<div className="teams-container">
						<div className='teams-container-header'>
							Teams:
						</div>
						<div className="team1">
							<div>Team 1:</div>
							<textarea placeholder="Team 1"></textarea>
						</div>
						<div className="team1">
							<div>Team 2:</div>
							<textarea placeholder="Team 2"></textarea>
						</div>
						<div className="team1">
							<div>Team 3:</div>
							<textarea placeholder="Team 3"></textarea>
						</div>
					</div>
				</div>
				<footer className="footer-content">Courtesy: IT 2K10, BIT Sindri</footer>
			</div>
		);
	}
}

export default App;
