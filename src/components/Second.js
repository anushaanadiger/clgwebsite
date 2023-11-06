import logo from '../images/stjit1.png'

import './Second.css';
function Second(){
    return(
        <div className="second">
            <div>
                <img alt='' className='logo' src={logo}></img>
            </div>
            <div className='a1'>
                <h3>Home</h3>
            </div>
            <div className='a1'>
                <select className='second a2'>
                    <option>About</option>
                    <option>Governing council</option>
                    <option>GC proceeding councils</option>
                    <option>Organisation structure</option>
                </select>
                
            </div>
            <div className='a1'>
                <h3>Admission</h3>
            </div>
            <div className='a1'>
                <h3>Departments</h3>
            </div>
            <div className='a1'>
                <h3>Placement</h3>
            </div>
            <div className='a1'>
                <h3>Facilities</h3>
            </div>
            <div className='a1'>
                <h3>Contact</h3>
            </div>
        </div>
    );
}
export default Second;