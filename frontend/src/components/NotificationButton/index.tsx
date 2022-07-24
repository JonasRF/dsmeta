import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../Assets/Image/notification-icon.svg';
import { BASE_URL } from '../../util/requests';
import './styles.css';

type Props = {
    saleId: number;
}

const handleClick = (id: number) => {
    axios.get(`${BASE_URL}/sales/${id}/notification`)
        .then((response) => {
            toast.info("SMS enviado com sucesso")
        })
}

function NotificationButton({ saleId }: Props) {
    return (
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
            <img src={icon} alt="Notificar"
            />
        </div>
    )
}

export default NotificationButton;
