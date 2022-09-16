import './index.css';
import logo from './img/logo.png';
import { useRef, useState } from 'react';

import React from "react";

function App() {
  const [continuar, setContinuar] = useState(0);
  const [error, setError] = useState(false);
  const [errorLogin, setErrorLogin] = useState(false);
  const [code, setCode] = useState(null);
  const [password, setPassword] = useState(null);

  const handleClick = () => {
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 3000);
  }

  const handleIngresar = () => {
    if(code != '123123123' || password != '123') {
      return setErrorLogin(true)
    }
    setErrorLogin(false)
    setCode(null)
    setPassword(null)
    setContinuar(2)
  }

  const handleMesa = () => {
    if(code != '123123123' || password != '123') {
      return setErrorLogin(true)
    }
    setErrorLogin(false)
    setCode(null)
    setPassword(null)
    setContinuar(1) 
  }

  return (
    <>
      {continuar == 0 &&
      <form action="">
        <div className="login-container">
            <img src={logo} alt="logo" className='logo' />
            <h1>Iniciar Sesion</h1>
            <input type="text" value={code} onChange={(e) => setCode(e.target.value)} placeholder='Codigo de estudiante'/> <br />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Contaseña'/> <br />
            <input className='button'type="submit" value="Ingresar" onClick={() => handleIngresar()}/>
            <input className='button'type="submit" value="Mesa de partes" onClick={() => handleMesa()}/>

            <a href="#">¿Te olvidaste la contraseña?</a>
            {errorLogin && <div className='error-login'><p>Código o contraseña incorrectos</p></div>}
        </div>
      </form> 
      }
      { continuar == 1 &&
      <div className="option-container">
        <h1>Mesa de partes</h1>
        <div className="box-container">
          <div className="box" onClick={() => handleClick()}>
            <i class="fa-solid fa-book icon"></i>
            <h3>Reclamos</h3>
          </div>
          <div className="box" onClick={() => handleClick()}>
            <i class="fa-solid fa-handshake icon"></i>
            <h3>Solicitudes</h3>
          </div>
          <div className="box" onClick={() => handleClick()}>
          <i class="fa-solid fa-money-bill icon"></i>
            <h3>Problemas con pagos</h3>
          </div>
          <div className="box" onClick={() => handleClick()}>
          <i class="fa-solid fa-graduation-cap icon"></i>
            <h3>Maestrias</h3>
          </div>
          <div className="box" onClick={() => handleClick()}>
          <i class="fa-solid fa-user icon"></i>
            <h3>Estado de cuenta</h3>
          </div>
          <div className="box" onClick={() => handleClick()}>
          <i class="fa-solid fa-building-flag icon"></i>
            <h3>Bachillerato</h3>
          </div>
          <div className="box" onClick={() => handleClick()}>
          <i class="fa-solid fa-stethoscope icon"></i>
            <h3>Doctorado</h3>
          </div>
          <div className="box" onClick={() => handleClick()}>
          <i class="fa-solid fa-address-book icon"></i>
            <h3>Contactanos</h3>
          </div>
          <div className="box" onClick={() => handleClick()}>
          <i class="fa-solid fa-star icon"></i>
            <h3>Recomenda ciones</h3>
          </div>
          <div className="box" onClick={() => handleClick()}>
          <i class="fa-solid fa-paperclip"></i>
            <h3>Tramites</h3>
          </div>
        </div>
        <a href="#" onClick={() => setContinuar(0)}>Ir atras</a>
        {error && <div className='error'><p>Estamos trabajando en ello.</p></div>}
      </div>
      }
      { continuar == 2 &&
        <div className="option-container">
        <h1>Opciones</h1>
        <div className="box-container contenedor">
          <div className="box xy">
            <a href='https://form.jotform.com/222576188486672' target="_blank">
              <i class="fa-solid fa-book icon"></i>
              <h3>Registro Matricula</h3>
            </a>
          </div>
          <div className="box xy">
            <a href="https://form.jotform.com/222577838940670" target="_blank">
              <i class="fa-solid fa-handshake icon"></i>
              <h3>Envio de actividades</h3>
            </a>
          </div>
          <div className="box xy">
          <a href="https://www.jotform.com/build/222577542404657" target="_blank">
            <i class="fa-solid fa-money-bill icon"></i>
            <h3>Configurar metodo de pago</h3>
          </a>
          </div>
        </div>
        <a href="#" onClick={() => setContinuar(0)}>Ir atras</a>
        {error && <div className='error'><p>Estamos trabajando en ello.</p></div>}
      </div>
      }
    </>
  );
}

export default App;

