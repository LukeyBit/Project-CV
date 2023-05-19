// Test the Alert component:
import React, { FC } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Alert from '@/app/alert';
import AlertProvider from '@/providers/alertProvider';
import { IAlert } from '@/types';
import useAlert from '@/hooks/useAlert';
import { act } from 'react-dom/test-utils';

jest.useFakeTimers();

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

const DummyComponent: FC = () => {
    const { addAlert } = useAlert();

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
    it('renders multiple alerts with the correct messages and classNames that can be dismissed', () => {
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
        act(() => {
            screen.getByText('test-2').click();
        });
        act(() => {
            screen.getByText('test-3').click();
        });
        act(() => {
            screen.getByText('test-4').click();
        });
        const alerts = screen.getAllByRole('alert');
        expect(alerts.length).toBe(4);
        mockAlerts.forEach((mockAlert: IAlert) => {
            expect(screen.getByText(mockAlert.message)).toBeInTheDocument();
        });
        expect(alerts[0]).toHaveClass('test-alert-1');
        expect(alerts[0]).toHaveClass('bg-success');
        expect(alerts[1]).toHaveClass('test-alert-2');
        expect(alerts[1]).toHaveClass('bg-error');
        expect(alerts[2]).toHaveClass('test-alert-3');
        expect(alerts[2]).toHaveClass('bg-warning');
        expect(alerts[3]).toHaveClass('test-alert-4');
        expect(alerts[3]).toHaveClass('bg-info');
        
        act(() => {
            screen.getAllByTestId('alert-dismiss')[0].click()
        });
        expect(screen.getAllByRole('alert').length).toBe(3);
        act(() => {
            screen.getAllByTestId('alert-dismiss')[0].click()
        });
        expect(screen.getAllByRole('alert').length).toBe(2);
        act(() => {
            screen.getAllByTestId('alert-dismiss')[0].click()
        });
        expect(screen.getAllByRole('alert').length).toBe(1);
        act(() => {
            screen.getAllByTestId('alert-dismiss')[0].click()
        });
        expect(screen.getByTestId('alert-container').children.length).toBe(0);
    });
});