import ContactForm from '@/app/Contact/contactForm';
import Alert from '@/app/alert';
import AlertProvider from '@/providers/alertProvider';

export default function Contact() {
    return (
        <AlertProvider>
            <Alert id='alert' />
            <main className='flex min-h-screen flex-col items-center justify-between lg:p-16 py-8'>
                <ContactForm />
            </main>
        </AlertProvider>
    );
}