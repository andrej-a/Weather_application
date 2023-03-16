import React, { useState } from 'react';
import { SubmitHandler,useForm } from 'react-hook-form';
import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

import {
    CloseElasticContainer,
    ElasticContainer,
    ElasticItem,
    Form,
    Input,
    SearchWrapper,
    SubmitButton,
} from './styles';

const Search = () => {
    const [showElasticContainer, setShowElasticContainer] = useState(true);
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
        console.log(data);
    };
    return (
        <SearchWrapper>
            <Form action="" onSubmit={handleSubmit(formSubmit)}>
                <Input
                    type="text"
                    {...register('search', {
                        onChange: handleSubmit(formSubmit),
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
                <SubmitButton
                    disabled={Object.keys(errors).length > 0}
                    type="submit"
                    value="Search">
                    Search
                </SubmitButton>
                {showElasticContainer && (
                    <ElasticContainer>
                        <ElasticItem
                            onClick={() => {
                                setShowElasticContainer(false);
                                setValue('search', 'Minsk');
                            }}>
                            Minsk
                        </ElasticItem>
                        <ElasticItem>Minsk</ElasticItem>
                        <ElasticItem>Minsk</ElasticItem>
                        <ElasticItem>Minsk</ElasticItem>
                        <ElasticItem>Minsk</ElasticItem>
                        <ElasticItem>Minsk</ElasticItem>
                        <ElasticItem>Minsk</ElasticItem>
                        <ElasticItem>Minsk</ElasticItem>
                        <ElasticItem>Minsk</ElasticItem>
                        <CloseElasticContainer
                            onClick={() => {
                                setShowElasticContainer(false);
                            }}>
                            Close
                        </CloseElasticContainer>
                    </ElasticContainer>
                )}
            </Form>
        </SearchWrapper>
    );
};

export default Search;
