import { useUserinfo } from './useUserinfo';
import React, { useState, useEffect } from 'react';
import { Loading } from '../utils/loading';

export function UserDropdown({ auth }: any) {
  const { loading, error, userinfo } = useUserinfo();
  const [isLogginOut, setIsLogginOut] = useState(false);

  const handleLogout = () => {
    setIsLogginOut(true);
    setTimeout(() => {
      auth.removeUser();
    }, 2000);
  };

  if (loading) return null;
  if (error)
    return (
      <div className="flex">
        <div>{error.error_description}</div>
        <button
          className="ml-2 btn btn-xs"
          onClick={() => auth.signoutSilent()}
        >
          Logout
        </button>
      </div>
    );

  return (
    <div className="flex flex-col items-center ">
      {isLogginOut ? (
        <div className="flex item-center">
          <Loading className="w-4" />
          <span className="ml-2 text-sm ">Cerrando Sesión...</span>
        </div>
      ) : (
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button">
            <div className=" rounded-full bg-secondary relative inline-flex items-center justify-center w-10 h-10 overflow-hidden ">
              <span className="font-medium">
                {userinfo?.name?.substring(0, 1).toUpperCase() || '?'}
              </span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <div className="flex flex-col items-center">
              <div>Hola {userinfo?.name}</div>
              <div className="opacity-50">{userinfo?.email}</div>
              <button className="btn my-4  btn-sm" onClick={handleLogout}>
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
