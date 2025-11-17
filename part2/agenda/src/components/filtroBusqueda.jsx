const FiltroBusqueda = ({ filtro, manejarFiltro }) => {
  return (
    <div>
      <span> Filter shown with: <input value={filtro} onChange={manejarFiltro} /></span>
    </div>
  )
}

export default FiltroBusqueda
