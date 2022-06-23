import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoHeaders = {
  'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
};
const createRequest = (url: string) => ({ url, headers: cryptoHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://coinranking1.p.rapidapi.com' }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count: number) => createRequest(`/coins?limit=${count}`),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;
