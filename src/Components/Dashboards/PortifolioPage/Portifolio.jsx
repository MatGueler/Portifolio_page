import { useState } from 'react';
import { Container } from '../../Container/ContainerComponent';
import {
	OpenProject,
	Portifolio,
	Project,
	Title,
} from './PortifolioPage-style';

// images
import supermercash from '../../../Assets/Image/supermercash.png';
import mywallet from '../../../Assets/Image/mywallet.png';
import ngcash from '../../../Assets/Image/ngcash.png';
import drivenplus from '../../../Assets/Image/drivenplus.png';
import weatherapp from '../../../Assets/Image/weatherapp.png';
import zaprecall from '../../../Assets/Image/zaprecall.png';
import trackit from '../../../Assets/Image/trackit.png';

import { AiOutlineZoomIn } from 'react-icons/ai';
import { IoCloseOutline } from 'react-icons/io5';

export const projects = [
	{
		title: 'Supermercash',
		image: supermercash,
		backgroundImage: supermercash,
		linkGithub: 'https://github.com/MatGueler/supermercash-front',
		linkDeploy: 'title',
		description: '',
	},
	{
		title: 'My Wallet',
		image: mywallet,
		backgroundImage: mywallet,
		linkGithub: 'https://github.com/MatGueler/projeto13-mywallet-front',
		linkDeploy: 'title',
	},
	{
		title: 'NG cash',
		image: ngcash,
		backgroundImage: ngcash,
		linkGithub: 'https://github.com/MatGueler/projeto13-mywallet-front',
		linkDeploy: 'title',
	},
	{
		title: 'Trackit',
		image: trackit,
		backgroundImage: trackit,
		linkGithub: 'title',
		linkDeploy: 'title',
	},
	{
		title: 'Zap recall',
		image: zaprecall,
		backgroundImage: zaprecall,
		linkGithub: 'title',
		linkDeploy: 'title',
	},
	{
		title: 'Driven plus',
		image: drivenplus,
		backgroundImage: drivenplus,
		linkGithub: 'title',
		linkDeploy: 'title',
	},
	{
		title: 'Weather app',
		image: weatherapp,
		backgroundImage: weatherapp,
		linkGithub: 'title',
		linkDeploy: 'title',
	},
	// {
	// 	title: 'Linkr',
	// 	image:
	// 		'https://gestaocont.com.br/site/uploads/2020/06/ecommerce-seo-tips.jpg',
	// 	linkGithub: 'title',
	// 	linkDeploy: 'title',
	// },
	// {
	// 	title: 'Twittero',
	// 	image:
	// 		'https://gestaocont.com.br/site/uploads/2020/06/ecommerce-seo-tips.jpg',
	// 	linkGithub: 'title',
	// 	linkDeploy: 'title',
	// },
	// {
	// 	title: 'Bate papo',
	// 	image:
	// 		'https://gestaocont.com.br/site/uploads/2020/06/ecommerce-seo-tips.jpg',
	// 	linkGithub: 'title',
	// 	linkDeploy: 'title',
	// },
	// {
	// 	title: 'Buzz quizz',
	// 	image:
	// 		'https://gestaocont.com.br/site/uploads/2020/06/ecommerce-seo-tips.jpg',
	// 	linkGithub: 'title',
	// 	linkDeploy: 'title',
	// },
	// {
	// 	title: 'Driven eats',
	// 	image:
	// 		'https://gestaocont.com.br/site/uploads/2020/06/ecommerce-seo-tips.jpg',
	// 	linkGithub: 'title',
	// 	linkDeploy: 'title',
	// },
	// {
	// 	title: 'Parrots',
	// 	image:
	// 		'https://gestaocont.com.br/site/uploads/2020/06/ecommerce-seo-tips.jpg',
	// 	linkGithub: 'title',
	// 	linkDeploy: 'title',
	// },
];

export default function PortifolioPage({ portifolioRef }) {
	const [openProject, setOpenProject] = useState(false);
	const [selectedProject, setSelectedProject] = useState({});
	function PutProjects({ data }) {
		const [isOverProject, setIsOverProject] = useState(false);
		return (
			<Project
				onClick={() => {
					setSelectedProject(data);
					setOpenProject(true);
				}}
				onMouseEnter={() => setIsOverProject(true)}
				onMouseLeave={() => setIsOverProject(false)}
				image={data.image}>
				<h1>{data.title}</h1>
				<div className='project-box'>
					{isOverProject ? <AiOutlineZoomIn /> : null}
				</div>
			</Project>
		);
	}

	const handleModal = (e) => {
		if (e.target.id === 'back-modal') {
			setOpenProject(false);
		}
	};

	return (
		<>
			<Container id='3' theme='clean' ref={portifolioRef}>
				<Title>
					<h1>Meus projetos</h1>
				</Title>

				{openProject ? (
					<OpenProject
						id='back-modal'
						image={selectedProject.backgroundImage}
						onClick={handleModal}>
						<div className='project-box background'>
							<div className='close' onClick={() => setOpenProject(false)}>
								<IoCloseOutline />
							</div>
							<div className='description'>
								<h1>{selectedProject.title}</h1>
								<p>{selectedProject.description}</p>

								<div className='action-buttons'>
									<button>
										<a
											href={selectedProject.linkGithub}
											target='_blank'
											rel='noreferrer'>
											Github
										</a>
									</button>
									<button>Site</button>
								</div>
							</div>
						</div>
					</OpenProject>
				) : null}

				<Portifolio>
					{projects.map((item, index) => (
						<PutProjects key={index} data={item} />
					))}
				</Portifolio>
			</Container>
		</>
	);
}
