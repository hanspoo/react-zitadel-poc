import { Dashboard } from '../admin/Dashboard';
import { useUserinfo } from './useUserinfo';
export function Authenticated() {
  const { loading, error, userinfo } = useUserinfo();

  if (loading) return null;
  if (error) return null;

  return (
    <div>
      <div className="my-8">Welcome {userinfo?.name}</div>
      <Dashboard />
    </div>
  );
}
