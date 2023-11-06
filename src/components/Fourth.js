import clg2 from '../images/clg2.jpg';
import clg3 from '../images/clg3.jpg';
import clg4 from '../images/clg4.jpg';
import clg5 from '../images/clg5.jpg';
import swami from '../images/sami.jpg';
import './Fourth.css';



function Fourth(){
    return(
        <div className='f1'>
            <h1>--Welcome To Our College--</h1>
        <div className='fourth'>
            <div>
                <img alt='clgg' className='clgg' src={clg2}></img>
                <br></br>
                <h4 className='clgg2'>STJIT</h4>
                <br></br>
                <img alt='clgg' className='clgg' src={clg3}></img>
                <br></br>
                <h4 className='clgg2'>STJIT</h4>
            </div>
            <div>
                <img alt='clgg' className='clgg1' src={swami}></img>
                <br></br>
                <p className='clgg3'> Dr. Shivamurthy Shivacharya Mahaswamiji </p>
                <p className='clgg3'>President, </p>
                <p className='clgg3'>STJ Education Society</p>
            </div>
            <div>
                <img alt='clgg' className='clgg' src={clg4}></img>
                <br></br>
                <h4 className='clgg2'>STJIT</h4>
                <br></br>
                <img alt='clgg' className='clgg' src={clg5}></img>
                <br></br>
                <h4 className='clgg2'>STJIT</h4>
            </div>
        </div>
        </div>
    );
}
export default Fourth;