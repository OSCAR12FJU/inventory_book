export const createUser = async (userData)=>{
    try {
      const response = await fetch('http://localhost:8081/create-user', {
          method: 'POST',
          body: userData,
      });

      if (!response.ok) {
          throw new Error('Error al crear el libro');
      }
      const data = await response.json();
      return data; // Devuelve la respuesta del servidor
  } catch (error) {
      console.error('Error en createBook:', error);
      throw error; // Relanza el error para manejarlo en el componente
  }

  }

export const loginUser = async (userData)=>{
    try {
      const response = await fetch('http://localhost:8081/login-user', {
          method: 'POST',
          body: userData,
      });

      if (!response.ok) {
          throw new Error('Error al crear el libro');
      }
      const data = await response.json();
      
      return data;
  } catch (error) {
      console.error('Error en createBook:', error);
      throw error;  
  }

  }
