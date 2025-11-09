import * as React from 'react';
import Button from './ui/Button';

const Contact: React.FC = () => {
    const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus('loading');

        const form = event.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
                form.reset();
            } else {
                const data = await response.json();
                console.error('Form submission failed:', data);
                setStatus('error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setStatus('error');
        }
    };
    
    const renderContent = () => {
        switch (status) {
            case 'success':
                return (
                    <div className="text-center p-8 bg-white rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold text-teal-700 mb-2">Thank You!</h3>
                        <p className="text-gray-600">Your message has been sent. I will get back to you within 24 hours to schedule your call.</p>
                    </div>
                );
            case 'error':
                 return (
                    <div className="text-center p-8 bg-white rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold text-red-700 mb-2">Oops! Something went wrong.</h3>
                        <p className="text-gray-600 mb-4">Your message could not be sent. Please try again.</p>
                        <Button onClick={() => setStatus('idle')} variant="secondary">
                            Try Again
                        </Button>
                    </div>
                );
            default:
                return (
                    <form 
                        action="https://api.web3forms.com/submit" 
                        method="POST" 
                        onSubmit={handleSubmit}
                        className="space-y-6 bg-white p-8 rounded-lg shadow-lg"
                    >
                        <input type="hidden" name="access_key" value="87774ba7-dcf7-411b-9e40-5e0a81ae5151" />
                        <input type="hidden" name="subject" value="New Inquiry from Clarity & Courage Website" />

                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/50"
                                disabled={status === 'loading'}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/50"
                                disabled={status === 'loading'}
                            />
                        </div>
                         <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number <span className="text-xs text-gray-500">(Optional)</span></label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/50"
                                disabled={status === 'loading'}
                                placeholder="(123) 456-7890"
                                autoComplete="tel"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Tell me a little about what you'd like to achieve</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                required
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/50"
                                disabled={status === 'loading'}
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <Button type="submit" disabled={status === 'loading'}>
                                {status === 'loading' ? 'Sending...' : 'Send Message'}
                            </Button>
                        </div>
                    </form>
                );
        }
    };


    return (
        <section id="contact" className="py-20 bg-stone-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold font-serif text-teal-800">Ready to Start Your Journey?</h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                        Your first step towards a more empowered life is just a message away. <br/>
                        Book your complimentary discovery call today.
                    </p>
                </div>
                <div className="max-w-xl mx-auto">
                    {renderContent()}
                </div>
            </div>
        </section>
    );
};

export default Contact;