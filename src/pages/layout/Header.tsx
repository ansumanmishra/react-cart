import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <>
      <div className="header">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </>
  )
}