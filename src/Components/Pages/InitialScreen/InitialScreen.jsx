import { useRef } from 'react';
import AboutMeComponent from '../../Dashboards/AboutMePage/AboutMePage';
import ApresentationPage from '../../Dashboards/ApresentationPage/ApresentationPage';

function InitialScreen() {
	const topRef = useRef(null);
	const aboutRef = useRef(null);
	const experienceRef = useRef(null);
	const portifolioRef = useRef(null);
	const skillsRef = useRef(null);
	const contactRef = useRef(null);

	return (
		<>
			<ApresentationPage
				topRef={topRef}
				aboutRef={aboutRef}
				experienceRef={experienceRef}
				portifolioRef={portifolioRef}
				skillsRef={skillsRef}
				contactRef={contactRef}
			/>
			<AboutMeComponent aboutRef={aboutRef} />
		</>
	);
}

export default InitialScreen;
