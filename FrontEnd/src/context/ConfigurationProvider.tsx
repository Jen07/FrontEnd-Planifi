import { useState, useEffect, createContext } from 'react';
import clienteAxios from '../config/axios';
import { Configuration } from '../components/Models/Configuration.model';

const ConfigurationContext = createContext(null);

const ConfigurationProvider = ({ children }) => {

     const [configuration, configurationState] = useState([]);
     const [listConfig, listConfigState] = useState([]);
     const [configuracionEdit, setConfiguracionEdit] = useState({});


     const setConfigEdit = (configEdit) => {
          setConfiguracionEdit(configEdit);
     }

     const RegisterConfiguration = async (config: Configuration) => {

          try {
               const { data } = await clienteAxios.post(`configuration`, config);
               listConfig.push(config);
               configurationState(data);
          } catch (error) {
               console.log(error);
          }
     }

     const GetConfiguration = async () => {
          try {
               const { data } = await clienteAxios.get(`configuration`);
               listConfigState(data);
          } catch (error) {
               console.log(error);
          }

     }

     const DeleteConfiguration = async (id: string) => {
          try {
               await clienteAxios.delete(`configuration/${id}`);
               const filtredData = listConfig.filter(item => item.id !== id);
               listConfigState(filtredData);
          } catch (error) {
               console.log(error);
          }
     }

     const UpdateConfiguration = async (config) => {
          try {
               await clienteAxios.put(`configuration`, config);

               //listConfig.filter(item => item.id == config.id);

               listConfig.forEach(element => {
                    if (element.id == config.id) {
                         element = config
                    }
               });


          } catch (error) {
               console.log(error);
          }
     }

     const getConfigOfState = (id: string) => {
          return listConfig.filter(item => item.id == id);
     }

     return (
          <ConfigurationContext.Provider
               value={{
                    RegisterConfiguration,
                    configuration,
                    GetConfiguration,
                    listConfig,
                    DeleteConfiguration,
                    getConfigOfState,
                    setConfigEdit,
                    configuracionEdit,
                    UpdateConfiguration
               }}
          >
               {children}
          </ConfigurationContext.Provider>
     )
}

export {
     ConfigurationProvider
}
export default ConfigurationContext;