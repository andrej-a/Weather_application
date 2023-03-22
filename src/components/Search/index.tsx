import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import dailyWeatherSelector from '@/store/selectors/dailyWeather';
import { checkCache } from '@/store/slices/citiesCache';
import { setTargetCity } from '@/store/slices/citiesList';
import { checkWeatherCache } from '@/store/slices/weatherCache';
import ICity from '@/types/ICitiesList';
import { yupResolver } from '@hookform/resolvers/yup';

import {
    ElasticContainer,
    ElasticItem,
    Form,
    Input,
    SearchWrapper,
    SubmitButton,
} from './styles';

const Search = () => {
    const [showElasticContainer, setShowElasticContainer] = useState(false);
    const { cities, isLoadingCityList, targetCity } = useAppSelector(
        state => state.citiesState,
    );
    const { isDailyWeatherLoading } = useAppSelector(dailyWeatherSelector);
    const { name, country, id } = targetCity;
    const dispatch = useAppDispatch();
    const schema = yup
        .object({
            search: yup.string().required().min(1),
        })
        .required();
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<{ search: string }>({
        resolver: yupResolver(schema),
        defaultValues: { search: '' },
    });
    const formSubmit: SubmitHandler<{ search: string }> = data => {
        dispatch(checkWeatherCache(`${name}-${country}`));
    };
    const handleChange: SubmitHandler<{ search: string }> = ({ search }) => {
        dispatch(checkCache(search));
    };
    const onHandleTargetCity = (city: ICity) => () => {
        setValue('search', city.name);
        dispatch(setTargetCity(city));
    };
    return (
        <SearchWrapper>
            <Form action="" onSubmit={handleSubmit(formSubmit)}>
                <Input
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
                    onBlur={() => {
                        setTimeout(() => {
                            if (showElasticContainer) {
                                setShowElasticContainer(false);
                            }
                        }, 100);
                    }}
                    placeholder="Serach..."
                    name="search"
                    id="search"
                />
                <SubmitButton
                    disabled={
                        Object.keys(errors).length > 0 ||
                        !id ||
                        isLoadingCityList ||
                        isDailyWeatherLoading
                    }
                    type="submit"
                    value="Search"
                >
                    Search
                </SubmitButton>
                {showElasticContainer && (
                    <ElasticContainer>
                        {isLoadingCityList
                            ? 'Loading...'
                            : cities.length > 0
                            ? cities.map(city => {
                                  return (
                                      <ElasticItem
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
