import { useContext } from 'react';
import { AlertContext } from '@/contexts/alertContext';

export function useAlert() {
    return useContext(AlertContext);
}