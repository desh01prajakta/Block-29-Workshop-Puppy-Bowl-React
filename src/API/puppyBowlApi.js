// Import createApi (function to create an API service) and fetchBaseQuery (a basic fetch wrapper)
// from Redux Toolkit Query's React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-pt-web/prajakta/"

// Define an API using createApi
export const puppyBowlApi = createApi({
    // Unique string used in constructing Redux action types, state selectors, and React hook names
    reducerPath: "puppyBowlApi",
    // Define a base query function that all endpoints will use as the base of their request
    baseQuery: fetchBaseQuery({baseUrl
      // The base URL for all requests
      
    }),
    // Define endpoints for our API service
    endpoints: (builder) => ({
      getPlayers: builder.query({
        query:() => `/players`,
        providesTags: ['Players']
      }),
      // Define an endpoint that fetches players
      addPlayers: builder.mutation({
        query:(body) => ({
          URL: `/players`,
          methode:`POST`,
          body}),
        invalidateTags: ['Players']
      }),
      deletePlayers: builder.mutation({
        query: (id) => ({
          url: `/players/${id}`,
          method: 'delete',
        }),
        invalidatesTags: ['Players']
      })
        // The part of the URL that comes after the baseUrl for this specific endpoint
        
      }),
    })
  
  export const { useGetPlayersQuery, useAddPlayersMutation, useDeletePlayersMutation } = puppyBowlApi
  // Export hooks for each endpoint - in this case, a React hook that triggers the fetchPlayers query
  
  