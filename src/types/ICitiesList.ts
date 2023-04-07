interface ICity {
    id: string;
    name: string;
    latitude: number;
    longitude: number;
    country: string;
    state?: string;
}

export interface ICityCache {
    citiesCache: ICity[];
}

export default ICity;
