'use client';
import { useEffect, FC } from 'react';
import { IAlert } from '@/contexts/alertContext';
import useAlert from '@/hooks/useAlert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faExclamation } from '@fortawesome/free-solid-svg-icons';

interface IAlertProps {
    id: string;
}

const Alert: FC<IAlertProps> = ({ id }) => {
    const { alerts, removeAlert, clearAlerts } = useAlert();

    useEffect(() => {
        console.log('clearing alerts');
        clearAlerts(id);
        return () => {
            clearAlerts(id);
        }
    }, []);

    useEffect(() => {
        if (alerts.length > 0) {
            setTimeout(() => {
                removeAlert(alerts[0]);
            }, 5000);
        }
    }, [alerts]);

    return (
        <div className='fixed top-10 left-[50%] translate-x-[-50%] z-50 flex flex-col gap-4 items-end p-4'>
            {alerts.map((alert: IAlert) => (
                <div key={alert.id} className={`flex flex-row items-center justify-between w-[300px] h-[100px] container-glass rounded-md p-4 bg-${alert.type} bg-opacity-25`}>
                    <FontAwesomeIcon icon={faExclamation} className='w-8 h-8' />
                    <p className='flex-1'>{alert.message}</p>
                    <button className='w-8 h-8' onClick={() => removeAlert(alert)}>
                        <FontAwesomeIcon icon={faX} className='w-8 h-8' />
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Alert;