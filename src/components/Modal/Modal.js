import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useSnackbar } from "notistack";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const Modal = ({ postReview }) => {
	const { enqueueSnackbar } = useSnackbar();
	const [open, setOpen] = useState(false);
	const [formData, setFormData] = useState({
		imageUrl: "",
		username: "",
		email: "",
		review: "",
	});

	const handleInput = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	//open
	const handleClickOpen = () => {
		setOpen(true);
	};
	//Close
	const handleClose = () => {
		setFormData({
			imageUrl: "",
			username: "",
			email: "",
			review: "",
		});
		setOpen(false);
	};

	const handleSubmit = async () => {
		if (validateInput) {
			await postReview(formData);
			setOpen(false);
		}
	};

	const validateInput = () => {
		if (!formData.imageUrl) {
			enqueueSnackbar("Image Url cannot be empty", { variant: "error" });
			return false;
		} else if (!formData.username) {
			enqueueSnackbar("Name cannot be empty", { variant: "error" });
			return false;
		} else if (!formData.email) {
			enqueueSnackbar("Email cannot be empty", { variant: "error" });
			return false;
		} else if (!formData.review) {
			enqueueSnackbar("Review cannot be empty", { variant: "error" });
			return false;
		} else {
			return true;
		}
	};
	return (
		<div>
			<button className="schedule-btn" onClick={handleClickOpen}>
				Write a Review
			</button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Write a Review</DialogTitle>
				<DialogContent style={{ padding: "0px 20px" }}>
					<TextField
						autoFocus
						margin="dense"
						id="url"
						label="Image URL"
						variant="outlined"
						type="text"
						name="imageUrl"
						fullWidth
						onChange={(e) => handleInput(e)}
						helperText="Please enter a image Url for review"
					/>
					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="Please enter your name"
						type="link"
						fullWidth
						variant="outlined"
						name="username"
						onChange={(e) => handleInput(e)}
						helperText="Enter your name for review"
					/>
					<TextField
						autoFocus
						margin="dense"
						id="email"
						label="Email"
						name="email"
						variant="outlined"
						onChange={(e) => handleInput(e)}
						type="text"
						fullWidth
						helperText="Please Enter your email"
					/>

					<TextField
						id="review"
						label="Review"
						name="review"
						type="text"
						placeholder="Review"
						helperText="Please give your review about us"
						onChange={(e) => handleInput(e)}
						style={{ marginTop: "18px" }}
						sx={{ width: "100%" }}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} id="upload-btn-cancel">
						Cancel
					</Button>
					<Button
						variant="contained"
						id="upload-btn-submit"
						onClick={handleSubmit}
					>
						Submit Review
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default Modal;
