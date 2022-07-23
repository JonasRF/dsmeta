import axios, { AxiosRequestConfig } from "axios";
import { useCallback, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Sale } from "../../types/Sale";
import { springPage } from "../../types/vendor/spring";
import { requestBackend } from "../../util/requests";
import BodySale from "../BodySale";
import NotificationButton from '../NotificationButton';
import './styles.css';

function SalesCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    const [page, setPage] = useState<springPage<Sale>>();

    const getSales = useCallback(() => {
        const dmin = minDate.toISOString().slice(0, 10);
        const dmax = maxDate.toISOString().slice(0, 10);

        const params: AxiosRequestConfig = {
            method: 'GET',
            url: `sales?minDate=${dmin}&maxDate=${dmax}`,
        };
        requestBackend(params).then((response) => {
            setPage(response.data);
        });
    }, [minDate, maxDate]);

    useEffect(() => {
        getSales();
    }, [getSales]);

    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>
            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="tc992">ID</th>
                            <th className="tc576">Data</th>
                            <th>Vendedor</th>
                            <th className="tc992">Visitas</th>
                            <th className="tc992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {page?.content.map((sale) => (
                            <BodySale sale={sale} key={sale.id} />
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SalesCard;
