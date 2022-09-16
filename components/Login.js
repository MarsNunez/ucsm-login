const Login = () => {
  return ( 
    <form action="">
        <div className="login-container">
            <img src={logo} alt="logo" className='logo' />
            <h1>Iniciar Sesion</h1>
            <input type="text" placeholder='Codigo de estudiante'/> <br />
            <input type="password" placeholder='Contaseña'/> <br />
            <input className='button'type="submit" value="Ingresar" onClick={() => setContinuar(true)}/>
            <input className='button'type="submit" value="Recordar contraseña"/>

            <a href="#">¿Te olvidaste la contraseña?</a>
        </div>
      </form> 
   );
}
 
export default Login;