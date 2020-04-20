import React, { useState, useEffect } from 'react';
import { Global, css } from '@emotion/core';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import Header from './Header';
import Cards from './Cards';
import CountriesList from './CountriesList';
import Chart from './Chart';

const container = css({
	display: 'grid',
	width: '95vw',
	gridTemplateAreas: ' "header" "cards" "countries" "chart"',
	gridTemplateColumns: 'auto',
	gridTemplateRows: '100px auto 70px auto',
	gridRowGap: 10,
	margin: '0 auto',
	'@media (min-width: 768px)':{
		width: '80vw',
    }
});

const loader = css({
	display: 'flex',
	justifyContent: 'center'
});

const globalStyles = css({
	'body':
	{
		backgroundColor: '#121212',
		color: '#fff',
		margin: 0,
		'@media (min-width: 768px)':{
			margin: 8,
		}
	},
});

const App = () =>
{
	const [data, setData] = useState({
		confirmed: 0, deaths: 0, recovered: 0, lastUpdate: 0
	});
	const [country, setCountry] = useState('');
	const [loading, setLoading] = useState(true);

	const handleOnChangeCountry = (selectedCountry) => {
		if (selectedCountry.value === 'świat')
			setCountry('');
		else
			setCountry(selectedCountry.value);
	};

	useEffect(() => {
		let url = 'https://covid19.mathdro.id/api';
		if (country)
			url += `/countries/${country}`
		const fetchData = async (url) => {
			const { data: { confirmed, deaths, recovered, lastUpdate } } = await axios.get(url);
			setData({ confirmed, deaths, recovered, lastUpdate });
			setLoading(false);
		};
		fetchData(url);
	}, [country, setData])

	return (
		<>
			<Global styles={globalStyles}/>
			<div css={container}>
				<Header />
				{
					loading ?
						<div css={loader}> 
							<Loader type="Rings" color="#00BFFF" height={300} width={300}/> 
						</div>
						: ( <>
								<Cards data={data}/>
								<CountriesList handleOnChangeCountry={handleOnChangeCountry}/>
								<Chart data={data} country={country}/>
							</>
						)
				}
				
			</div>
		</>
	);
};


export default App;
