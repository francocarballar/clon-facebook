import React, { useRef, useContext } from 'react'
import '../AccountSettings/AccountSettings.css'
import { Context } from '../../context'
import { useOutside } from '../../hooks/useOutside'
import { useDarkMode } from '../../hooks/useDarkMode'
import { ContainerIcon } from '../ContainerIcon'
import { BsArrowLeftShort } from 'react-icons/bs'
import { IoMoon } from 'react-icons/io5'

function ScreenAndAccessibility () {
  const { setScreenAndAccessibility, setAccountSettings, theme } =
    useContext(Context)
  const containerScreenAndAccesibilityRef = useRef(null)
  useOutside(containerScreenAndAccesibilityRef, setScreenAndAccessibility)
  const { prefersColorScheme, activated, disabled } = useDarkMode()
  const isChecked = (truthy, inputTruthy, falsy, inputFalsy, inputFalsyTwo) => {
    const inputs =
      containerScreenAndAccesibilityRef.current.querySelectorAll('ul input')
    inputs[inputTruthy].checked = truthy
    inputs[inputFalsy].checked = falsy
    inputs[inputFalsyTwo].checked = falsy
  }
  const handleDisabled = () => {
    isChecked(true, 0, false, 1, 2)
    disabled()
  }
  const handleActivated = () => {
    isChecked(true, 1, false, 0, 2)
    activated()
  }

  const handleAutomatic = () => {
    isChecked(true, 2, false, 0, 1)
    prefersColorScheme()
  }
  return (
    <div
      className='container_AccountSettings containerScreenAndAccesibility p-4 d-flex flex-column gap-3 text-dark'
      ref={containerScreenAndAccesibilityRef}
    >
      <div className='d-flex flex-row justify-content-start align-items-center gap-2'>
        <button
          type='button'
          className='btn px-1'
          onClick={() => {
            setScreenAndAccessibility(false)
            setAccountSettings(true)
          }}
        >
          <BsArrowLeftShort />
        </button>
        <h3 className='fs-2 fw-bold'>Pantalla y accesibilidad</h3>
      </div>
      <div className='d-flex flex-row justify-content-start align-items-start'>
        <ContainerIcon>
          <IoMoon />
        </ContainerIcon>
        <div
          className='d-flex flex-column justify-content-start align-items-start gap-1 ms-3'
          style={{ maxWidth: '260px' }}
        >
          <h4 className='fs-4 fw-semibold'>Modo oscuro</h4>
          <p className='fs-5'>
            Ajusta el aspecto de Facebook para reducir el reflejo y dar un
            descanso a la vista.
          </p>
          <ul className='w-100 p-0 d-flex flex-column gap-1'>
            <li
              className='fs-4 fw-semibold d-flex flex-row justify-content-between align-items-center'
              onClick={handleDisabled}
            >
              <label htmlFor='darkmode'>Desactivado</label>
              <span>
                <input
                  type='radio'
                  name='darkmode'
                  defaultChecked={theme && theme === 'light'}
                />
                <div />
              </span>
            </li>
            <li
              className='fs-4 fw-semibold d-flex flex-row justify-content-between align-items-center'
              onClick={handleActivated}
            >
              <label htmlFor='darkmode'>Activado</label>
              <span className='active'>
                <input
                  type='radio'
                  name='darkmode'
                  defaultChecked={theme && theme === 'dark'}
                />
                <div />
              </span>
            </li>
            <li
              className='fs-4 fw-semibold d-flex flex-row justify-content-between align-items-center'
              onClick={handleAutomatic}
            >
              <label htmlFor='darkmode'>Automático</label>
              <span className='active'>
                <input type='radio' name='darkmode' defaultChecked={!theme} />
                <div />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export { ScreenAndAccessibility }
