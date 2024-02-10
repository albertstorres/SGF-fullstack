import './styles.css';
// import Avatar from '../Avatar';
import { useNavigate } from 'react-router-dom';

type Props = {
    feira: {
        id: number;
        nome: string;
        feiras_id: number;
    }
}

function FeiraCard({ feira }: Props) {
    const navigate = useNavigate();

    function handleFeiraDetail() {
        navigate('/feira-detalhe');
    }

    return (
        <div
            className='feiras-card'
            onClick={handleFeiraDetail}
        >
            <h1>{feira.nome}</h1>
        </div>
    );
}


export default FeiraCard;