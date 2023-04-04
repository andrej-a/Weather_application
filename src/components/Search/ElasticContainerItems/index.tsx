import React, { memo } from 'react';

import { ElasticItem } from './styles';
import ElasticContainerItemsProps from './types';

const ElasticContainerItems = memo(
    ({ cities, onHandleTargetCity }: ElasticContainerItemsProps) => {
        console.log(cities, 'CITIES');

        return (
            <>
                {cities.length > 0
                    ? cities.map(city => {
                          return (
                              <ElasticItem
                                  data-test="elastickItem"
                                  key={city.id}
                                  onClick={onHandleTargetCity(city)}
                              >
                                  {city.name}, {city.country} {city.state}
                              </ElasticItem>
                          );
                      })
                    : 'No data here'}
            </>
        );
    },
);

export default ElasticContainerItems;
