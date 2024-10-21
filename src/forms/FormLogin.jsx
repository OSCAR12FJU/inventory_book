import { useState } from "react";
import { loginUser } from "../api/users";
import FieldForm from "../components/FieldForm";
import { useNavigate } from "react-router-dom";


const FormLogin = () =>{
  const [formData, setFormData] = useState({
    email: '',
    password: '',
})
const navigate = useNavigate()


const handleChange = (e) =>{
  const {name, value} = e.target;

  setFormData(
  {...formData,
  [name]: value}
  );
}
const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData();
  data.append('email', formData.email);
  data.append('password', formData.password);

  console.log([...data]);

  try{
    const createdUser = await loginUser(data);
      if (createdUser.ok) {
      console.log('Información enviada correctamente');
      localStorage.setItem('uthToken', 'my_token_new')
      // Navigate('/inicio')
      navigate('/');
    }else{
      alert('Datos ingresados invalidos');
      console.log(formData.email, formData.password)
    }

    setFormData({
      email: '',
      password: '',
    }
  );
  console.log("Formulario enviado y reseteado")

}catch(error){
console.error('Error al cargar los datos', error);
}
};


    return(
    <>
    <form className="w-full max-w-md mx-auto p-4 rounded-xl lg:shadow-lg sm:shadow-lg" encType="multipart/form-data" onSubmit={handleSubmit}>
        <FieldForm textLabel="Email" id="email" type="email" name="email" value={formData.email} onChange={handleChange}/>
        <FieldForm textLabel="Contraseña" id="password" type="password" name="password" value={formData.password} onChange={handleChange}/>
      <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
          <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-input rounded bg-input" required />
        </div>
       <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Recuerdame</label>
      </div>
      <button type="submit" className ="text-black bg-[#4BC1D2] hover:bg-[#4BC1D2]-600 focus:ring-4 font-semibold rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center">Enviar</button>
    </form>
    </>
    )
}

export default FormLogin;
