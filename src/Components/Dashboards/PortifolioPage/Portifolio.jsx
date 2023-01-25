import { useState } from 'react';
import { Container } from '../../Container/ContainerComponent';
import { Portifolio, Project, Title } from './PortifolioPage-style';

import { AiOutlineZoomIn } from 'react-icons/ai';

export const projects = [
	{
		title: 'Supermercash',
		image:
			'https://camo.githubusercontent.com/aba303aa0c77046ffb1c496351deb365eef33e792008a4e6c4b16058eb491287/68747470733a2f2f75706c6f61646465696d6167656e732e636f6d2e62722f696d616765732f3030342f3035362f3135342f66756c6c2f4c6f676f2e706e673f31363635343138383832',
		linkGithub: 'https://github.com/MatGueler/supermercash-front',
		linkDeploy: 'title',
		description: '',
		// video: backgroundVideo,
	},
	{
		title: 'My Wallet',
		image:
			'https://gestaocont.com.br/site/uploads/2020/06/ecommerce-seo-tips.jpg',
		linkGithub: 'https://github.com/MatGueler/projeto13-mywallet-front',
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
	// 	title: 'Trackit',
	// 	image:
	// 		'https://gestaocont.com.br/site/uploads/2020/06/ecommerce-seo-tips.jpg',
	// 	linkGithub: 'title',
	// 	linkDeploy: 'title',
	// },
	// {
	// 	title: 'Zap recall',
	// 	image:
	// 		'https://gestaocont.com.br/site/uploads/2020/06/ecommerce-seo-tips.jpg',
	// 	linkGithub: 'title',
	// 	linkDeploy: 'title',
	// },
	// {
	// 	title: 'Driven plus',
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
	function PutProjects({ data }) {
		const [isOverProject, setIsOverProject] = useState(false);
		return (
			<Project
				// onClick={() => {
				// 	setSelectedProject(data);
				// 	setOpenProject(true);
				// }}
				// onMouseOver={() => setIsOverProject(true)}
				// onMouseLeave={() => setIsOverProject(false)}
				image={data.image}>
				<h1>{data.title}</h1>
				<div className='project-box'>
					{isOverProject ? <AiOutlineZoomIn /> : null}
				</div>
			</Project>
		);
	}

	return (
		<>
			<Container
				id='3'
				theme='clean'
				ref={portifolioRef}
				// onClick={() => {
				// 	if (openProject) setOpenProject(false);
				// }}
			>
				<Title>
					<h1>Meus projetos</h1>
				</Title>

				<Portifolio>
					{projects.map((item, index) => (
						<PutProjects key={index} data={item} />
					))}
				</Portifolio>
			</Container>
		</>
	);
}
