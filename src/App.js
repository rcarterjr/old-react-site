import React, { Component } from "react";
import "./App.css";
import Particles from "react-particles-js";
import ContentComponent from "./components/Intro.js";
import AboutMeComponent from "./components/AboutMe.js";

class ParticleComponent extends Component {
	render() {
		return (
			<div style={{ height: "10vh" }}>
				<Particles
					height="100vh"
					params={{
						particles: {
							number: {
								value: 55
							},
							size: {
								value: 3
							}
						},
						interactivity: {
							events: {
								onhover: {
									enable: true,
									mode: "repulse"
								}
							}
						}
					}}
				/>
				<ContentComponent />
				<AboutMeComponent />
			</div>
		);
	}
}

export default ParticleComponent;
