import React, { Component } from 'react';
import es from './lang/es.json';
import en from './lang/en.json';
import './App.css';

class AboutMe extends React.Component {
	render () {
	const aboutMeHeader = (this.props.lang === "ES") ? es.aboutme.header : en.aboutme.header;
	const aboutMeDescription = (this.props.lang === "ES") ? es.aboutme.description : en.aboutme.description;
	return	(
		<section className="about-me">
			<h2>{aboutMeHeader}</h2>
			<p>{aboutMeDescription}</p>
		</section>
	);
	}
}

class Skills extends React.Component {
	render () {
	return	(
		<div className="highlights">
		<section className="main-skills">
			<div className="skills">
				<h2>Main Skills</h2>
				<h3>Business Analysis</h3>
				<p className="description description-below">Worked in agile projects as a Business Analyst for over three years, eliciting requirements, managing the backlog, identifying risks and involving customers at early stages. Ensuring just the right amount of documentation is written</p>
				<h3>Project Management</h3>
				<p className="description description-below">Worked as a Project Manager assisting Senior Project Managers in monitoring agile projects as well as coordinating operations projects when I was a Team Lead</p>
				<h3>Software Development</h3>
				<p className="description description-below">Worked as a Software Engineer in web-based Java projects. Passionate about software, I have also developed some Web and Mobile freelance  projects</p>
			</div>
		</section>
		<section className="soft-skills">
			<div className="skills">
				<h2>Soft Skills</h2>
				<h3>People Management</h3>
				<p className="description description-below">As a Team Lead I aimed to have a motivated inspired team, encouraging an open and honest approach. As a Business Analyst, I involve stakeholders to ensure a strong buy-in, leveraging their ideas and knowledge</p>
				<h3>Time Management</h3>
				<p className="description description-below">As a Team Lead, I ensured tight SLAs were met as well as I managed customers and partners expectations. As a Business Analyst, I prioritise the backlog to deliver value on a regular basis</p>
				<h3>Problem Solving</h3>
				<p className="description description-below">As a Business Analyst and also as a Team Lead I have been required to make decisions in scenarios of high uncertainty at the same time I had to identify the best available solution</p>
			</div>
		</section>
		</div>
	);
	}
}

class Certifications extends React.Component {
	render () {
	return	(
		<div className="highlights">
		<section className="certifications">
			<div className="skills">
				<h2>Most Recent Certifications</h2>
				<p className="description description-above"><span className="year">2017</span> University of Alberta</p>
				<h3>Agile Planning for Sofware Products</h3>
				<p className="description description-above"><span className="year">2017</span> University of Alberta</p>
				<h3>Software Processes and Agile Practices</h3>
				<p className="description description-above"><span className="year">2016</span> IELTS</p>
				<h3>IELTS English Certification</h3>
			</div>
		</section>
		<section className="languages">
			<div className="skills">
				<h2>Languages</h2>
				<h3>English</h3>
				<p className="description description-below">Business Fluent</p>
				<h3>Spanish</h3>
				<p className="description description-below">Native Speaker</p>
				<h3>Italian</h3>
				<p className="description description-below">Basic</p>
			</div>
		</section>
		</div>
	);
	}
}

class WorkingExperience extends React.Component {
	render () {
	return	(
		<section className="working-experience">
			<h1>Working Experience</h1>
			{/* IT BUSINESS ANALYST */}
			<article className="working-experience-item">
				<div className="working-experience-header">
					<div className="role">
						<div className="working-period">10/2017 - Present</div>
						<h2>IT Business Analyst</h2>
					</div>
					<div className="employer">
						<div className="company-name"><span className="work-at">@</span>Bookassist</div>
					</div>
				</div>
				<div className="working-experience-description">
					<p className="description description-below">Bookassist partners with hotels to build their brand online, drive direct business to their branded website and capture bookings with world class booking technology helping them optimise their online distribution and grow their margin per booking.</p>
					<p className="description description-below">As an IT Business Analyst I am involved in the definition of several web and mobile projects aiming to grow and improve Bookassist’s Booking Engine technology.</p>
				</div>
				<h3 className="responsibilities">Key Responsibilities</h3>
				<ul className="responsibilities-list description description-below">
					<li className="responsibility">Collect, categorise and track the Product Backlog from existing requirements as well as from new requirements</li>
					<li className="responsibility">Identify the key needs, define the minimum viable product, propose the scope, assess the risks and impact on existing products and processes, and calculate the cost-benefit</li>
					<li className="responsibility">Manage product requirements from several sources including market research, key stakeholders within the business, strategic requirements and customer requests</li>
					<li className="responsibility">Translate requirements into specific Projects, EPICs and User Stories with clear and concise documentation of business and functional requirements</li>
					<li className="responsibility">Collaborate with the Development Team to ensure the projects are understood, to clarify requirements and to solve problems when they arise</li>
					<li className="responsibility">Manage stakeholder sign-off, communicate benefits and resolve issues</li>
				</ul>
			</article>

			{/* OPERATIONS TEAM LEAD */}
			<article className="working-experience-item">
				<div className="working-experience-header">
					<div className="role">
						<div className="working-period">09/2015 - 10/2017</div>
						<h2>Operations Team Lead</h2>
					</div>
					<div className="employer">
						<div className="company-name"><span className="work-at">@</span>Realex Payments</div>
					</div>
				</div>
				<div className="working-experience-description">
					<p className="description description-below">As an Operations Team Lead I offer 
					guidance to a group of technical specialists in order to facilitate the integration 
					process to our customers in the UK, Ireland and Spain.</p>
					<p className="description description-above">I am mainly focused on Managed Services 
					which requires constant communication with our partners, three large financial 
					institutions in Europe.</p>
				</div>
				<h3 className="responsibilities">Key Responsibilities</h3>
				<ul className="responsibilities-list description description-below">
					<li className="responsibility">Acting as a technical point of contact for partners and strategical prospect clients</li>
					<li className="responsibility">Managing any deterioration in service levels</li>
					<li className="responsibility">Reviewing and improving processes and procedures both internal and with partners</li>
				</ul>
			</article>

			{/* OPERATIONS ANALYST */}
			<article className="working-experience-item">
				<div className="working-experience-header">
					<div className="role">
						<div className="description description-above">11/2013 - 08/2015</div>
						<h2>Operations Analyst</h2>
					</div>
					<div className="employer">
						<div className="company-name"><span className="work-at">@</span>Realex Payments</div>
					</div>
				</div>
				<div className="working-experience-description">
					<p className="description description-below">As an Operations Analyst I helped a large list 
					of customers who wanted to integrate our payments services into their eCommerce platforms 
					such as websites and mobile apps.</p>
				</div>
				<h3 className="responsibilities">Key Responsibilities</h3>
				<ul className="responsibilities-list description description-below">
					<li className="responsibility">Guiding new customers through the integration process, assisting 
					them to bring their product or service to the market</li>
					<li className="responsibility">Acting as primary contact to clients, providing advice on resolving 
					technical issues</li>
				</ul>
			</article>

			{/* MOBILE AND WEB DEVELOPER */}
			<article className="working-experience-item">
				<div className="working-experience-header">
					<div className="role">
						<div className="description description-above">10/2012 - 10/2013</div>
						<h2>Mobile and Web Developer</h2>
					</div>
					<div className="employer">
						<div className="company-name"><span className="work-at">@</span>Freelance</div>
					</div>
				</div>
				<div className="working-experience-description">
					<p className="description description-below">As a Developer I worked on both personal and third 
					part projects. Primary goals of the projects were typically user-friendly UI and UX, and a good 
					example is TheIdiomsBook, an Android App rated above 4.5/5 on Google Play.</p>
				</div>
				<h3 className="responsibilities">Key Responsibilities</h3>
				<ul className="responsibilities-list description description-below">
					<li className="responsibility">Meeting with customers during the entire development process to 
					understand their vision</li>
					<li className="responsibility">Facilitating regular feedback with prototypes and demos</li>
				</ul>
			</article>

			{/* BUSINESS ANALYST / PROJECT MANAGER */}
			<article className="working-experience-item">
				<div className="working-experience-header">
					<div className="role">
						<div className="description description-above">03/2010 - 10/2012</div>
						<h2>Business Analyst / Project Manager</h2>
					</div>
					<div className="employer">
						<div className="company-name"><span className="work-at">@</span>SIANI</div>
					</div>
				</div>
				<div className="working-experience-description">
					<p className="description description-below">As a Business Analyst I was responsible for eliciting 
					requirements with customers and helping the Development Team to understand our clients needs, 
					as well as to assist the Senior Project Manager to monitor and control the project progress.</p>
				</div>
				<h3 className="responsibilities">Key Responsibilities</h3>
				<ul className="responsibilities-list description description-below">
					<li className="responsibility">Managing requirements on a fast-paced agile environment</li>
					<li className="responsibility">Gathering and eliciting requirements having regular face to face 
					meetings with customers</li>
					<li className="responsibility">Discussing requirements with the development team on a daily basis 
					and documenting accordingly</li>
					<li className="responsibility">Collecting feedback from customers via on-site demos</li>
				</ul>
			</article>

			{/* SOFTWARE ENGINEER */}
			<article className="working-experience-item">
				<div className="working-experience-header">
					<div className="role">
						<div className="description description-above">03/2008 - 02/2010</div>
						<h2>Software Engineer</h2>
					</div>
					<div className="employer">
						<div className="company-name"><span className="work-at">@</span>SIANI</div>
					</div>
				</div>
				<div className="working-experience-description">
					<p className="description description-below">As a Software Engineer I was part of a Development 
					Team who strived to deliver high quality software at a fast pace. I was involved in both 
					front-end and back-end development of systems primarily focused on the Public Sector.</p>
				</div>
				<h3 className="responsibilities">Key Responsibilities</h3>
				<ul className="responsibilities-list description description-below">
					<li className="responsibility">Analysing and evaluating requirements provided</li>
					<li className="responsibility">Developing new features according to specifications</li>
					<li className="responsibility">Maintaining and refactoring code on a regular basis to 
					facilitate scalability</li>
					<li className="responsibility">Testing developed features to ensure acceptance</li>
				</ul>
			</article>
		</section>
	);
	}
}

class Education extends React.Component {
	render () {
	return	(
		<section className="education">
			<h1>Education</h1>
			{/* MASTERS DEGREE IN COMPUTER ENGINEERING */}
			<article className="education-item">
				<div className="education-header">
					<div className="">
						<div className="studying-period">2009</div>
						<h2>Master's Degree in Computer Engineering</h2>
					</div>
					<div className="">
						<div className="institution-name">University of Las Palmas de Gran Canaria</div>
					</div>
				</div>
				<div className="education-description">
					<p className="description description-below">First Class Honours</p>
				</div>
			</article>

			<article className="education-item">
				<div className="education-header">
					<div className="">
						<div className="studying-period">2004</div>
						<h2>Bachelor's Degree in Computer Engineering</h2>
					</div>
					<div className="">
						<div className="institution-name">University of Las Palmas de Gran Canaria</div>
					</div>
				</div>
				<div className="education-description">
					<p className="description description-below">Second Class Honours</p>
				</div>
			</article>
		</section>
	);
	}
}

class Menu extends React.Component {

	print() {
		window.print();
	}

	render () {
	return	(
		<div className="top-menu-container">
		<ul className="top-menu">
			<li>
				<a className="top-menu-item" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/elielcruzlopez/">LinkedIn</a>
			</li>
			<li>
				<a className="top-menu-item" rel="noopener noreferrer" target="_blank" href="https://github.com/elielcruz">GitHub</a>
			</li>
			<li>
				<button className="button-cv" onClick={this.print} >Print</button>
			</li>
		</ul>
		</div>
	);
	}
}

class App extends Component {
	constructor () {
    	super();
    	this.state = {
      		lang: "EN",
    	};
    	this.handleLangSwitch = this.handleLangSwitch.bind(this);
	}

	handleLangSwitch(lang) {
		this.setState({lang});
	}

	render() {
	return (
	  <div className="App">
	  	<Menu lang={this.state.lang}/>
	    <div className="App-header">
	    <div className="App-header-container">
      	<div className="page-title">
      		<div className="first-name">Eliel <span className="phoneme">/ɛli'ɛl/</span></div>
      		<div className="last-name">Cruz Lopez</div>
      	</div>
	      <div className="contact-details">
	      	<a href="tel:+353-83-158-2291" className="phone">+353 (0) 83 158 2291</a>
	      	<a href="mailto:elielcruz@gmail.com" className="email">elielcruz@gmail.com</a>
	      </div>
	    </div>
	    </div>
	    <div className="App-body">
	    	<AboutMe lang={this.state.lang}/>
	    	<Skills lang={this.state.lang}/>
	    	<Certifications lang={this.state.lang}/>
	    	<WorkingExperience lang={this.state.lang}/>
	    	<Education lang={this.state.lang}/>
	    </div>
	  </div>
	);
	}
}

export default App;
