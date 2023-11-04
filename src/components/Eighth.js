import './Eighth.css'
import work from '../images/work.jpg';
import environment from '../images/environment.jpeg';
import kannada from '../images/kannada.jpeg';
import graduation from '../images/graduation.jfif';
import secura from '../images/secura.jfif';
import viewmore from '../images/viewmore.png';
function Eighth(){
    return(
        <div>
            <div className='events'>
                <h2> --Latest Events & News--</h2>
            </div>
            <div className='a'>
                <div className='ab'> 
                    <h2>Three days Workshop from 14thto 16th June</h2>
                    <h4>Department of Computer Science & Engineering conducted three days workshop on Android application Development and Python Programming from 14th to 16th June 2023.</h4>
                </div>
                <div>
                    <img className='work' src={work}></img>
                </div>
            </div>
            <br></br>
            <div className='b'>
                <div>
                    <img className='Environment' src={environment}></img>
                </div>
                <div className='ba'>
                    <h2>World Environment Day Celebration</h2>
                    <h4>NSS Unit of our Institute celebrated World Environment Day on 5thJune 2023 in our campus.</h4>
                </div>
            </div>
            <br></br>
            <div className='c'>
                <div className='ca'>
                    <h2>Kannada Rajyotsava Celebration</h2>
                    <h4>Kannada Rajyotsava was celebrated on 26th Nov 2022 at STJ Institute of Technology.</h4>
                </div>
                <div>
                    <img className='Kannada' src={kannada}></img>
                </div>
            </div>
            <br></br>
            <div className='d'>
                <div>
                    <img className='Graduation' src={graduation}></img>
                </div>
                <div className='da'>
                    <h2>Graduation day-2023</h2>
                    <h4>Graduation day was celebrated on 31st March 2023 for Students passed out in the academic year 2021-22 of STJ Institute of Technology.</h4>
                </div>
            </div>
            <br></br>
            <div className='e'>
                <div className='ea'>
                    <h2>Secura 2k23 : Sports & Extra Curricular Activities</h2>
                    <h4>Annual day celebrated on 31-05-2023 at STJ Institute of Technology.</h4>
                </div>
                <div>
                    <img className='Secura' src={secura}></img>
                </div>
            </div>
            <br></br>
            <div className='f'>
                <img className='view' src={viewmore}></img>
            </div>
        </div>
    );
}
export default Eighth;