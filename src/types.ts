interface Dataset {
    name: string,
    description: string,
    paper_link: string;
    filters: string[],
    columns: string[],
    subtitle: string,
    download_link: string,
    explore_link: string

}

export type { Dataset };