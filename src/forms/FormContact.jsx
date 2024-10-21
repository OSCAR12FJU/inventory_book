import FieldForm from "../components/FieldForm";

export const FormContact = () =>{
    return(
    <>   
    <form className="w-full max-w-md mx-auto p-4 rounded-xl lg:shadow-lg sm:shadow-lg">
      <FieldForm textLabel="Nombre" type="text" id="name" name="name" placeholder="Nombre" />
      <FieldForm textLabel="Apellido" type="text" id="lastName" name="lastName" placeholder="Apellido" />
      <FieldForm textLabel="Email" type="email" id="email" name="email" placeholder="Email" />
     <div className="mb-5">
      <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mensaje</label>
      <textarea className="h-[120px] shadow-sm bg-gray-50  bg-input border-input border text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="Escribe tu mensaje..." name="message"></textarea>
     </div>

     <button type="submit" className ="text-black bg-[#4BC1D2] hover:bg-[#4BC1D2]-600 focus:ring-4 font-semibold rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center">
     Enviar</button>
    </form>
    </>
    )
}

// export default FormContact;