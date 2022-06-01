import useAlertas from '../hooks/useAlertas'
const Alert = ({ children }) => {
 
  const { setStateAlerta } = useAlertas()

  const actualizarStateAlerta = () => {
    setStateAlerta(false)
  }

  return (
    <div
      className='alert alert-danger alert-dismissible fade show'
      role='alert'
    >
      <strong>Obligatorio!</strong> {children}
      <button
        onClick={actualizarStateAlerta}
        type='button'
        className='btn-close'
        data-bs-dismiss='alert'
        aria-label='Close'
      ></button>
    </div>
  )
}

export default Alert
