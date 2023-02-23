import { useEffect, useState } from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { HiLocationMarker } from 'react-icons/hi';
import { Container } from '../../Container/ContainerComponent';
import { Painel } from '../../Pages/InitialScreen/InitialScreenStyle';

import profileImage from '../../../Assets/Image/imageProfile.jpg';

import {
	ImageProfile,
	ProfileIcons,
	Summary,
	TextCursor,
	TextProfile,
} from '../ApresentationPage/ApresentationPage-style';

export default function ApresentationPage({
	topRef,
	aboutRef,
	portifolioRef,
	skillsRef,
	experienceRef,
	contactRef,
}) {
	const ScrollSection = (elemetRef) => {
		window.scrollTo({
			top: elemetRef.current.offsetTop,
			behavior: 'smooth',
		});
	};

	function TypeWriter({ value }) {
		const [text, setText] = useState('');

		const typeWriter = (text, i = 0) => {
			if (i < value.length) {
				setText(text.slice(0, i + 1));
				setTimeout(() => {
					typeWriter(text, i + 1);
				}, 100);
			}
		};

		useEffect(() => {
			typeWriter(value);
			setInterval(() => typeWriter(value), 8000);
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, []);

		return (
			<>
				<h1>{text}</h1>
				<TextCursor />
			</>
		);
	}

	return (
		<Container theme='clean' ref={topRef}>
			<Painel height='50%' theme='dark'>
				<ImageProfile>
					<img src={profileImage} alt='ImageProfle' draggable={false} />
					<ProfileIcons>
						<a
							href='https://www.linkedin.com/in/mateusgueler/'
							target='_blank'
							rel='noopener noreferrer'>
							<BsLinkedin />
						</a>
						<a
							href='https://github.com/MatGueler'
							target='_blank'
							rel='noopener noreferrer'>
							<BsGithub />
						</a>
					</ProfileIcons>
				</ImageProfile>
				<TextProfile>
					<TypeWriter value='< Desenvolvedor Web Full Stack />' />
					<TypeWriter value='Mateus Gueler Machado' />
					<ProfileIcons>
						<div className='icon'>
							<HiLocationMarker />
						</div>
						<p>Cariacica, ES, Brasil</p>
					</ProfileIcons>
				</TextProfile>
			</Painel>

			<Summary>
				<button onClick={() => ScrollSection(aboutRef)}>Sobre mim</button>

				<button onClick={() => ScrollSection(portifolioRef)}>Portifólio</button>

				<button onClick={() => ScrollSection(skillsRef)}>Habilidades</button>

				<button onClick={() => ScrollSection(experienceRef)}>Formação</button>

				<button onClick={() => ScrollSection(contactRef)}>Contato</button>
			</Summary>
		</Container>
	);
}
