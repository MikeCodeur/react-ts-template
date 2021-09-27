import {useHistory} from 'react-router-dom'

function ErrorFallback({error, resetErrorBoundary}) {
  const history = useHistory()

  const handleClick = () => {
    history.push('/')
    resetErrorBoundary()
  }
  return (
    <div>
      <div
        role="alert"
        style={{
          height: '100%',
          textAlign: 'center',
          margin: '100px 300px',
          color: '#fff',
        }}
      >
        <h1 style={{fontSize: '2.5em'}}>Un erreur est survenue !</h1>
        <pre style={{color: 'red', fontSize: '1em'}}>
          Erreur : {error.message}
        </pre>

        <div>
          <button
            onClick={handleClick}
          >
            Accueil
          </button>
        </div>
      </div>
    </div>
  )
}

export default ErrorFallback
