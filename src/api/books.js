    export const createBook = async (bookData)=>{
      try {
        const response = await fetch('http://localhost:8081/create-book', {
            method: 'POST',
            body: bookData,
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

    export const getBook = async () =>{
      try {
        const response = await fetch('http://localhost:8081/get-book')
      if (!response.ok){
        throw new Error('Error en la consulta')
      }
        const data = await response.json();
        return data; 
    } catch (error) {
        console.error('Error en getBook:', error);
        throw error; 
    }
    }
