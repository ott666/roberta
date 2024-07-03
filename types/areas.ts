export type PageItem = {
    id:number;
    title: string;
    text: string;
};

export type Area = {
    id: number;
    title: string;
    cardText: string;
    urlImg: string;
    url: string;
    pageTitle: string;
    pageText: string;
    pageText2: string;
    pageItems: {
        [key: string]: PageItem;
    };
};