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
		linkDeploy: 'http://supermercash-front.vercel.app/',
		description:
			'O aplicativo propõe que o usuário monte sua lista de compras com os itens desejados, em seguida serão apresentados os preços de sua compra em cada um dos mercados, disponibilizados em ordem, para que o usuário possa facilmente escolher o melhor custo-benefício.',
	},
	{
		title: 'My Wallet',
		image: mywallet,
		backgroundImage: mywallet,
		linkGithub: 'https://github.com/MatGueler/projeto13-mywallet-front',
		linkDeploy: null,
		description:
			'O mywallet é um aplicativo focado na organização financeira, onde o usuário indica os valores recebidos e pagos durante o período. O intuito desse aplicativo é facilitar o monitoramento da saúde financeira do usuário.',
	},
	{
		title: 'NG cash',
		image: ngcash,
		backgroundImage: ngcash,
		linkGithub: 'https://github.com/MatGueler/NG.CASH-project',
		linkDeploy: null,
		description:
			'Esse projeto foi desenvolvido para simular transações entre usuarios da plataforma ng.cash, de forma simples e rápida.',
	},
	{
		title: 'Trackit',
		image: trackit,
		backgroundImage: trackit,
		linkGithub: 'https://github.com/MatGueler/projeto10-trackit',
		linkDeploy: null,
		description: '',
	},
	{
		title: 'Zap recall',
		image: zaprecall,
		backgroundImage: zaprecall,
		linkGithub: 'https://github.com/MatGueler/projeto8-zaprecall',
		linkDeploy: null,
		description: '',
	},
	{
		title: 'Driven plus',
		image: drivenplus,
		backgroundImage: drivenplus,
		linkGithub: 'https://github.com/MatGueler/DrivenPlus',
		linkDeploy: null,
		description: '',
	},
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
									<a
										href={selectedProject.linkGithub}
										target='_blank'
										rel='noreferrer'>
										<button>Github</button>
									</a>

									{selectedProject.linkDeploy ? (
										<a
											href={selectedProject.linkDeploy}
											target='_blank'
											rel='noreferrer'>
											<button>Site</button>
										</a>
									) : null}
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
