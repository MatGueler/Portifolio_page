import { useRef, useState } from 'react';
import { ContactContainer } from '../../Container/ContainerComponent';
import { ContactBox, TextContact } from './ContactPage-style';

import emailjs from '@emailjs/browser';

export default function ContactPage({ contactRef }) {
	const [name, setName] = useState('');
	const [nameError, setNameError] = useState(false);

	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState(false);

	const [subject, setSubject] = useState('');
	const [subjectError, setSubjectError] = useState(false);

	const [message, setMessage] = useState('');
	const [messageError, setMessageError] = useState(false);

	const form = useRef();

	function validateInfos() {
		let valid = true;
		if (name.length === 0) {
			valid = false;
			setNameError(true);
		} else {
			setNameError(false);
		}
		if (email.length === 0) {
			valid = false;
			setEmailError(true);
		} else {
			setEmailError(false);
		}
		if (subject.length === 0) {
			valid = false;
			setSubjectError(true);
		} else {
			setSubjectError(false);
		}
		if (message.length < 20) {
			valid = false;
			setMessageError(true);
		} else {
			setMessageError(false);
		}

		return valid;
	}

	const sendEmail = (e) => {
		e.preventDefault();
		const isValid = validateInfos();
		if (isValid) {
			emailjs
				.sendForm(
					process.env.REACT_APP_SERVICE_ID,
					process.env.REACT_APP_TEMPLATE_ID,
					form.current,
					process.env.REACT_APP_USER_ID
				)
				.then(
					(result) => {
						console.log(result.text);
					},
					(error) => {
						console.log(error.text);
					}
				);
			setName('');
			setEmail('');
			setSubject('');
			setMessage('');
		}
	};

	const ShowError = ({ type }) => {
		switch (type) {
			case 'name':
				return <p>Nome invalido</p>;
			case 'email':
				return <p>Email invalido</p>;
			case 'message':
				return <p>Mensagem inválida</p>;
			case 'subject':
				return <p>Assunto invalido</p>;
			default:
				return null;
		}
	};

	return (
		<ContactContainer theme='dark' ref={contactRef}>
			<TextContact>
				<h3>Ficou alguma dúvida? Mande uma mensagem!</h3>
				<h3>😁</h3>
			</TextContact>
			<ContactBox>
				<form ref={form} onSubmit={sendEmail}>
					<div className='sender-box'>
						{nameError ? <ShowError type='name' /> : null}
						<input
							type='text'
							name='enviado_por'
							placeholder='Nome'
							onChange={(e) => setName(e.target.value)}
							value={name}
						/>

						{emailError ? <ShowError type='email' /> : null}
						<input
							type='email'
							name='email'
							placeholder='email'
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>

						{subjectError ? <ShowError type='subject' /> : null}
						<input
							type='text'
							name='assunto'
							placeholder='Assunto'
							onChange={(e) => setSubject(e.target.value)}
							value={subject}
						/>

						<button>Enviar</button>
					</div>
					<div className='message-box'>
						{messageError ? <ShowError type='message' /> : null}
						<textarea
							type='text'
							name='mensagem'
							placeholder='Digite sua mensagem'
							onChange={(e) => setMessage(e.target.value)}
							value={message}></textarea>
					</div>
				</form>
			</ContactBox>
		</ContactContainer>
	);
}
