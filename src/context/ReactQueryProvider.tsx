"use client";

import React, { createContext, useContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type ContextType = {
  queryClient: QueryClient;
};

export const ReactQueryContext = createContext<ContextType>({
  queryClient: new QueryClient(),
});

export default function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { queryClient } = useContext(ReactQueryContext);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryContext.Provider value={{ queryClient }}>
        {children}
      </ReactQueryContext.Provider>
    </QueryClientProvider>
  );
}
