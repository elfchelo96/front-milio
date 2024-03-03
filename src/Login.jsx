import { useState } from "react";
import axios from "axios";
const Login = () => {

    const [email, setEmail] = useState("prueba");
    const [password, setPassword] = useState("prueba");

    const funIngresar = async (e) => {
        e.preventDefault() //para no recargar la pagina al enviar el formulario

        const datos = {
            email: email,
            password: password
        }

        try{
        const res = await axios.post("http://127.0.0.1:8000/api/v1/auth/login", datos)

        console.log(res.data);
        }catch(error){
            console.log(error.reponse.data);
        }
    }

    return (
        <>
            <h5>Email :  { email } </h5> 
            <h5>Contraseña :  { password } </h5> 
            <h1>Ingresar</h1>

            <form onSubmit={(e)=>funIngresar(e)}>
                <label htmlFor="">Ingrese Correo</label>
                <input type="email" onChange={(e)=>setEmail(e.target.value)}/> 
                <br />
                <label htmlFor="">Ingrese Contraseña</label>
                <input type="password" onChange={(e)=>setPassword(e.target.value)}/>
                <br />
                <button class="submit">Ingresar</button> 
                <button type="reset"></button>
            </form>

        </>
    )

}
export default Login;
