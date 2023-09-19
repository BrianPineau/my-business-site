import { Link } from 'react-router-dom';
import './component-css/full-image-card.css';

const FullImageCard = (props) => { 
  return (
    <>
      <Link to={props.navLink} className={props.fimage}>
        <image src={props.imgLink} alt="Image" />
      </Link>
    </>
  )
}

export default FullImageCard; 