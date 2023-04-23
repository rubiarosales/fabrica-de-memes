
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

const  Cookies= () =>{

    Swal.fire(
        'Bienvenido',
        'Acepta las cookies!'
        
      )

}

export default Cookies