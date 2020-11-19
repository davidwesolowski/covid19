import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Global, css } from '@emotion/core';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import Header from './Header';
import Cards from './Cards';
import CountriesList from './CountriesList';
import Chart from './Chart';

const container = css({
	display: 'grid',
	width: '100%',
	gridTemplateAreas: ' "header" "cards" "countries" "chart"',
	gridTemplateRows: '80px auto 70px 250px',
	gridRowGap: 10,
	'@media (min-width: 768px)':{
		maxWidth: '80%',
		margin: '0 auto',
    }
});

const loader = css({
	display: 'flex',
	justifyContent: 'center'
});

const globalStyles = css({
	'*': {
		margin: 0,
		padding: 0,
		boxSizing: 'border-box',
	},
	'body':
	{
		minWidth: '95vw',
		backgroundColor: '#121212',
		color: '#fff',
	},
});

const defaultData = {
	confirmed: 0, deaths: 0, recovered: 0
}

const App = () =>
{
	const [data, setData] = useState({
		...defaultData, lastUpdate: 0, today: { ...defaultData }
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
		const fetchData = async () => {
			let urlToday = 'https://covid19.mathdro.id/api';
			const date = moment().subtract(1, 'd').format('M-D-YYYY');
			const { data } = await axios.get(`https://covid19.mathdro.id/api/daily/${date}`);
			let yesterday = {
				confirmed: -1,
				recovered: -1,
				deaths: -1 
			};
			if (country) {
				urlToday += `/countries/${country}`;
				const countryPrevInfo = data.find(element => element.countryRegion === country);
				if (countryPrevInfo) yesterday = { 
					confirmed: countryPrevInfo.confirmed,
					recovered: countryPrevInfo.recovered,
					deaths: countryPrevInfo.deaths
				};
			}
			else {
				yesterday = data.reduce((prev, current) => ({
					confirmed: parseInt(prev.confirmed) + parseInt(current.confirmed),
					recovered: parseInt(prev.recovered) + parseInt(current.recovered),
					deaths: parseInt(prev.deaths) + parseInt(current.deaths)
				}), { confirmed: 0, recovered: 0, deaths: 0 })
			}
			const { data: { confirmed, deaths, recovered, lastUpdate } } = await axios.get(urlToday);
			const today = {
				confirmed: parseInt(confirmed.value) - yesterday.confirmed,
				recovered: parseInt(recovered.value) - yesterday.recovered,
				deaths: parseInt(deaths.value) - yesterday.deaths
			};
			setData({ confirmed, deaths, recovered, lastUpdate, today });
			setLoading(false);
		};
		fetchData();
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
