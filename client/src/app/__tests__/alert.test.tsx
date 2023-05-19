// Test the Alert component:
import React, { FC, useEffect } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Alert from '@/app/alert';
import AlertProvider from '@/providers/alertProvider';
import { IAlert } from '@/types';
import useAlert from '@/hooks/useAlert';
import { act } from 'react-dom/test-utils';

jest.useFakeTimers();

const DummyComponent: FC = () => {
    const { addAlert } = useAlert();

    const mockAlerts: IAlert[] = [
        {
            message: 'Test alert 1',
            type: 'success',
            className: 'test-alert-1',
            id: 'test-1',
        },
        {
            message: 'Test alert 2',
            type: 'error',
            className: 'test-alert-2',
            id: 'test-2',
        },
        {
            message: 'Test alert 3',
            type: 'warning',
            className: 'test-alert-3',
            id: 'test-3',
        },
        {
            message: 'Test alert 4',
            type: 'info',
            className: 'test-alert-4',
            id: 'test-4',
        }
    ];

    return (
        <>
            {mockAlerts.map((alert) => (
                <button
                    key={alert.id}
                    onClick={() => addAlert(alert)}>
                    {alert.id}
                </button>
            ))}

        </>
    );
}

describe('Alert', () => {
    it('renders an alert with the correct message and classNames', () => {
        render(
            <AlertProvider >
                <Alert id='test' />
                <DummyComponent />
            </AlertProvider>
        );
        expect(screen.getByTestId('alert-container')).toBeInTheDocument();
        act(() => {
            screen.getByText('test-1').click();
        });
        expect(screen.getByText('Test alert 1')).toBeInTheDocument();
        expect(screen.getByRole('alert')).toHaveClass('bg-success');
        expect(screen.getByRole('alert')).toHaveClass('test-alert-1');
        act(() => {
            jest.advanceTimersByTime(5000);
        });
        expect(screen.queryByText('Test alert 1')).not.toBeInTheDocument();
    });
    jest.resetAllMocks();
    it('renders multiple alerts with the correct messages and classNames', () => {
        render(
            <AlertProvider >
                <Alert id='test' />
                <DummyComponent />
            </AlertProvider>
        );
        expect(screen.getByTestId('alert-container')).toBeInTheDocument();
        act(() => {
            screen.getByText('test-1').click();
            screen.getByText('test-2').click();
            screen.getByText('test-3').click();
            screen.getByText('test-4').click();
        });
        const alerts = screen.getAllByRole('alert');
        console.log(alerts);
        expect(alerts.length).toBe(4);
    });
});