import React, { Component } from "react";
import "./App.css";

export default class AboutMeComponent extends Component {
	render() {
		return (
			<div>
				<section id="AboutMe">
					<h1 className={"text"} style={{ color: "darkorange" }}>
						About Me
					</h1>
				</section>
				<p
					className={"text"}
					style={{ fontSize: "20px", marginLeft: "10%", marginRight: "10%" }}
				>
					{" "}
					I am a senior at Towson University studying computer science. I am
					very passionate for programming, and enjoy working in web development
					specifically. I created this website using React and Bootstrap. If you
					would like to contact me, feel free to send me an email!
				</p>
			</div>
		);
	}
}
