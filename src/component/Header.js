import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2';
import { IoMdLaptop } from 'react-icons/io';
import { FaTabletAlt } from 'react-icons/fa';
import { useContext } from 'react';
import DataContext from '../context/DataContext';
  
const Header = ({title}) => {
  const {width} = useContext(DataContext)
  return (
    <header className="Header">
      <h1>{title}</h1>
      {width < 768 ? <HiOutlineDevicePhoneMobile /> : width < 996 ? <FaTabletAlt /> :  <IoMdLaptop />}
    </header>
  )
}
export default Header