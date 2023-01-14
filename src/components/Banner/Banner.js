import React from "react";
import "./Banner.css";
import Grid from "@mui/material/Grid";
import banner from "../../assets/banner.png";
import cat from "../../assets/cat.png";
import Modal from "../Modal/Modal";
const Banner = ({ postReview }) => {
	return (
		<div className="banner">
			<Grid container>
				<Grid xs={12} md={6} className="main">
					<div className="log">
						<h1>Your Pet</h1>
						<img src={cat} alt="cat" />
					</div>
					<h1>Our Services</h1>
					<p>
						Before you home pet, be sure your're ready to take care of it
						properly
					</p>
					<div className="btns">
						<button className="service-btn">Our Services</button>
						<Modal postReview={postReview} />
					</div>

					<div className="ratings">
						<div className="yellow"></div>
						<div className="info">
							<h1>12K+</h1>
							<hr />
							<p>See user rating of us to see the quality we provide</p>
						</div>
					</div>
				</Grid>
				<Grid xs={12} md={6} className="main-img">
					<img src={banner} alt="banner" />
				</Grid>
			</Grid>
		</div>
	);
};

export default Banner;
