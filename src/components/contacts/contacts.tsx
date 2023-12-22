import React from 'react'
import cl from './contacts.module.scss'
import { CSSTransition } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import { userTypedSelector } from '../../store/hooks/UseTypedSelector';
import { useActions } from '../../store/hooks/useActions';

export default function Contacts() {
  
  const {isOpen} = userTypedSelector(state => state.contacts)
  const {closeContacts} = useActions()

  return (
    <CSSTransition in={isOpen} timeout={500} classNames='bg' mountOnEnter unmountOnExit>
      <div className={cl.bg} onClick={() => closeContacts()}>
      <CSSTransition in={isOpen} timeout={500} classNames='contacts' mountOnEnter unmountOnExit>
      <div className={cl.container} onClick={e => e.stopPropagation()}>
        <div className={cl.head}>Контакты <span className={cl.closeButton} onClick={() => closeContacts()}/></div>
        <div className={cl.items}>
            <p><svg fill="#ffffff" height="32px" width="32px" viewBox="0 0 72.333 72.333" ><path d="M63.167,0h-10h-40c-6.065,0-11,4.935-11,11v50.333c0,6.065,4.935,11,11,11h40h10c3.859,0,7-3.141,7-7V7 C70.167,3.14,67.027,0,63.167,0z M13.167,66.333c-2.757,0-5-2.243-5-5V11c0-2.757,2.243-5,5-5h40c0.552,0,1,0.449,1,1v58.333 c0,0.552-0.448,1-1,1H13.167z M64.167,65.333c0,0.552-0.448,1-1,1h-3.08c0.047-0.327,0.08-0.659,0.08-1V7 c0-0.34-0.032-0.672-0.08-1h3.08c0.552,0,1,0.449,1,1V65.333z"></path> <path d="M51.944,45.633c-1.013-1.163-5.406-5.564-6.169-6.328c-0.48-0.528-1.967-1.941-4.132-1.941 c-1.072,0-2.118,0.357-3.025,1.035c-0.742,0.555-1.76,1.437-2.635,2.219c-1.197-0.712-2.64-1.631-3.627-2.442 c-2.075-1.706-3.948-3.922-5.717-6.764c0.885-0.986,1.767-2.007,2.321-2.751c1.896-2.537,0.98-5.496-0.921-7.17 c-0.803-0.803-5.158-5.147-6.31-6.151c-1.008-0.88-2.245-1.345-3.577-1.345c-1.014,0-1.771,0.272-2.05,0.39 c-0.162,0.068-0.318,0.15-0.466,0.246l-0.269,0.173c-2.544,1.635-6.029,3.874-6.211,11.861 c-0.006,7.593,5.726,14.792,10.565,19.514c5.031,5.501,12.717,12.023,20.88,12.023c0.022,0,0.057,0,0.079-0.001 c7.924-0.18,10.161-3.666,11.794-6.211l0.173-0.268c0.094-0.146,0.176-0.301,0.243-0.462 C53.487,49.848,53.596,47.528,51.944,45.633z M40.611,52.201l-0.008,3v-3c-6.323,0-13.056-6.349-16.507-10.133 c-0.041-0.044-0.082-0.087-0.125-0.129c-5.688-5.533-8.817-10.957-8.815-15.205c0.1-4.353,1.172-5.387,2.966-6.568 c1.11,1.033,3.781,3.673,5.581,5.472c-0.641,0.779-1.656,1.922-2.924,3.287c-0.868,0.936-1.049,2.318-0.451,3.446l0.857,1.616 c0.027,0.051,0.056,0.102,0.086,0.151c2.195,3.615,4.574,6.452,7.272,8.67c2.414,1.985,6.279,4.053,6.442,4.14 c1.132,0.604,2.521,0.422,3.457-0.454c0.966-0.9,2.27-2.077,3.196-2.84c1.797,1.799,4.437,4.467,5.472,5.58 C45.932,51.03,44.904,52.102,40.611,52.201z"></path>
            </svg> +7 925 985 98 40</p>
            <p><svg fill="#ffffff" height="32px" width="32px" viewBox="0 0 75.29 75.29">
              <path d="M66.097,12.089h-56.9C4.126,12.089,0,16.215,0,21.286v32.722c0,5.071,4.126,9.197,9.197,9.197h56.9 c5.071,0,9.197-4.126,9.197-9.197V21.287C75.295,16.215,71.169,12.089,66.097,12.089z M61.603,18.089L37.647,33.523L13.691,18.089 H61.603z M66.097,57.206h-56.9C7.434,57.206,6,55.771,6,54.009V21.457l29.796,19.16c0.04,0.025,0.083,0.042,0.124,0.065 c0.043,0.024,0.087,0.047,0.131,0.069c0.231,0.119,0.469,0.215,0.712,0.278c0.025,0.007,0.05,0.01,0.075,0.016 c0.267,0.063,0.537,0.102,0.807,0.102c0.001,0,0.002,0,0.002,0c0.002,0,0.003,0,0.004,0c0.27,0,0.54-0.038,0.807-0.102 c0.025-0.006,0.05-0.009,0.075-0.016c0.243-0.063,0.48-0.159,0.712-0.278c0.044-0.022,0.088-0.045,0.131-0.069 c0.041-0.023,0.084-0.04,0.124-0.065l29.796-19.16v32.551C69.295,55.771,67.86,57.206,66.097,57.206z"></path>
              </svg> m-millutin@hotmail.com /  m-milutin@mail.ru</p>
            <p><svg fill="#ffffff" height="32px" width="32px" viewBox="0 0 69.606 69.606">
              <path d="M34.803,0C15.613,0,0,15.612,0,34.802s15.612,34.804,34.803,34.804s34.803-15.613,34.803-34.804 C69.606,15.612,53.993,0,34.803,0z M34.803,63.606C18.921,63.606,6,50.685,6,34.802C6,18.921,18.921,6,34.803,6 s28.803,12.92,28.803,28.802C63.606,50.685,50.685,63.606,34.803,63.606z"></path> <path d="M47.925,17.751l-19.922,8.376c-0.042,0.015-0.081,0.037-0.123,0.053c-0.013,0.005-0.026,0.012-0.039,0.017 c-0.172,0.071-0.335,0.157-0.49,0.258c-0.004,0.002-0.008,0.005-0.012,0.007c-0.04,0.026-0.083,0.047-0.122,0.076 c-0.51,0.365-0.894,0.884-1.096,1.481l-8.37,19.904c-0.473,1.124-0.218,2.422,0.644,3.284c0.574,0.574,1.342,0.879,2.122,0.879 c0.392,0,0.787-0.076,1.162-0.234l19.929-8.38c0.056-0.02,0.106-0.047,0.16-0.069c0.009-0.003,0.017-0.007,0.025-0.011 c0.152-0.064,0.299-0.142,0.438-0.23c0.033-0.021,0.067-0.039,0.1-0.061c0.012-0.009,0.024-0.015,0.036-0.022 c0.135-0.095,0.261-0.201,0.377-0.315c0.009-0.009,0.019-0.014,0.027-0.022c0.04-0.04,0.068-0.088,0.105-0.13 c0.073-0.082,0.145-0.164,0.208-0.254c0.058-0.08,0.106-0.163,0.155-0.247c0.036-0.063,0.069-0.126,0.101-0.19 c0.048-0.101,0.093-0.2,0.129-0.305c0.005-0.014,0.013-0.026,0.018-0.04l8.366-19.896c0.473-1.124,0.218-2.422-0.645-3.284 C50.348,17.533,49.051,17.279,47.925,17.751z M39.605,35.332L34.272,30l9.201-3.868L39.605,35.332z M30.018,34.232l5.355,5.354 l-9.241,3.886L30.018,34.232z"></path>
                </svg>Шоу рум, 115419, Россия, г. Москва, ул. Орджоникидзе, д.11 стр.3</p>
            <p><a href="https://vk.com/id710234058"><svg fill="#ffffff" width="32px" height="32px" viewBox="0 0 50 50"><path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37.72,33l-3.73-0.01 c0,0-0.08,0.01-0.21,0.01c-0.3,0-0.92-0.08-1.65-0.58c-1.31-0.91-2.56-3.17-3.55-3.17c-0.07,0-0.13,0.01-0.19,0.03 c-0.86,0.27-1.12,1.13-1.12,2.18c0,0.37-0.26,0.54-0.96,0.54h-1.93c-2.16,0-4.25-0.05-6.6-2.62c-3.46-3.79-6.7-10.53-6.7-10.53 s-0.18-0.39,0.01-0.62c0.18-0.21,0.6-0.23,0.76-0.23c0.04,0,0.06,0,0.06,0h4c0,0,0.37,0.07,0.64,0.27c0.23,0.17,0.35,0.48,0.35,0.48 s0.68,1.32,1.53,2.81c1.43,2.46,2.2,3.28,2.75,3.28c0.09,0,0.18-0.02,0.27-0.07c0.82-0.45,0.58-4.09,0.58-4.09s0.01-1.32-0.42-1.9 c-0.33-0.46-0.96-0.59-1.24-0.63c-0.22-0.03,0.14-0.55,0.62-0.79c0.62-0.3,1.65-0.36,2.89-0.36h0.6c1.17,0.02,1.2,0.14,1.66,0.25 c1.38,0.33,0.91,1.62,0.91,4.71c0,0.99-0.18,2.38,0.53,2.85c0.05,0.03,0.12,0.05,0.21,0.05c0.46,0,1.45-0.59,3.03-3.26 c0.88-1.52,1.56-3.03,1.56-3.03s0.15-0.27,0.38-0.41c0.22-0.13,0.22-0.13,0.51-0.13h0.03c0.32,0,3.5-0.03,4.2-0.03h0.08 c0.67,0,1.28,0.01,1.39,0.42c0.16,0.62-0.49,1.73-2.2,4.03c-2.82,3.77-3.14,3.49-0.8,5.67c2.24,2.08,2.7,3.09,2.78,3.22 C39.68,32.88,37.72,33,37.72,33z"></path></svg></a>ВКонтакте</p>
        </div>
    </div>
    </CSSTransition>
    </div>
    </CSSTransition>
  )
}