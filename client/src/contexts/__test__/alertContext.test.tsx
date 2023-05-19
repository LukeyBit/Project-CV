import { FC, ReactNode } from 'react';
import AlertProvider from '@/providers/alertProvider';
import { IAlert, IAlertContext } from '@/contexts/alertContext';
import { render } from '@testing-library/react';
import useAlert from '@/hooks/useAlert';
import { act } from 'react-dom/test-utils';

jest.useFakeTimers();

interface AlertProviderProps {
    children: ReactNode,
    onContextValue: (contextValue: IAlertContext) => void;
}

const DummyComponent: FC<AlertProviderProps> = ({ children, onContextValue }) => {
    const contextValue = useAlert();

    onContextValue(contextValue);

    return <>{children}</>;
};

it('should test the alert context using the AlertProvider component', () => {
    const mockOnContextValue = jest.fn();

    render(
        <AlertProvider>
            <DummyComponent onContextValue={mockOnContextValue}>
                <></>
            </DummyComponent>
        </AlertProvider>
    );

    expect(mockOnContextValue).toHaveBeenCalledWith({
        alerts: [],
        addAlert: expect.any(Function),
        removeAlert: expect.any(Function),
        clearAlerts: expect.any(Function),
    });

    const { addAlert } = mockOnContextValue.mock.calls[0][0];

    const mockAlert: IAlert = {
        message: 'Test alert',
        type: 'success',
        className: 'test-alert',
        id: 'test',
    };

    act(() => {
        addAlert(mockAlert);
    });

    expect(mockOnContextValue).toHaveBeenCalledWith({
        alerts: [mockAlert],
        addAlert: expect.any(Function),
        removeAlert: expect.any(Function),
        clearAlerts: expect.any(Function),
    });

    jest.advanceTimersByTime(3000);

    expect(mockOnContextValue).toHaveBeenCalledWith({
        alerts: [],
        addAlert: expect.any(Function),
        removeAlert: expect.any(Function),
        clearAlerts: expect.any(Function),
    });
});

it('should test the alert context using the AlertProvider component with multiple alerts', () => {
    const mockOnContextValue = jest.fn();

    render(
        <AlertProvider>
            <DummyComponent onContextValue={mockOnContextValue}>
                <></>
            </DummyComponent>
        </AlertProvider>
    );

    expect(mockOnContextValue).toHaveBeenCalledWith({
        alerts: [],
        addAlert: expect.any(Function),
        removeAlert: expect.any(Function),
        clearAlerts: expect.any(Function),
    });

    const { addAlert } = mockOnContextValue.mock.calls[0][0];

    // define an array of mock alert objects of different types
    const mockAlerts: IAlert[] = [
        {
            message: 'Test alert 1',
            type: 'success',
            className: 'test-alert',
            id: 'test1',
        },
        {
            message: 'Test alert 2',
            type: 'error',
            className: 'test-alert',
            id: 'test2',
        },
        {
            message: 'Test alert 3',
            type: 'warning',
            className: 'test-alert',
            id: 'test3',
        },
    ];

    // call addAlert with each mock alert object
    mockAlerts.forEach((alert) => {
        act(() => {
            addAlert(alert);
        });
    });

    // expect the mock function to be called again with the updated context value
    expect(mockOnContextValue).toHaveBeenCalledWith({
        alerts: expect.any(Array),
        addAlert: expect.any(Function),
        removeAlert: expect.any(Function),
        clearAlerts: expect.any(Function),
    });

    // expect the array of alerts to have the same length as the array of mock alerts
    expect(mockOnContextValue.mock.calls).toHaveLength(
        mockAlerts.length + 1 // +1 for the initial call
    );
    
    // expect the array of alerts to contain each mock alert object
    mockAlerts.forEach((alert, index) => {
        expect(mockOnContextValue.mock.calls[index + 1][0].alerts).toContain(alert);
    });
});