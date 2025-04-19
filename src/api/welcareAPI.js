import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const welcareAPI = createApi({
    reducerPath: 'welcareAPI',
    baseQuery: fetchBaseQuery({baseUrl:"http://localhost:3000/api/"}),
    endpoints: (build) => ({
        loginUser: build.mutation({
            query:({username,password})=>({
                url:'user/login',
                method:'POST',
                body:{
                    username:username,
                    password: password
                }
            })
        }),
        getGuests: build.query({
            query:() => '/guest'
        })
    })
})

export const {useLoginUserMutation,useGetGuestQuery} = welcareAPI