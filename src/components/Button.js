import '../styles/Button.css';

function Button({ utility, state, setState }) {
    return (
        <button 
            className={`
            bg-blue-500
            hover:bg-blue-700 
            text-white 
            font-bold 
            py-2 px-4 
            rounded`}
            onClick={() => {setState(!state)}}
        >
        {utility}
      </button>
    )
}

export default Button;