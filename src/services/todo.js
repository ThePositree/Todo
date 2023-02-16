import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  reducerPath: "todosApi",
  tagTypes: ["Todo"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "todo",
      providesTags: (result) => (result ? [...result.map(({ id }) => ({ type: "Todo", id })), { type: "Todo", id: "LIST" }] : [{ type: "Todo", id: "LIST" }]),
    }),
    getTodosByText: builder.query({
      query: (text) => `todo?text=${text}`,
      providesTags: (result) => (result ? [...result.map(({ id }) => ({ type: "Todo", id })), { type: "Todo", id: "LIST" }] : [{ type: "Todo", id: "LIST" }]),
    }),
    addTodo: builder.mutation({
      query: (body) => ({
        url: `todo`,
        method: `POST`,
        body,
      }),
      invalidatesTags: [{ type: "Todo", id: "LIST" }],
    }),
    updateTodo: builder.mutation({
      query: (body) => ({
        url: `todo`,
        method: `PUT`,
        body,
      }),
      invalidatesTags: [{ type: "Todo", id: "LIST" }],
    }),
    deleteTodo: builder.mutation({
      query: (body) => ({
        url: `todo`,
        method: `DELETE`,
        body,
      }),
      invalidatesTags: [{ type: "Todo", id: "LIST" }],
    }),
  }),
});

export const { useAddTodoMutation, useGetTodosQuery, useUpdateTodoMutation, useDeleteTodoMutation, useGetTodosByTextQuery } = todosApi;
