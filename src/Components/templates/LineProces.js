import ProgressBar from 'react-bootstrap/ProgressBar'; 
import './Line.css'
const Lineproces = (props)=> {
  console.log(props.props.rate);
  return (
  <>
    <div className="line">
      <p>{props.props.skill}</p>
      <div className='skill'>
        <ProgressBar variant="pink" now={props?.props.rate} label={`${props?.props.rate}%`} />
      </div>
       
    </div>
  
  </>
 
  
  ) 
}

export default Lineproces;