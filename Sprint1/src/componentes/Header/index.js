import React, {useContext} from 'react'
import Nike from "../../images/logo.jpg"
import { Link } from "react-router-dom"
import { DataContext } from "../../context/dataProvider";

export const Header = () => {

    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [carrito] = value.carrito

    const toogleMenu = () => {
        setMenu(!menu)
    }
  return (
    <>
    <header>
        
        <Link  to="/">
            <div>
                <img src={Nike} height="100" width="150"/>
            </div>
        </Link>
        <ul>
        <li>
            <Link to="/"> INICIO </Link>
        </li>
        <li>
            <Link to="/menu"> MENÚ </Link>
        </li>
        </ul>
        <Link  to="/login">
            <div>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAADnUlEQVR4nO2Z24tNURzHf2sMYiaSJoyUSxrlRQa5TnlBlCmXkhfUlEeDB8mDSfg3eCDGSCl5lHJ7cIkXg1xDcqkZJjOmTB8Pe586fmcdzt77d84eWZ86dX77tL+/72+ttddeax2RQCAQCAQCgcD/iatlMmCxiLSLSJuITBeRWfFPb0Xkg4jcEJHLzrkHtfRVVQAHbAOeUDm9wFagph1kDjAHuJ2gcM0tYHbedaQCWAV8zFB8gS/A2rzrSQTQBgx7ivkBnAN2AC1AQ/xpia+dL3PfMLAm77oqgmjYf/YU0U0Fwzm+/4Ln/k+V3J8rRBOefuZ/AvtSaHXG9xZzsxq+zQC2e3oucfFFegc8elssPZsR975+1XUb6PYozccWfs0BWpXRYWCuge5sosmzmEUWnkVE6qyERGSzii85515mFXXOvRaRy+pye1bdApYN0KZibToLWkvnSo1lA8xU8T1D7ft/yZU/wIB6ThsNtRuV9oCVtuUIqDfU0mifY6olnIV+FTcbas9QcZ+VsGUDPFVxq6H2EhU/sRK2bIC7KjZ7VUnpK9ZygrUBWO1ZCM0z0J3jWQgtt/BsClDnWQpfMNC9qJfCjNaTImA3pXRm0Dvo0dtl6dmUeBTcUYZ/AvtTaB2gdDt8C7Cct+whOt3p9/RcDxVsjoC5nmEP0AfMr0UNmQHWUzpxQTQxdgM7gQVEK7zG+PvO+DffkdgQsC7vuhIRN8JXTzFJ+frPFV8AWFGmRytlGFiRdx2JASYDXdiNgC5gUt51VQSwFnhrULjmA7Ah7/rKQvQKPAmMlCmgHzgDdABLgSZgbPxpiq91AGcpP3JGgBOMtoUQMAY4XcZ0L9ECaUICvQnAHsr/n3gKMNsSZyLu+W6PyUGis/3U5wRAPdGCaNCjf47RsCgCjnnMvQeWGeZYBLzx5DlqlSOtsU2UPvMPAMvDkEKu5li7mBFgo3WuSg01xj1dzLtqFF+Uswl45slpdv6YxMxJZWTIctj/Ie9C4LvKfbzaebWJGXHBxaTe9qbIf8TT+NNqlV+Aw8pALxlm+xT5GzyP36FaJa8DXqjku2uS/Hcfe5WH59RigUTpn6D9JFjkGPqYCHxTXhYn1UmzkFil4ivOuaEUOplwzg2KyFV1WXv7KxYNcD2FhhXXVLwyqUCaBlig4ocpNKx4pOKWpAJpGmCKil+n0LDilYqnVj0jpRuTcVVPWt7LeOVlMC8vgUAgEAgEAoF/jV//s3azwMmw4AAAAABJRU5ErkJggg=="/>
            </div>
        </Link>
        <div className="cart" onClick={toogleMenu}>
            <box-icon name="cart"></box-icon>
            <span className="item__total"> {carrito.length}</span>

        </div>

    </header>
    </>
  )
}

export default Header;
