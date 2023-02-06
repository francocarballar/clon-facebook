import './IconSearch.css'
import { AiOutlineSearch } from 'react-icons/ai'

function IconSearch ({ setOpenSearch }) {
  return (
    <div href='#search' id='search' onClick={() => setOpenSearch(true)}>
      <AiOutlineSearch />
      <input
        type='text'
        name='search'
        className='input-search mx-2 pe-4 fs-4 d-none d-xl-block'
        placeholder='Buscar en facebook'
        autoComplete='list'
      />
    </div>
  )
}

export { IconSearch }
