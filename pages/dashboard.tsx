// pages/dashboard.tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface User {
  firstName: string;
  lastName: string;
  email: string;
}

const DashboardPage = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (!token || !userData) {
      router.push('/login'); // Redirige al usuario a la página de login si no está autenticado
      return;
    }

    setUser(JSON.parse(userData));
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Dashboard</h1>
      <p>Welcome, {user.firstName} {user.lastName}!</p>
    </div>
  );
};

export default DashboardPage;
