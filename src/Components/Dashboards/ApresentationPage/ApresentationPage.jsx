import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { HiLocationMarker } from 'react-icons/hi';
import { Container } from '../../Container/ContainerComponent';
import { Painel } from '../../Pages/InitialScreen/InitialScreenStyle';
import {
	ImageProfile,
	ProfileIcons,
	TextProfile,
} from '../ApresentationPage/ApresentationPage-style';

export default function ApresentationPage({ topRef }) {
	return (
		<Container theme='clean' ref={topRef}>
			<Painel height='50%' theme='dark'>
				<ImageProfile>
					<img
						src='https://media-exp1.licdn.com/dms/image/C5603AQES3HRO7mPlpQ/profile-displayphoto-shrink_800_800/0/1668010094226?e=1675900800&v=beta&t=6s7tsa5LsppXosQTWMiH7pbsadFsHo04diSkdpm-K78'
						alt='ImageProfle'
						draggable={false}
					/>
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
					<h1>Mateus Gueler Machado</h1>
					<h1>
						{'<'} Desenvolvedor Web Full Stack {'/>'}
					</h1>
					<ProfileIcons>
						<div className='icon'>
							<HiLocationMarker />
						</div>
						<p>Cariacica, ES, Brasil</p>
					</ProfileIcons>
				</TextProfile>
			</Painel>
		</Container>
	);
}
