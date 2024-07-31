import axios from 'axios';

interface LoginResponse {
  token: string;
  user: {
    firstName: string;
    lastName: string;
    email: string;
  };
}

//ojo linea 16

export const loginUser = async (email: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await axios.post<LoginResponse>('http://your-backend-api.com/login', {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    throw new Error('Invalid credentials');
  }
};
