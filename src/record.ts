export {};

type Prefectures = 'Tokyo' | 'Osaka' | 'Aichi' | 'Shiga';

type Covid19InfectionInfo = {
    kanji_name: string;
    confirmed_cases: number;
};

const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
    Tokyo: {kanji_name: '東京', confirmed_cases: 1960},
    Osaka: {kanji_name: '大阪', confirmed_cases: 196},
    Aichi: {kanji_name: '愛知', confirmed_cases: 19},
    Shiga: {kanji_name: '滋賀', confirmed_cases: 1},
}
