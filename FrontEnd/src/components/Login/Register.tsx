import React, { Fragment, useState } from 'react';
import useUser from '../../hooks/useRegister';
import { Link, useNavigate } from "react-router-dom";
import css from './login.module.css';

const Register = () => {

     const redireccionar = useNavigate();
     const { RegisterUser } = useUser();

     const [InputValues, setInputValues] = useState({
          userName: '',
          name: '',
          lastName: '',
          mail: '',
          birthDay: '',
          password: ''
     })

     const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
          evt.preventDefault();
          //Validaciones
          RegisterUser(InputValues);
          resetInputField();
          redireccionar('/login');
     }

     const resetInputField = () => {
          setInputValues({
               userName: '',
               name: '',
               lastName: '',
               mail: '',
               birthDay: '',
               password: ''
          });
     };

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
                                             <h2>¿Tienes una cuenta?
                                             </h2>

                                             <p>Si ya tienes una cuenta, Inicia sesión</p>
                                             <div >
                                                  <Link className="btn btn-primary" to={"/login"} id="btn__registrarse">Iniciar Sesión</Link>
                                             </div>

                                        </div>
                                        <div className={css.form_input}>
                                             <h2>Registrarme</h2>
                                             <form onSubmit={handleSubmit}>
                                                  <div className='row'>
                                                       <div className="col-md-6">

                                                            <div className={css.form_group}>
                                                                 <input onChange={handleChange} type="text" id="userName" name='userName' value={InputValues.userName} required />
                                                                 <label>Nombre de usuario</label>
                                                            </div>
                                                       </div>

                                                       <div className="col-md-6">
                                                            <div className={css.form_group}>
                                                                 <input onChange={handleChange} type="password" name='password' value={InputValues.password} required />
                                                                 <label>Contraseña</label>
                                                            </div>

                                                       </div>

                                                  </div>

                                                  <div className='row'>
                                                       <div className="col-md-6">

                                                            <div className={css.form_group}>
                                                                 <input onChange={handleChange} type="text" id="" name='name' value={InputValues.name} required />
                                                                 <label>Nombre</label>
                                                            </div>
                                                       </div>

                                                       <div className="col-md-6">
                                                            <div className={css.form_group}>
                                                                 <input onChange={handleChange} type="date" name='birthDay' value={InputValues.birthDay} placeholder="" required />
                                                                 <label>Fecha Nacimiento</label>
                                                            </div>

                                                       </div>

                                                  </div>

                                                  <div className={css.form_group}>
                                                       <input onChange={handleChange} type="text" name='lastName' value={InputValues.lastName} required />
                                                       <label>Apellidos</label>
                                                  </div>

                                                  <div className={css.form_group}>
                                                       <input onChange={handleChange} type="text" name='mail' value={InputValues.mail} required />
                                                       <label>Correo</label>
                                                  </div>

                                                  <div className={css.myform_button}>
                                                       <button className={css.myform_btn}>Registrarme</button>
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
export default Register;