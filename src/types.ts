interface Dataset {
    name: string,
    description: string,
    paper_link: string;
    filters: string[],
    columns: string[],
    subtitle: string,
    download_link: string,
    explore_link: string,
    is_audio: boolean
}

export type { Dataset };