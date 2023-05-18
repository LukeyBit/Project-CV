import { useContext } from 'react';
import { AlertContext } from '@/contexts/alertContext';

export default function useAlert() {
    return useContext(AlertContext);
}