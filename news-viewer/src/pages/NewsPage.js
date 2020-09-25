import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

const NewsPage = ({match}) => {
	//카테고리 미 선택시 all 사용
	const category = match.params.category || 'all';
	
	return(
		<>
			<Categories />
			<NewsList category={category} />
		</>
	);
};

export default NewsPage;