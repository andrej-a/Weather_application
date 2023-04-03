import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import { checkCache } from '@/store/slices/citiesCache';
import { setTargetCity } from '@/store/slices/citiesList';
import { checkWeatherCache } from '@/store/slices/weatherCache';
import ICity from '@/types/ICitiesList';
import { yupResolver } from '@hookform/resolvers/yup';

import SearchIcon from '../../../public/icons/search_icon.png';
import {
    ElasticContainer,
    ElasticItem,
    Form,
    Input,
    SearchIconImage,
    SearchIconWrapper,
    SearchWrapper,
} from './styles';

const Search = () => {
    const [showElasticContainer, setShowElasticContainer] = useState(false);
    const { cities, isLoadingCityList, targetCity } = useAppSelector(
        state => state.citiesState,
    );
    const { name, country, id } = targetCity;
    const dispatch = useAppDispatch();
    const schema = yup
        .object({
            search: yup.string().required().min(1),
        })
        .required();
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
                    onFocus={() => {
                        if (!showElasticContainer) {
                            setShowElasticContainer(true);
                        }
                    }}
                    placeholder="Serach..."
                    name="search"
                    id="search"
                />
                <SearchIconWrapper>
                    <SearchIconImage src={SearchIcon} alt="search_panel" />
                </SearchIconWrapper>
                {showElasticContainer && (
                    <ElasticContainer>
                        {isLoadingCityList
                            ? 'Loading...'
                            : cities.length > 0
                            ? cities.map(city => {
                                  return (
                                      <ElasticItem
                                          data-test="elastickItem"
                                          key={city.id}
                                          onClick={onHandleTargetCity(city)}
                                      >
                                          {city.name}, {city.country}{' '}
                                          {city.state}
                                      </ElasticItem>
                                  );
                              })
                            : 'No data here'}
                    </ElasticContainer>
                )}
            </Form>
        </SearchWrapper>
    );
};

export default Search;
