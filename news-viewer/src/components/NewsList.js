import React from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
	box-sizing: border-box;
	padding-bottom: 3rem;
	width: 768px;
	margin:0 auto;
	margin-top: 2rem;
	@media screen and (max-width: 768px){
		width: 100%;
		padding-left: 1rem;
		padding-right: 1rem;
	}
`;

const NewsList = ({category}) =>{
	const [loading, response, error] = usePromise(() => {
		const query = category === 'all' ? '' : `&topic=${category}`;
		return axios.get(
		`https://gnews.io/api/v4/top-headlines?lang=ja${query}&token=77eb054f43466d3c595474c36bde84c0`,
		);
	},[category])
	
	//대기중일떄
	if (loading ){
		return <NewsListBlock>대기중 ...</NewsListBlock>
	}
	//아직 response값이 정해지지 않았을때
	if(!response){
		return null;
	}
	//에러 발생시
	if(error){
		return <NewsListBlock>에러발생!</NewsListBlock>
	}
	
	//response값이 유효할때
	const {articles} = response.data;
	return(
		<NewsListBlock>
			{articles.map(article => (
				<NewsItem key={article.url} article={article} />
			))}
		</NewsListBlock>
	);
};

export default NewsList;