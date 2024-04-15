/* eslint-disable no-unused-vars */
import React from "react";
import "./Card.css";
import { Card as BootstrapCard } from "react-bootstrap";

const Card = ({ title, imageSrc, text, updatedAt, onLoad, onClick }) => {
	return (
		<div onClick={onClick} style={{ cursor: "pointer", marginBottom: "20px" }}>
			<div
				className="card border-0  bg-light border-none "
				style={{ minHeight: "342px", maxHeight: "342px", borderRadius: "15px" }}
			>
				<img
					className=" card-img p-2"
					src={imageSrc}
					alt="Card image"
					onLoad={onLoad}
					style={{ borderRadius: "15px 15px", minHeight: "213px" }}
				/>
				<div
					className="card-body bg-light "
					style={{ margin: "0px", padding: "10px" }}
				>
					<h5
						className="card-title d-flex justify-content-center"
						style={{
							margin: 0,
						}}
					>
						{title}
					</h5>
					<p
						className="card-text my-2 "
						style={{ overflow: "hidden", maxHeight: "72px" }}
					>
						{text}
					</p>
				</div>
			</div>
		</div>
	);
};
export default Card;
