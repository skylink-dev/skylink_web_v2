import React from 'react'

export default function TitleComponent({ title }) {
    return (
        <div className="max-width-background pad-t-md pad-b-none theme-base-bg bgcolor">
            <div className="container">
                <div className="row flex-items-stretch justify-center">
                    <div className="rel grid-col-10 text-center">
                        <h2 className="heading-xxl" dangerouslySetInnerHTML={{ __html: title }} />
                    </div>
                </div>
            </div>
        </div>
    )
}
