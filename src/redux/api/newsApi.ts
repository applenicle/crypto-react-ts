import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const newsHeaders = {
  'X-BingApis-SDK': 'true',
  'X-RapidAPI-Key': '088810befamsh95bd1db75cee333p100c61jsn4270906875fb',
  'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
};
const createRequest = (url: string) => ({ url, headers: newsHeaders });

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://bing-news-search1.p.rapidapi.com' }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: (params) => {
        const { count, newsCategory } = params;
        return createRequest(`/news/search?q=${newsCategory}&count=${count}`);
      },
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
