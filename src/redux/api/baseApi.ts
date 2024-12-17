import { createApi, fetchBaseQuery, } from "@reduxjs/toolkit/query/react";


export const baseApi = createApi({
    //1. set educerpath
    reducerPath: "baseApi",
    // 2. set base query
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api",
        // The 'credentials: "include"' option is used to ensure that cookies are sent correctly with cross-origin requests.
        // If this is not included, the refresh token may not be set properly,
        // and the browser will not store the cookie.
        credentials: "include",

    }),
    // 3. set endpoints
    endpoints: () => ({}),
    // 4. set tag types
    tagTypes: ["user",'food','order','payment']
})