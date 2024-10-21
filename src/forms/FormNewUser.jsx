import { useRef, useState } from "react";
import FieldForm from "../components/FieldForm"
import { UserIcon } from "../icons/UserIcon";
import { createUser } from "../api/users";

const FormNewUser = () =>{
    const [error, setError] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        last_name: '',
        email: '',
        password: '',
        repeatPassword: '',
        age: '',
        nacionality: '',
        image: null,
    })

    const handleChange = (e) =>{
        const {name, value} = e.target;

        setFormData(
        {...formData,
        [name]: value}
        );

        if (name === 'password' || name === 'repeatPassword') {
            if (name === 'password') {
                setError(value !== formData.repeatPassword);
            } else if (name === 'repeatPassword') {
                if (value === "") {
                    setError(false); 
                } else {
                    setError(value !== formData.password); 
                }
            }
        }
    }

    const fileInputRef = useRef(null);
    const handleFileChange = (e) =>{
        setFormData(
        {...formData,
        image:e.target.files[0]}
      );
    }
    const defaultImage = "http://localhost:8081/uploads/iconUser.png"

    const handleButtonClick = () =>{
        fileInputRef.current.click();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.repeatPassword) {
            setError(true);
            return;
        }

        const data = new FormData();
        data.append('name', formData.name);
        data.append('last_name', formData.last_name);
        data.append('email', formData.email);
        data.append('password', formData.password);
        data.append('age', formData.age);
        data.append('nacionality', formData.nacionality);
        if(formData.image){
            data.append('image', formData.image);
        }else{
            data.append('image', defaultImage);
        }
        console.log([...data]);

        try{
          const createdUser = await createUser(data);
          console.log(createdUser)
            if (createdUser.ok) {
            console.log('Información enviada correctamente');}

          setFormData({
            name: '',
            last_name: '',
            email: '',
            password: '',
            repeatPassword: '',
            age: '',
            nacionality: '',
            image: null,
          }
        );
        console.log("Formulario enviado y reseteado")

    }catch(error){
      console.error('Error al cargar los datos', error);
      }
    };

    return(
    <>
    <form className="w-full max-w-md sm:max-w-lg mx-auto p-4 rounded-xl lg:shadow-lg sm:shadow-lg" encType="multipart/form-data" onSubmit={handleSubmit}>
    <div className="grid md:grid-cols-2 md:gap-6">
    <FieldForm className="relative z-0 w-full group" type="text" name="name" textLabel="Nombre" id="name" placeholder="Nombre" onChange={handleChange} value={formData.name}/>

    <FieldForm className="relative z-0 w-full group" type="text" name="last_name" textLabel="Apellido" id="last_name" placeholder="Apellido" onChange={handleChange} value={formData.last_name}/>
    </div>

    <FieldForm className="relative z-0 w-full group" type="email" name="email" textLabel="Email" id="email" placeholder="email" onChange={handleChange} value={formData.email}/>
    {/* contraseñas */}
    <FieldForm className="relative z-0 w-full group" type="password" name="password" textLabel="Contraseña" id="password" placeholder="Contraseña" value={formData.password} onChange={handleChange}/>

    <FieldForm className="relative z-0 w-full group" type="password" name="repeatPassword" textLabel="Repetir contraseña" id="repeat-password" placeholder="Repetir contraseña" onChange={handleChange} error={error} value={formData.repeatPassword}/>

    <div className="grid md:grid-cols-3 md:gap-6">

    <FieldForm className="relative z-0 w-full group" type="number" name="age" textLabel="Edad" id="age" placeholder="Edad" onChange={handleChange} value={formData.age}/>
    <FieldForm className="relative z-0 w-full group" type="text" name="nacionality" textLabel="Nacionalidad" id="nacionality" placeholder="Nacionalidad" onChange={handleChange} value={formData.nacionality}/>

    <div className="mb-5">
    <label className="block lg:text-transparent mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="image">Imagen de Usuario</label>
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
      <UserIcon/><span className="text-sm font-semibold text-black">Img Usuario</span>
    </button>
  </div>
</div>

     <button type="submit" className ="text-black bg-[#4BC1D2] hover:bg-[#B7E6ED] font-semibold rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center">
     Enviar</button>
    </form>
    </>
)
}

export default FormNewUser;