import React, { Component } from "react";
import "./App.css";
import SmoothScroll from "react-anchor-link-smooth-scroll";

export default class ContentComponent extends Component {
	render() {
		return (
			<div className={"frontAndCenter"}>
				<div style={{ alignSelf: "flex-end" }}>
					<header>
						<div>
							<ul className={"nav justify-content-end"}>
								<li className={"zoom"} style={{ marginRight: "15px" }}>
									<SmoothScroll href="#AboutMe">
										<a className="nav-link" href="#">
											About Me
										</a>
									</SmoothScroll>
								</li>
								<li className={"zoom"}>
									<a className={"nav-link"} href="mailto:russell.c12@gmail.com">
										Email Me
									</a>
								</li>
							</ul>
						</div>
					</header>
				</div>

				<div className={"imean"}>
					<img src={require("./newMug2.jpg")} className="Russ" />
				</div>
				<div>
					<div>
						<h1 className="App-title" class="text">
							{" "}
							Hello, I'm Russell!
						</h1>
					</div>
					<div>
						<h2 class="text">
							Software Developer | Computer Science student | Dog owner{" "}
						</h2>
					</div>
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "space-around",
						width: "60vw",
						paddingTop: 16
					}}
				>
					<a href="https://github.com/rcarterjr">
						<div className="img">
							<img
								src={require("./iconmonstr-github-1.svg")}
								style={{ height: 56, width: 56 }}
								alt="Github"
							/>
						</div>
					</a>
					<a href="https://www.linkedin.com/in/russell-c-38b69486/">
						<div className="img">
							<img
								src={require("./iconmonstr-linkedin-4.svg")}
								style={{ height: 56, width: 56 }}
								alt="Linkedin"
							/>
						</div>
					</a>
					<a href="https://twitter.com/rcarterjr_">
						<div className="img">
							<img
								src={require("./iconmonstr-twitter-4.svg")}
								style={{ height: 56, width: 56 }}
								alt="Twitter"
							/>
						</div>
					</a>
				</div>
				<SmoothScroll />
			</div>
		);
	}
}
