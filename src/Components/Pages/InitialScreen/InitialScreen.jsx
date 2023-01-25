import { useRef, useState } from 'react';
import AboutMeComponent from '../../Dashboards/AboutMePage/AboutMePage';
import ApresentationPage from '../../Dashboards/ApresentationPage/ApresentationPage';
import PortifolioPage from '../../Dashboards/PortifolioPage/Portifolio';

import styled from 'styled-components';
import HeaderComponent from '../../Header/HeaderComponent';

function InitialScreen() {
	const topRef = useRef(null);
	const aboutRef = useRef(null);
	const experienceRef = useRef(null);
	const portifolioRef = useRef(null);
	const skillsRef = useRef(null);
	const contactRef = useRef(null);

	const [visibleHeader, setVisibleHeader] = useState(false);

	const ScrollPage = (e) => {
		const viewHeight = e.target.scrollingElement.clientHeight;
		const halfViewHeight = viewHeight / 2;
		const currentHeight = e.target.scrollingElement.scrollTop;

		if (currentHeight > halfViewHeight) {
			setVisibleHeader(true);
		} else {
			setVisibleHeader(false);
		}
	};

	document.addEventListener('scroll', ScrollPage);

	return (
		<>
			{visibleHeader ? <HeaderComponent /> : ''}
			<ApresentationPage
				topRef={topRef}
				aboutRef={aboutRef}
				experienceRef={experienceRef}
				portifolioRef={portifolioRef}
				skillsRef={skillsRef}
				contactRef={contactRef}
			/>
			<AboutMeComponent aboutRef={aboutRef} />

			<PortifolioPage portifolioRef={portifolioRef} />
		</>
	);
}

export default InitialScreen;
