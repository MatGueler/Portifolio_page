import styled from 'styled-components';

import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';

export default function Alert({ type }) {
	if (type === 'sucess') {
		return (
			<>
				<AlertComponent>
					<AiOutlineCheckCircle></AiOutlineCheckCircle>
					<p>Email enviado!</p>
				</AlertComponent>
			</>
		);
	} else {
		return (
			<>
				<AlertComponent>
					<AiOutlineCloseCircle color='red'></AiOutlineCloseCircle>
					<p>Falha ao enviar!</p>
				</AlertComponent>
			</>
		);
	}
}

const AlertComponent = styled.div`
	width: max-content;
	height: 30px;

	border-radius: 5px;

	border: 0;

	display: flex;
	align-items: center;

	padding: 5px;
	right: -100%;
	top: 20%;
	position: fixed;
	background-color: #fff;
	animation-name: alert;
	animation-duration: 2s;

	@keyframes alert {
		0% {
			right: -10%;
			top: 20%;
		}
		50% {
			right: 20px;
			top: 20%;
		}
		80% {
			opacity: 1;
		}
		100% {
			right: 20px;
			top: 20%;
			opacity: 0;
		}
	}

	p {
		font-size: 20px;
	}

	svg {
		font-size: 25px;
		color: #0f6213;

		margin: 0 10px;
	}
`;
