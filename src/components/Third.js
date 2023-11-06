import college from '../images/college.jpeg';
import pic from '../images/WhatsApp Image 2023-11-04 at 12.12.08 PM.jpeg';

import './Third.css';
function Third(){
    return(
        <div>
            <img alt='clg' className='clg' src={college}></img>
            <br></br>
            <br></br>
                <h1 className='cse'>-- CSE Students --</h1>
            <img alt='class' className='class' src={pic}></img>
        </div>

    );
}
export default Third;
