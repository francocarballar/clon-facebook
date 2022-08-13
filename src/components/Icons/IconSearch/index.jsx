import './IconSearch.css'

function IconSearch ({ setOpenSearch }) {
  return (
    <div href='#uno' id='search' onClick={() => setOpenSearch(true)}>
      <i className='fa-solid fa-magnifying-glass' />
      <input
        type='text'
        name='search'
        className='input-search mx-2 pe-4 fs-4 d-none d-xl-block'
        placeholder='Buscar en facebook'
        autocumple='list'
      />
    </div>
  )
}

export { IconSearch }
