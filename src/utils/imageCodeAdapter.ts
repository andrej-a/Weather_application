const imageCodeAdapter = (code: number) => {
    type TKnowledges = {
        [index: string]: number;
    };
    const knowledges: TKnowledges = {
        ['/1/-/2/-/26/']: 2,
        ['/3/-/27/']: 3,
        ['/4/-/28/-/29/']: 4,
        ['/5/-/30/-/31/']: 5,
        ['/6/-/32/']: 6,
        ['/7/-/8/']: 7,
        ['/9/']: 9,
        ['/10/-/11/-/12/-/13/']: 10,
        ['/14/-/15/-/33/']: 11,
        ['/16/-/17/-/18/-/19/-/34/-/35/']: 12,
        ['/20/-/21/-/22/']: 13,
        ['/23/-/24/-/25/-/36/']: 14,
    };
    const keys = Object.keys(knowledges);
    return keys.reduce(
        (acc, cur) =>
            cur.match(`/${code}/`) ? acc + knowledges[cur] : acc + 0,
        0,
    );
};
export default imageCodeAdapter;
