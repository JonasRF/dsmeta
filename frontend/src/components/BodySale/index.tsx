
import { Sale } from '../../types/Sale';
import NotificationButton from '../NotificationButton';
import '../SalesCard/styles.css';

type Props = {
    sale: Sale;
}

const BodySale = ({ sale }: Props) => {
    return (

        <tr>
            <td className="tc992">{sale.id}</td>
            <td className="tc576">{new Date(sale.date).toLocaleDateString()}</td>
            <td>{sale.sellerName}</td>
            <td className="tc992">{sale.visited}</td>
            <td className="tc992">{sale.deals}</td>
            <td>{sale.amount.toFixed(2)}</td>
            <td>
                <div className="dsmeta-btn-container">
                    <NotificationButton />
                </div>
            </td>
        </tr>

    );
};

export default BodySale;