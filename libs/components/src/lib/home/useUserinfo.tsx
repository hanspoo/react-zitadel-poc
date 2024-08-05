import { useEffect, useState } from 'react';
import axios from 'axios';
import { Userinfo } from '@freedom/api-interfaces';
import { useAuth } from 'react-oidc-context';
import { ZitadelAccessError } from './ZitadelAccessError';

const url = `${import.meta.env.VITE_ZITADEL_SERVER}/oidc/v1/userinfo`;

export function useUserinfo() {
  const auth = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ZitadelAccessError>();
  const [userinfo, setUserinfo] = useState<Userinfo>();

  useEffect(() => {
    const headers = { Authorization: `Bearer ${auth?.user?.access_token}` };
    setLoading(true);
    axios
      .get<Userinfo>(url, {
        headers,
      })
      .then((response) => {
        setUserinfo(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.response.data);
        setLoading(false);
      });
  }, [auth?.user?.access_token]);

  return { loading, error, userinfo };
}
