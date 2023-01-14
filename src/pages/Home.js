import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import Functional from "../components/Functional/Functional";
import axios from "axios";
import { useSnackbar } from "notistack";

const Home = () => {
	const { enqueueSnackbar } = useSnackbar();
	const [reviews, setReviews] = useState({});

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const res = await axios.get("http://localhost:8082/user/all");
			setReviews(res.data);
			console.log(res.data);
			return;
		} catch (e) {
			enqueueSnackbar(e.message, { variant: "error" });
		}
	};

	const postReview = async (data) => {
		try {
			const fromData = data;
			console.log(fromData);
			const res = await axios.post(
				"http://localhost:8082/user/register",
				FormData,
			);
			if (res.status === 201) {
				enqueueSnackbar("Registered successfully", { variant: "success" });
			}

			console.log(res.status);
			return res.status;
		} catch (e) {
			enqueueSnackbar(e.message, { variant: "error" });
		}
	};

	return (
		<div>
			<Navbar />
			<Container>
				<Banner postReview={postReview} />
				<Functional reviews={reviews} />
			</Container>
		</div>
	);
};

export default Home;
