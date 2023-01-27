import styled from 'styled-components';

export const Title = styled.div`
	width: 100%;
	height: 20%;

	display: flex;
	align-items: center;

	h1 {
		width: 100%;

		text-align: center;

		color: #ffffff;
		font-size: 40px;
		font-weight: bold;
	}
`;

export const Portifolio = styled.div`
	height: 80%;

	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;

	padding: 20px;

	box-sizing: border-box;
`;

export const Project = styled.div`
	width: 250px;
	height: 190px;

	margin: 0 5px 5px 10px;
	padding: 10px;

	border: 2px solid transparent;

	cursor: pointer;

	:hover {
		border-color: #002453;
		border-radius: 10px;

		background-color: #00245326;
	}

	* {
		width: 100%;
	}

	h1 {
		height: 20%;
		text-align: center;
	}

	.project-box {
		height: 80%;

		display: flex;
		justify-content: center;
		align-items: center;

		border-radius: 5px;

		background-image: url(${(props) => props.image});
		background-size: 100% 100%;

		svg {
			font-size: 30px;
		}
	}
`;

export const OpenProject = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	justify-content: center;
	align-items: center;

	position: fixed;
	top: 0;
	left: 0;

	box-sizing: border-box;

	z-index: 2;

	background-color: #1f1f1fc5;

	.project-box {
		width: 60%;
		height: 80%;

		display: flex;
		justify-content: center;

		position: relative;

		border-radius: 5px;

		background-image: url(${(props) => props.image});
		background-position: center;
		background-repeat: no-repeat;
	}

	.close {
		font-size: 40px;
		position: absolute;
		right: 10px;
		top: 10px;

		svg {
			cursor: pointer;
		}
	}

	.background {
		background-color: #86c5ff;
	}

	.description {
		width: 90%;
		height: 150px;

		display: flex;
		flex-direction: column;
		justify-content: space-between;

		padding: 10px;

		position: absolute;
		bottom: 20px;

		border: 2px solid #002453;
		border-radius: 10px;

		box-sizing: border-box;

		background-color: #ffffff;
	}

	.description p {
		width: 100%;

		font-size: 12px;

		padding: 10px;

		text-align: justify;
	}
	.description h1 {
		width: 100%;

		font-size: 20px;

		padding: 10px;

		text-align: justify;
	}

	.action-buttons {
		display: flex;
		justify-content: center;
	}

	a {
		text-decoration: none;
		color: #ffffff;
	}

	video {
		width: 100%;

		top: 0;
		left: 0;
		position: absolute;
	}

	button {
		width: 30%;
		height: 30px;
		margin: 0 10px;

		border: 0;
		border-radius: 5px;

		color: #ffffff;

		cursor: pointer;

		background-color: #002453;
	}
`;
