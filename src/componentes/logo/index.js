import logo from '../../imagens/logo.png';
import './estilo.css';
function Logo() {
  return (
    <div className="logo">  
        <img 
        src={logo} alt="logo" 
        className='logo-img'
        />    
        <h1>Café com Letras</h1>
    </div>
  );
}   

export default Logo;