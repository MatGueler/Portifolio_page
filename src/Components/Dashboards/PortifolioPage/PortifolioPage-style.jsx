import styled, { keyframes } from 'styled-components';

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
	width: 100%;
	height: 80%;

	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;

	padding: 20px;

	box-sizing: border-box;

	position: relative;
`;

export const Project = styled.div`
	width: 180px;
	height: 120px;

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
