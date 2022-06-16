import React, { Fragment } from 'react';
import css from '../files/file.module.css';
import Header from '../../shared/Header';
import Footer from '../../shared/Footer';
import Sidebar from '../sidebar';
import { useState } from 'react';


const AgregarVariable = () => {

    const [selectedFile, setSelectedFile] = useState(null);

    const uploadFiles = e => {
        setSelectedFile(e.target.files);
    }

    const insertFiles = async () => {

        const formData = new FormData();
        for (let index = 0; index < selectedFile.length; index++) {
            formData.append("files", selectedFile[index]);
            base64(selectedFile[index]);
        }
    }

    const base64 = (file) => {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            var ba64 = reader.result;
        }
    }

        return (
            <Fragment>
                <Header />
                <Sidebar />
                <div className="container1 p-5">
                    <br />
                    <div className={css.file_select} id="src-file1" >
                        <input type='file' className={css.files} name='files' aria-label="Archivo" multiple onChange={uploadFiles} />
                    </div>
                    <br />
                    <br />
                    <button type='submit' className='btn btn-primary' onClick={insertFiles}>Insertar Archivos</button>
                    <br />
                    <h1>jennifer vamos siiii</h1>
                </div>
                <Footer />
            </Fragment>
        );

    }
    export default AgregarVariable;