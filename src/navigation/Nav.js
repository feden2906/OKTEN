import {Link} from "react-router-dom";


export default function Nav() {
  return (
    <div style={{background: '#4b79b4', height: '10vh'}}>
       <ul>
           <li><Link to={'/counter'}>Counter</Link></li>
           <li><Link to={'/home'}>Home</Link></li>
       </ul>
    </div>
  );
}