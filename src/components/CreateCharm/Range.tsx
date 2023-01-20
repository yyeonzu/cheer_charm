import * as React from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const marks = [
	{
		value: 5,
		label: "5",
	},
	{
		value: 10,
		label: "10",
	},
	{
		value: 15,
		label: "15",
	},
	{
		value: 20,
		label: "20",
	},
	{
		value: 25,
		label: "25",
	},
	{
		value: 30,
		label: "30",
	},
	{
		value: 35,
		label: "35",
	},
	{
		value: 40,
		label: "40",
	},
	{
		value: 45,
		label: "45",
	},
	{
		value: 50,
		label: "50",
	},
];

const PrettoSlider = styled(Slider)({
	color: "#B7CCB5",
	margin: "0 15px",
	height: 8,
	borderRadius: 4,
	"& .MuiSlider-track": {
		border: "none",
	},
	"& .MuiSlider-mark": {
		width: 4,
		height: 4,
		borderRadius: 2,
	},
	"& .MuiSlider-thumb": {
		height: 20,
		width: 20,
		backgroundColor: "#fff",
		border: "2px solid currentColor",
		"&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
			boxShadow: "inherit",
		},
		"&:before": {
			display: "none",
		},
	},
});

export default function CustomizedSlider({ value, onChange }) {
	return (
		<Box sx={{ height: 100, overflowX: "auto" }}>
			<PrettoSlider
				aria-label="pretto slider"
				defaultValue={5}
				valueLabelDisplay="off"
				step={5}
				marks={marks}
				min={5}
				max={50}
				value={value}
				onChange={onChange}
			/>
		</Box>
	);
}
