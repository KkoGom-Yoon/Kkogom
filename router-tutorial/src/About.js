import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
	const query = qs.parse(location.search,{
		ignoreQueryPrefix: true
	});
	const showDetail = query.detail === 'true';
	
	return(
		<div>
			<h1>소개</h1>
			<p>예제 프로젝트</p>
			{showDetail && <p> detail값을 true로 했군요!</p>}
		</div>
	);
};

export default About;