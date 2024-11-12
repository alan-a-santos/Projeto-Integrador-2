// ClienteContext.tsx
'use client'
import React, { createContext, useContext, useState, ReactNode } from "react";

interface ClienteContextType {
  idCliente: number | null;
  setIdCliente: React.Dispatch<React.SetStateAction<number | null>>;
}

const ClienteContext = createContext<ClienteContextType | undefined>(undefined);

export const ClienteProvider = ({ children }: { children: ReactNode }) => {
  const [idCliente, setIdCliente] = useState<number | null>(null);

  return (
    <ClienteContext.Provider value={{ idCliente, setIdCliente }}>
      {children}
    </ClienteContext.Provider>
  );
};

export const useCliente = () => {
  const context = useContext(ClienteContext);
  if (!context) {
    throw new Error("useCliente deve ser usado dentro de um ClienteProvider");
  }
  return context;
};
