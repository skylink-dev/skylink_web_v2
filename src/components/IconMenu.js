import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export default function IconMenu({ content, onSelect, activeId }) {
    return (
        <>
        <div className="max-width-background  bgcolor theme-base-bg ">
            <div className="container pad-l-none pad-r-none">
                <div className="row nopad">
                    <div className="grid-col-12">
                    <div className="jsx-2592051375 category-nav-list overflow-hidden overflow-x-scroll overflow-y-hidden scrollbar-hidden flex rel ">
                    <ul className="jsx-2592051375 centered nowrap">
                        {content.map((item, index) => (
                            <li key={index}  onClick={() => onSelect(item.id)}  className={`inline-block text-center mar-t-xxs mar-b-xxs  ${
                                activeId === item.id ? 'active' : ''
                            }`}>
                                <Link href={item.linkdata} className="flex-column justify-start flex-items-center type-xs font-bold wrap link-text3">
                                        <Image style={{"marginBottom":"5px"}} width={28} height={28} src={item.icon} alt={item.title} />
                                            {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}
