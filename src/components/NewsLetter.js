'use client'
import { apiService } from '@/backend/apiservice';
import React, { useState } from 'react'

export default function NewsLetter({ content }) {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState({ text: '', type: '' }); // type: 'success' | 'error'

    const handleSubmit = async (e) => {
        e?.preventDefault(); // Prevent default form submission
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            setMessage({ text: 'Please enter your email address', type: 'error' });
            return;
        }
        
        if (!emailRegex.test(email)) {
            setMessage({ text: 'Please enter a valid email address', type: 'error' });
            return;
        }

        setIsLoading(true);
        setMessage({ text: '', type: '' });

        try {
            const formData = {
                "email": email
            };
            
            const response = await apiService.submitSubscribe(formData);
            console.log('Subscription successful:', response);
            
            setMessage({ 
                text: 'Thank you for subscribing!', 
                type: 'success' 
            });
            setEmail(''); // Clear the input on success
            
        } catch (error) {
            console.error('Subscription error:', error);
            setMessage({ 
                text: 'Failed to subscribe. Please try again.', 
                type: 'error' 
            });
        } finally {
            setIsLoading(false);
        }
    };

    // Handle form submission on Enter key
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <div style={{
            maxWidth: '100%',
            backgroundColor: '#f8f9fa',
            padding: '2rem 0 1rem 0'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 1rem',
                position: 'relative'
            }}>
                <div>
                    {/* Header Section */}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        marginBottom: '2rem'
                    }}>
                        <div style={{
                            gridColumn: 'span 10',
                            textAlign: 'center'
                        }}>
                            <h2 style={{
                                margin: '0 0 0.5rem 0',
                                fontSize: '2.5rem',
                                fontWeight: '700',
                                lineHeight: '1.2'
                            }}>
                                {content.title}
                            </h2>
                            <div style={{
                                marginTop: '0.5rem',
                                fontSize: '1rem',
                                lineHeight: '1.5'
                            }}>
                                <p>{content.description}</p>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        marginBottom: '1.5rem'
                    }}>
                        <div style={{
                            gridColumn: 'span 6',
                            width: '100%',
                            maxWidth: '600px'
                        }}>
                            <form onSubmit={handleSubmit}>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1rem'
                                }}>
                                    <div style={{
                                        flex: '1',
                                        minWidth: '200px'
                                    }}>
                                        <div style={{
                                            position: 'relative'
                                        }}>
                                            <input 
                                                type="email" 
                                                aria-label="Enter your email here"
                                                autoComplete="email"
                                                name="email"
                                                placeholder="Enter your email here"
                                                value={email}
                                                onChange={(e) => {
                                                    setEmail(e.target.value);
                                                    // Clear message when user starts typing
                                                    if (message.text) {
                                                        setMessage({ text: '', type: '' });
                                                    }
                                                }}
                                                onKeyPress={handleKeyPress}
                                                disabled={isLoading}
                                                style={{
                                                    width: '100%',
                                                    padding: '12px 16px',
                                                    border: '2px solid #e5e7eb',
                                                    borderRadius: '8px',
                                                    fontSize: '16px',
                                                    lineHeight: '1.5',
                                                    backgroundColor: '#ffffff',
                                                    transition: 'all 0.2s ease-in-out',
                                                    boxSizing: 'border-box'
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div style={{
                                        display: 'inline-flex',
                                        flexShrink: 0
                                    }}>
                                        <button 
                                            type="submit"
                                            disabled={isLoading}
                                            style={{
                                                padding: '12px 24px',
                                                backgroundColor: isLoading ? '#6b7280' : '#dc2626',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '8px',
                                                fontSize: '16px',
                                                fontWeight: '600',
                                                cursor: isLoading ? 'not-allowed' : 'pointer',
                                                transition: 'all 0.2s ease-in-out',
                                                width: '100%',
                                                minWidth: '140px'
                                            }}
                                            onMouseEnter={(e) => {
                                                if (!isLoading) {
                                                    e.target.style.backgroundColor = '#b91c1c';
                                                }
                                            }}
                                            onMouseLeave={(e) => {
                                                if (!isLoading) {
                                                    e.target.style.backgroundColor = '#dc2626';
                                                }
                                            }}
                                        >
                                            {isLoading ? 'Subscribing...' : 'Sign me up!'}
                                        </button>
                                    </div>
                                </div>
                            </form>

                            {/* Message Display */}
                            {message.text && (
                                <div style={{
                                    marginTop: '1rem',
                                    padding: '12px 16px',
                                    borderRadius: '8px',
                                    backgroundColor: message.type === 'success' ? '#dcfce7' : '#fef2f2',
                                    border: `1px solid ${message.type === 'success' ? '#bbf7d0' : '#fecaca'}`,
                                    color: message.type === 'success' ? '#166534' : '#dc2626',
                                    fontSize: '14px',
                                    textAlign: 'center'
                                }}>
                                    {message.text}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Terms Section */}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap'
                    }}>
                        <div style={{
                            paddingTop: '0',
                            textAlign: 'center',
                            gridColumn: 'span 10',
                            margin: '0 auto'
                        }}>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}