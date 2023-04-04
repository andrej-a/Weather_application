import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import ICity from '@/types/ICitiesList';
import { yupResolver } from '@hookform/resolvers/yup';

import SearchIcon from '../../../public/icons/search_icon.png';
import schema from './config/schema';
import ElasticContainerItems from './ElasticContainerItems';
import * as imports from './imports';
import {
    ElasticContainer,
    Form,
    Input,
    SearchIconImage,
    SearchIconWrapper,
    SearchWrapper,
} from './styles';

const { checkCache, checkWeatherCache, setTargetCity, citySelector } = imports;

const Search = () => {
    const [showElasticContainer, setShowElasticContainer] = useState(false);
    const { cities, isLoadingCityList, targetCity } =
        useAppSelector(citySelector);
    const { name, country, id } = targetCity;
    const dispatch = useAppDispatch();
    const { register, handleSubmit, setValue } = useForm<{ search: string }>({
        resolver: yupResolver(schema),
        defaultValues: { search: '' },
    });

    const handleChange: SubmitHandler<{ search: string }> = ({ search }) => {
        dispatch(checkCache(search));
    };
    const onHandleTargetCity = (city: ICity) => () => {
        dispatch(setTargetCity(city));
        setShowElasticContainer(false);
    };
    const openElasticContainer = () => {
        if (!showElasticContainer) {
            setShowElasticContainer(true);
        }
    };

    useEffect(() => {
        if (id) {
            setValue('search', `${name}-${country}`);
        }
    }, [id]);

    useEffect(() => {
        dispatch(checkWeatherCache(`${name}-${country}`));
    }, [targetCity]);

    return (
        <SearchWrapper>
            <Form action="">
                <Input
                    data-test="searchInput"
                    disabled={isLoadingCityList}
                    type="text"
                    autoComplete="off"
                    {...register('search', {
                        onChange: handleSubmit(handleChange),
                    })}
                    onFocus={openElasticContainer}
                    placeholder="Serach..."
                    name="search"
                    id="search"
                />
                <SearchIconWrapper>
                    <SearchIconImage src={SearchIcon} alt="search_panel" />
                </SearchIconWrapper>
                {showElasticContainer && (
                    <ElasticContainer>
                        {isLoadingCityList ? (
                            'Loading...'
                        ) : (
                            <ElasticContainerItems
                                cities={cities}
                                onHandleTargetCity={onHandleTargetCity}
                            />
                        )}
                    </ElasticContainer>
                )}
            </Form>
        </SearchWrapper>
    );
};

export default Search;
