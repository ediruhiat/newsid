const BASE_URL = 'https://berita-indo-api.vercel.app';

interface INewsAPI {
  cnn: string,
  cnbc: string,
  republika: string,
  tempo: string,
  kumparan: string,
  okezone: string,
  bbc: string,
  tribun: string,
  vice: string,
  suara: string,
  voa: string,
}

const newsAPI: INewsAPI = {
  cnn: BASE_URL + '/v1/cnn-news',
  cnbc: BASE_URL + '/v1/cnbc-news/',
  republika: BASE_URL + '/v1/republika-news',
  tempo: BASE_URL + '/v1/tempo-news/',
  kumparan: BASE_URL + '/v1/kumparan-news/',
  okezone: BASE_URL + '/v1/okezone-news',
  bbc: BASE_URL + '/v1/bbc-news',
  tribun: BASE_URL + '/v1/tribun-news',
  vice: BASE_URL + '/v1/vice',
  suara: BASE_URL + '/v1/suara',
  voa: BASE_URL + '/v1/voa',
}

export default newsAPI
