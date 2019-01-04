import React, { Component } from "react";
import "./App.css";
import Particles from "react-particles-js";
import ContentComponent from "./App2.js";
import AboutMeComponent from "./App3.js";

class ParticleComponent extends Component {
	render() {
		return (
			<div style={{ height: "100vh" }}>
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
