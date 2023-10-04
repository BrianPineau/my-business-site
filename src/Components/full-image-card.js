import { Link } from 'react-router-dom';
import './component-css/full-image-card.css';

const FullImageCard = (props) => { 
  return (
    <>
      <Link to={props.navLink} className={props.fimage}> 
        <div className={props.fImageSource}></div>
      </Link>
    </>
  )
}

export default FullImageCard; 