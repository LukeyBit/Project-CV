import React, { createContext } from 'react';

export interface IAlert {
    message: string;
    type: 'success' | 'error' | 'warning' | 'info';
    className: string;
    id: string;
}

export interface IAlertContext {
    alerts: IAlert[];
    addAlert: (alert: IAlert) => void;
    removeAlert: (alert: IAlert) => void;
    clearAlerts: (id?: string) => void;
}

export const AlertContext: React.Context<IAlertContext> = createContext<IAlertContext>({
    alerts: [],
    addAlert: () => {},
    removeAlert: () => {},
    clearAlerts: () => {},
});
