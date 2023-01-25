import { Container } from '../../Container/ContainerComponent';
import {
	Arrow,
	Carousel,
	Skill,
	Skills,
	Slider,
	Title,
} from './SkillsPage-style';

import {
	BsFillArrowLeftCircleFill,
	BsFillArrowRightCircleFill,
} from 'react-icons/bs';

import { useRef, useState } from 'react';

import react from '../../../Assets/Image/react.svg';
import javascript from '../../../Assets/Image/js.svg';
import css from '../../../Assets/Image/css.svg';
import html from '../../../Assets/Image/html.svg';
import docker from '../../../Assets/Image/docker.svg';
import mongo from '../../../Assets/Image/mongo.svg';
import postgres from '../../../Assets/Image/postgres.svg';
import python from '../../../Assets/Image/python.svg';
import typescript from '../../../Assets/Image/typescript.svg';
import node from '../../../Assets/Image/node.svg';

export default function SkillsPage({ skillsRef }) {
	const [current, setCurrent] = useState(1);
	const [openProject, setOpenProject] = useState(false);
	const [headerVisible, setHeaderVisible] = useState(false);
	const [selectedProject, setSelectedProject] = useState({});

	const carousel = useRef(null);

	const skills = [
		{
			name: 'Javascript',
			image: javascript,
		},
		{
			name: 'React.js',
			image: react,
		},
		{
			name: 'CSS',
			image: css,
		},
		{
			name: 'HTML',
			image: html,
		},
		{
			name: 'Postgres',
			image: postgres,
		},
		{
			name: 'Python',
			image: python,
		},
		{
			name: 'Mongo',
			image: mongo,
		},
		{
			name: 'Typescript',
			image: typescript,
		},
		{
			name: 'Docker',
			image: docker,
		},
		{
			name: 'Node.js',
			image: node,
		},
	];

	return (
		<Container id='4' theme='dark' ref={skillsRef}>
			<Title>
				<h1>Habilidades</h1>
			</Title>

			<Skills>
				<Slider>
					<Arrow
						onClick={() => {
							carousel.current.scrollLeft -= carousel.current.offsetWidth;
							if (current !== 1) {
								setCurrent((prev) => {
									return prev - 1;
								});
							}
						}}>
						<BsFillArrowLeftCircleFill className='previous' />
					</Arrow>

					<div className='skill-box' ref={carousel}>
						{skills.map((item, index) => {
							return (
								<Skill key={index}>
									<img src={item.image} alt='js' />
									<h2>{item.name}</h2>
								</Skill>
							);
						})}
					</div>

					<Arrow
						onClick={() => {
							carousel.current.scrollLeft += carousel.current.offsetWidth;
							if (current < skills.length) {
								setCurrent((prev) => {
									return prev + 1;
								});
							} else {
								setCurrent(1);
								carousel.current.scrollLeft = 0;
							}
						}}>
						<BsFillArrowRightCircleFill className='next' />
					</Arrow>
				</Slider>

				<Carousel>
					{skills.map((item, index) => {
						if (index + 1 === current) {
							return <p key={index} className='current'></p>;
						} else {
							return <p key={index}></p>;
						}
					})}
				</Carousel>
			</Skills>
		</Container>
	);
}
