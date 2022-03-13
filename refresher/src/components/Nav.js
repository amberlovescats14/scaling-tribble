import React from 'react';
import { Link, Outlet } from 'react-router-dom'

export default function Nav(props) {
  return (
    <div>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/test'>test</Link></li>
      </ul>
    </nav>
    <Outlet/>
    </div>
    )
}