import {Link} from 'react-router-dom';

export default function Nav() {
  return (
      <nav>
          <ul className={'nav-links'}>
              <Link to={'/characters'}><li>characters</li></Link>
              <Link to={'/inventory'}><li>inventory</li></Link>
          </ul>
      </nav>
  );
}