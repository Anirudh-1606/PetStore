import React from "react";
import "./Functional.css";
import Grid from "@mui/material/Grid";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import banner from "../../assets/banner.png";
const Functional = ({ reviews }) => {
	return (
		<div>
			<Grid container>
				<Grid xs={12} md={4}>
					{/* {reviews ? (
						<div className="reviews">
							<p>{reviews[0].username}</p>
							<p>{reviews[0].email}</p>
							<p>{reviews[0].review}</p>
						</div>
					) : (
						<div>No reviews yet</div>
					)} */}
				</Grid>
				<Grid xs={12} md={8}>
					<div className="bg">
						<div className="carosuel">
							<Carousel
								showThumbs={false}
								showStatus={false}
								width={"50%"}
								className="slider"
							>
								<div>
									<img src={banner} />
									<p className="legend">Legend 1</p>
								</div>
								<div>
									<img src={banner} />
									<p className="legend">Legend 2df</p>
								</div>
								<div>
									<img src={banner} />
									<p className="legend">Legend 3</p>
								</div>
							</Carousel>
						</div>
						<p style={{ color: "white" }}>Pet care is essential</p>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default Functional;
