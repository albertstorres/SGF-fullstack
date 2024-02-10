import './styles.css';
import Logo from '../../assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import ArrowBack from '../../assets/arrow-back.svg';

type Props = {
    showBack?: boolean;
}

function Header({ showBack }: Props) {
    const navigate = useNavigate();

    return (
        <header>
            {
                showBack &&
                <img
                    src={ArrowBack}
                    alt='arrow back'
                    className='arrow-back'
                    onClick={() => navigate(-1)}
                />
            }
        </header>
    );
}


export default Header;