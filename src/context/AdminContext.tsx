"use client";
import React, { useState, useEffect, createContext, useContext } from "react";
interface AdminContextValue {
  isLogin: boolean;
  user: null;
}
const AdminContext = createContext<AdminContextValue>({
  isLogin: false,
  user: null,
});
export const useAdmin = () => {
  return useContext(AdminContext);
};
export const AdminProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    // using fetch
    setIsLogin(false);
    setUser(null);
  }, []);
  return (
    <AdminContext.Provider
      value={{
        isLogin,
        user,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
