interface ICurrentPositionResponce {
    suggestions: [
        {
            data: {
                city: string;
                latitude: number;
                longitude: number;
                country_iso_code: string;
                region_with_type: string;
            };
        },
    ];
}

export default ICurrentPositionResponce;
