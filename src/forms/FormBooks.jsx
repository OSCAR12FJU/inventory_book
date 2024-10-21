import { useRef, useState } from "react"
import FieldForm from "../components/FieldForm"
import { ImageIcon } from "../icons/ImageIcon"
import { createBook } from "../api/books"

export const FormBooks = () =>{
    const [formData, setFormData] = useState({
        name: '',
        author: '',
        description: '',
        pages: '',
        published: '',
        image: null,
    })
    const handleChange = (e) =>{
        const {name, value} = e.target;

        setFormData(
        {...formData,
        [name]: value}
        );
    }
    const fileInputRef = useRef(null);
    const handleFileChange = (e) =>{
        setFormData(
        //   (prevData) =>({
        //     ...prevData,
        //     image: e.target.files[0]
        // })
        {...formData,
        image:e.target.files[0]}
      );
    }

    const handleButtonClick = () =>{
        fileInputRef.current.click();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('name', formData.name);
        data.append('author', formData.author);
        data.append('description', formData.description);
        data.append('pages', formData.pages);
        data.append('published', formData.published);
        if(formData.image){
            data.append('image', formData.image);
        }
        console.log([...data]);

        try{
          const createdBook = await createBook(data);
          console.log(createdBook)
            if (createdBook.ok) {
            console.log('Información enviada correctamente');}

          setFormData({
            name: '',
            author: '',
            description: '',
            pages:'',
            published:'',
            image:null
          }

        );

          console.log("Formulario enviado y reseteado")

        }catch(error){
          console.error('Error al cargar los datos', error);
          }
        };

    return(
    <>
    <form className="w-full max-w-lg mx-auto" encType="multipart/form-data" onSubmit={handleSubmit}>
      <FieldForm textLabel="Titulo del Libro" type="text" name="name" value={formData.name} onChange={handleChange}/>
      <FieldForm textLabel="Nombre del Autor" type="text" name="author" value={formData.author} onChange={handleChange}/>
      <div className ="mb-5">
      <label htmlFor="description" className ="block mb-2 text-sm font-medium text-gray-900 dark:text-white"  >Resumen del Libro</label>
      <textarea className="h-[150px] shadow-sm bg-gray-50  bg-input border-input border text-gray-900 text-sm rounded-lg block w-full p-2.5 " name="description" value={formData.description} onChange={handleChange}></textarea>
      </div>

<div className="grid md:grid-cols-3 md:gap-6">
    <FieldForm className="relative z-0 w-full group" textLabel="Publicación" value={formData.published} onChange={handleChange} name="published" type="date"/>
    <FieldForm className="relative z-0 w-full group" textLabel="Paginas" name="pages" value={formData.pages} onChange={handleChange} type="number"/>
    <div className="mb-5">
    <label className="block lg:text-transparent mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="image">Imagen de Portada</label>
    <input 
    className="hidden"  
    id="fileInput" 
    accept="image/png, image/jpeg, image/jpg, image/webp"
    name="image"
    type="file"
    onChange={handleFileChange}
    ref={fileInputRef}
    />
    <button
      type="button"
      className="bg-second text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 flex items-center space-x-2"
      onClick={handleButtonClick}>
      <ImageIcon/><span className="text-sm font-semibold text-black">Subir Portada</span>
    </button>
  </div>
</div>
  <button type="submit" className ="text-black bg-[#4BC1D2] hover:bg-[#4BC1D2]-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-md px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  Guardar Libro</button>
</form>
     </>
    )
}