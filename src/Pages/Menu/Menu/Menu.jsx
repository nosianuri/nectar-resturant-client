import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/menu-bg.png';


const Menu = () => {
    return (
        <div>
        <Helmet>
            <title>Nectar Nook | Menu</title>
        </Helmet>
        <Cover img={menuImg} title="Our Menu"></Cover>
            
        </div>
    );
};

export default Menu;