import React from 'react'

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">PELICULAS</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">generos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Directores</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Productores</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Tipos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Peliculas y Series</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
