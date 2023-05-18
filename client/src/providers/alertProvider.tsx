'use client';
import React, { useState, useMemo, FC } from 'react';
import { IAlert, AlertContext } from '@/contexts/alertContext';

interface AlertProviderProps {
    children: React.ReactNode;
}

const AlertProvider: FC<AlertProviderProps> = ({ children }) => {
    const [alerts, setAlerts] = useState<IAlert[]>([]);

    function addAlert(alert: IAlert): void {
        setAlerts([...alerts, alert]);
    }

    function removeAlert(alert: IAlert): void {
        setAlerts(alerts.filter((a) => a !== alert));
    }

    function clearAlerts(id?: string): void {
        if (id) {
            setAlerts(alerts.filter((a) => a.id !== id));
        } else {
            setAlerts([]);
        }
    }

    const value = useMemo(() => {
        return {
            alerts,
            addAlert,
            removeAlert,
            clearAlerts,
        };
    },[alerts]);

    return (
        <AlertContext.Provider value={value} >
            {children}
        </AlertContext.Provider>
    )
}

export default AlertProvider;