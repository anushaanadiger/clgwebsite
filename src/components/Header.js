import phone from '../images/call2.png';
import clock from '../images/clock.png';

function Header(){
    return(
       <div className='first'>
       <div className='phone'>
         <img className='pic' src={phone}></img>
         <h3>08373-266343, 262075</h3>
       </div>
       <div className='fax'>
         <h3> Fax: 08373-266427</h3>
       </div> 
       <div className='contact'>
         <img className='pic2' src={clock}></img>
         <h4>CET CODE : E033</h4>
       </div>
       <div classname='research'>
         <h3>Research Program</h3>
       </div>
       <div className='alumini'>
         <h2>Alumini</h2>
       </div>
     </div>
     
    );
}
export default Header;