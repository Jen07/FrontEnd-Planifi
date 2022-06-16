import React, { Fragment, useState } from 'react';
import useUser from '../../hooks/useUser';
import { Link, useNavigate } from "react-router-dom";
import css from './login.module.css';
import Swal from 'sweetalert2';



const Login = () => {

  const redireccionar = useNavigate();
  const { verifyCredentials } = useUser();

  const [InputValues, setInputValues] = useState({
    userName: '',
    password: ''
  })

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    //Validaciones
    verifyCredentials(InputValues);
    // localStorage.setItem("isLogin", "true");
    redireccionar("/home/Configuraciones");
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Bienvenido al Sistema',
      showConfirmButton: false,
      timer: 2700
    })

  }

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...InputValues,
      [evt.target.name]: evt.target.value

    })
  }

  return (
    <Fragment>
      <section className={css.myform_area}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className={css.form_area}>
                <div className={css.form_content}>
                  <h2>¿Aún no tienes una cuenta?
                  </h2>
                  <p>Regístrate para que puedas iniciar sesión</p>
                  <div className={css.myform_button_white}>
                    <Link to={"/register"}
                      id="btn__registrarse"
                      className="btn btn-primary">Regístrarse</Link>
                  </div>

                </div>
                <div className={css.form_input}>
                  <h2>Inicio Sesión</h2>
                  <form onSubmit={handleSubmit}>
                    <div className={css.form_group}>
                      <input onChange={handleChange} type="text" id="userName" name='userName' value={InputValues.userName} required />
                      <label>Nombre de Usuario</label>
                    </div>
                    <div className={css.form_group}>
                      <input onChange={handleChange} type="password" id="password" name='password' value={InputValues.password} required />
                      <label>Contraseña</label>
                    </div>
                    <div className={css.myform_button}>
                      <button className={css.myform_btn}>Iniciar Sesión</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </Fragment>
  );
}
export default Login;