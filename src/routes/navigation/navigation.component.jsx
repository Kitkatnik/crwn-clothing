import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { UserContext } from '../../contexts/user.context';
import { signOutAuthUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);

    return (
        <>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    <Link className='nav-link' to='/auth'>
                        {
                            currentUser 
                                ?
                                    (
                                        <span className='nav-link' onClick={signOutAuthUser}>SIGN OUT</span>
                                    )
                                :
                                    (
                                        <span className='nav-link' to='/auth'>SIGN IN</span>
                                    )
                        }
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navigation;