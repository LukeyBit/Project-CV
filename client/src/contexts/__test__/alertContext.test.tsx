import { FC, ReactNode } from 'react';
import AlertProvider from '@/providers/alertProvider';
import { IAlertContext } from '@/contexts/alertContext';
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
    const mockAlert = {
        message: 'Test alert',
        type: 'success',
        style: { backgroundColor: 'green', color: 'white' },
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