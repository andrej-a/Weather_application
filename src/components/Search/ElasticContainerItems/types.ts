import ICity from '@/types/ICitiesList';

type ElasticContainerItemsProps = {
    cities: ICity[];
    onHandleTargetCity: (city: ICity) => () => void;
};
export default ElasticContainerItemsProps;
