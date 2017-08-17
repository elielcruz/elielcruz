import React, { Component } from 'react';
import './App.css';

class AboutMe extends React.Component {
	render () {
	return	(
		<section className="about-me">
			<h2>About Me</h2>
			<p>Passionate about Software Development and Product Management, striving to develop usable
and reliable solutions. My next career goal is to become part of a team in which I can express my
ideas in an open environment, at the same time I hear and take into account my team and
stakeholders feedback to create better and more usable products.</p>
		</section>
	);
	}
}

class Skills extends React.Component {
	render () {
	return	(
		<div>
		<section className="main-skills">
			<div className="skills left">
				<h2>Main Skills</h2>
				<h3>Business Analysis</h3>
				<p className="description description-below">Worked in agile projects for the public sector, eliciting requirements, 
				identifying risks and providing customers with regular demos.</p>
				<h3>Project Management</h3>
				<p className="description description-below">Worked as a Project Manager assisting senior project managers in monitoring 
				agile projects as well as coordinating operations projects as a Team Lead.</p>
				<h3>Software Development</h3>
				<p className="description description-below">Worked as a Software Engineer in web-based Java projects as well as a Freelance 
				Web and Mobile developer.</p>
			</div>
		</section>
		<section className="soft-skills">
			<div className="skills right">
				<h2>Soft Skills</h2>
				<h3>People Management</h3>
				<p className="description description-below">As a Team Lead I am required to lead, inspire, motivate as well as hiring, 
				training and evaluating my team.</p>
				<h3>Time Management</h3>
				<p className="description description-below">Leading two teams as well as acting as technical point of contact for three 
				different partners, managing escalations and keeping service levels at highest 
				possible standards.</p>
				<h3>Problem Solving</h3>
				<p className="description description-below">As a Team Lead I am required to make decisions in scenarios of high uncertainty 
				at the same time I have to identify the best available solution.</p>
			</div>
		</section>
		</div>
	);
	}
}

class Certifications extends React.Component {
	render () {
	return	(
		<div>
		<section className="certifications">
			<div className="skills left">
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
			<div className="skills right">
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
			{/* OPERATIONS TEAM LEAD */}
			<article className="working-experience-item">
				<div className="working-experience-header">
					<div className="left">
						<div className="working-period">09/2015 - Present</div>
						<h2>Operations Team Lead</h2>
					</div>
					<div className="right">
						<div className="company-name">Realex Payments</div>
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
					<div className="left">
						<div className="description description-above">11/2013 - 08/2015</div>
						<h2>Operations Analyst</h2>
					</div>
					<div className="right">
						<div className="company-name">Realex Payments</div>
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
					<div className="left">
						<div className="description description-above">10/2012 - 10/2013</div>
						<h2>Mobile and Web Developer</h2>
					</div>
					<div className="right">
						<div className="company-name">Freelance</div>
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
					<div className="left">
						<div className="description description-above">03/2010 - 10/2012</div>
						<h2>Business Analyst / Project Manager</h2>
					</div>
					<div className="right">
						<div className="company-name">SIANI</div>
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
					<div className="left">
						<div className="description description-above">03/2008 - 02/2010</div>
						<h2>Software Engineer</h2>
					</div>
					<div className="right">
						<div className="company-name">SIANI</div>
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
					<div className="left">
						<div className="studying-period">2009</div>
						<h2>Master's Degree in Computer Engineering</h2>
					</div>
					<div className="right">
						<div className="institution-name">University of Las Palmas de Gran Canaria</div>
					</div>
				</div>
				<div className="education-description">
					<p className="description description-below">First Class Honours</p>
				</div>
			</article>

			<article className="education-item">
				<div className="education-header">
					<div className="left">
						<div className="studying-period">2004</div>
						<h2>Bachelor's Degree in Computer Engineering</h2>
					</div>
					<div className="right">
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
	render () {
	return	(
		<div className="top-menu-container">
		<ul className="top-menu">
			<li>
				<a className="top-menu-item" target="_blank" href="https://www.linkedin.com/in/elielcruzlopez/">LinkedIn</a>
			</li>
			<li>
				<a className="top-menu-item" target="_blank" href="https://github.com/elielcruz">GitHub</a>
			</li>
			<li>
				<a className="button-cv" target="_blank" href="/public/docs/ElielCruzLopez-CV.pdf">Download CV</a>
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
	      <div className="header-left">
	      	<div className="page-title">
	      		<div className="first-name">Eliel <span className="phoneme">/ɛli'ɛl/</span></div>
	      		<div className="last-name">Cruz Lopez</div>
	      	</div>
	      </div>
	      <div className="header-right">
	      	<div className="phone">+353 (0) 83 158 2291</div>
	      	<div className="email">me@elielcruzlopez.com</div>
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
