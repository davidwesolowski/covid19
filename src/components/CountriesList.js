import React, { useState, useEffect } from 'react';
import { css } from '@emotion/core';
import Select from 'react-select';
import axios from 'axios';

const styleCountries = css({
    gridArea: 'countries',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const selectList = css({
    width: '80%',
    '@media (min-width: 768px)': {
        width: '50%'
    }
});

const selectStyles = {
    container: (provided) => ({
        ...provided,
        flexBasis: '100%',
        color: '#fff'
    }),
    menu:(provided) => ({
        ...provided,
        flexBasis: '100%',
        backgroundColor: '#616161',
        '&:hover': {
            backgroundColor: '#616161',
        }
    }), 
    singleValue: (provided) => ({
        ...provided,
        fontSize: '1.25rem',
        color: '#fff'
    }),
    input: (provided) => ({
        ...provided,
        color: '#fff',
        fontSize: '1.25rem'
    }),
    control: (provided) => ({
        ...provided,
        backgroundColor: '#616161'
    }),
    indicatorsContainer: (provided) => ({
        ...provided,
        'svg': {
            color: '#fff'
        }
    }),
    option: (provided) => ({
        ...provided,
        backgroundColor: '#616161',
        fontSize: '1.2rem',
        ':hover':
        {
            backgroundColor: '#757575'
        }
    }),
    placeholder: (provided) => ({
        ...provided,
        color: '#eef',
        fontSize: '1.25rem',
    })


};

const CountriesList = ({ handleOnChangeCountry }) =>
{
    const [countries, setCountries] = useState([{value: 'świat', label: 'Świat' }]);

    useEffect(() => {
        const fetchCountries = async () => {
            const { data: { countries: response } } = await axios.get('https://covid19.mathdro.id/api/countries/');
            const countriesNames = response.map(({ name }) => ({
                value: name, label: name
            }));
            setCountries([...countries, ...countriesNames]);
        };
        fetchCountries();
    }, [setCountries]);

    return (
        <div css={styleCountries}>
            <div css={selectList}>
                <Select styles={selectStyles} placeholder="Wybierz kraj" defaultValue={countries[0]} options={countries} onChange={handleOnChangeCountry}/>
            </div>
        </div>
    )
};

export default CountriesList;