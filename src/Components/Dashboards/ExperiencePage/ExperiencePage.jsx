import { ExperienceContainer } from '../../Container/ContainerComponent';
import { Title } from '../../Pages/InitialScreen/InitialScreenStyle';
import { Timeline } from './ExperiencePage-style';

export default function ExperienceComponent({ experienceRef }) {
	return (
		<ExperienceContainer
			id='5'
			ref={experienceRef}
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				paddingTop: '20px',
				paddingBottom: '10px',
			}}>
			<Title>
				<h1>Formação</h1>
			</Title>
			<Timeline>
				<div className='container left'>
					<div className='content'>
						<h1>Técnico em eletrotécnica</h1>
						<h2>2015-2016</h2>
						<p>
							Aprendi sobre lógica de programação com matérias de eletrônica
							analógica/digital e também trabalhei com CLP's (Controlador Lógico
							Programavel). Equipamento utilizado na elaboração do TCC, criando
							a lógica de funcionamento para simulação de semáfaros em um
							cruzamento.
						</p>
					</div>
				</div>
				<div className='container right'>
					<div className='content'>
						<h1>Física - Bacharelado</h1>
						<h2>2017-2022</h2>
						<p>
							Desenvolvimento de projetos voltados a resolução de problemas
							físicos em C, C++ e Python. Além disso trabalhei três anos como
							aluno pequisador no laboratório LEMAG (Laboratório de
							Espectroscopia Mössbauer e Magnetometria), onde desenvolvi
							projetos na área de nanoparículas e participei de reuniões
							semanais para discutir sobre os projetos desenvolvidos no
							laboratório.
						</p>
					</div>
				</div>
				<div className='container left'>
					<div className='content'>
						<h1>Desenvolvedor Web Full Stack</h1>
						<h2>2022</h2>
						<p>
							Formação intensiva com mais de 1.200h focadas no desenvolvimento
							de +25 projetos práticos. A formação incluiu conhecimentos Full
							Stack, utilizando Front-end, Back-end, banco de dados e DevOps com
							as tecnologias: React, Node.js, TypeScript, Prisma, Bancos de
							dados relacionais e não relacionais com Postgres, Mongo e Redis.
							<br></br> Além de aprimorar os fundamentos da engenharia de
							software: lógica, algoritmos, estrutura de dados, POO,
							arquitetura, otimização, performance e clean code. Foram
							desenvolvidos trabalhos em equipe usando metodologias ágeis
							(Scrum), desenvolvimento de competências comportamentais e
							habilidades profissionais (soft skills).
						</p>
					</div>
				</div>
			</Timeline>
		</ExperienceContainer>
	);
}
