import React from 'react'

export default function CustomSearch({data}) {
    return (
        <>
            <div className="mar-b-sm">
                <div className="jsx-4220609227 container genai-widget bg-att-blue-000 color-gray-800 radius-lg radius-lg no-radius-md no-radius-sm">
                    <div className="jsx-4220609227 pad-xs">
                        <div className="jsx-4220609227 pad-xxs pad-l-none pad-b-none flex flex-items-center gap8">
                            <svg aria-label="AI Icon" focusable="false" className="" height="32" width="32" viewBox="0 0 24 24"><g clipPath="url(#clip0_9363_8781)"><path fillRule="evenodd" clipRule="evenodd" d="M18 0.772522H18.72C19.0725 4.76252 19.2375 4.93502 23.2275 5.28002V6.00002C19.2375 6.35252 19.065 6.51752 18.72 10.5075H18C17.6475 6.51752 17.4825 6.34502 13.4925 6.00002V5.28002C17.4825 4.92752 17.655 4.76252 18 0.772522ZM9.74249 4.48499H10.5C11.1825 12.375 11.61 12.795 19.5 13.485V14.2425C11.61 14.925 11.19 15.3525 10.5 23.2425H9.74249C9.05999 15.3525 8.63249 14.9325 0.742493 14.2425V13.485C8.63249 12.8025 9.05249 12.375 9.74249 4.48499Z" fill="#1D2329"></path></g><defs><clipPath id="clip0_9363_8781"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>
                            <h2 className="mar-none heading-md">Ask me about Skylink support</h2>
                        </div>
                        <div className="jsx-1633917891 form-row rel ">
                            <input className="jsx-1633917891 textfield " id="genai-text-field" placeholder="Try to make your question specific — it will help me give you a better answer." max="true" value={data} />
                        </div>
                        <div className="jsx-4220609227 genai-responseWrapper flex genai-rowView flex-column-md flex-column-sm pad-b-xxs">
                            <div className="jsx-4220609227 genai-commonQuestions pad-t-xxs-sm pad-t-xxs-md"><div className="jsx-899740876 flex col-gap8">
                                <button type="button" className="jsx-1019481514 btn-secondary  btn-small">
                                    <div className="questionClamp">How do I make a payment?</div>
                                </button>
                                <button type="button" className="jsx-1019481514 btn-secondary  btn-small">
                                    <div className="questionClamp">How do I request a Number Transfer PIN?</div>
                                </button>
                            </div>
                            </div>
                            <div className="jsx-4220609227 genai-answerBlock">
                            </div>
                            <div className="jsx-4220609227 genai-submitBtn pad-xs-sm pad-xs-md pad-xs pad-r-none pad-b-none" style={{"margin": "0px 0px 0px auto"}}>
                                <button type="button" aria-label="Submit button" className="jsx-1019481514 btn-primary ">Get my answer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
