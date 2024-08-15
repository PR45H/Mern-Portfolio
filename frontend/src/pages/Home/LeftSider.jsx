import React from 'react'

const LeftSider = () => {
    return (
        <div>
            <div className="flex flex-col gap-3 items-center bottom-0 left-5 fixed lg:static">
                <div className="flex flex-col gap-5 lg:flex-row">
                    <a href="https://www.facebook.com/prashant.babu.520/" target='_blank'>
                        <i className="ri-facebook-line text-xl cursor-pointer text-gray-700  w-fit"></i>
                    </a>

                    <a href="https://www.instagram.com/beatsinbits/" target='_blank'>
                        <i className="ri-instagram-line text-xl cursor-pointer text-gray-700  w-fit"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/prashant-babu-b157aa247/" target='_blank'>
                        <i className="ri-linkedin-line text-xl cursor-pointer text-gray-700  w-fit"></i>
                    </a>

                    <a href="mailto:prashantpillai7@gmail.com" target='_blank'>
                        <i className="ri-mail-line text-xl cursor-pointer text-gray-700  w-fit"></i>
                    </a>

                    <a href="https://github.com/PR45H" target='_blank'>
                        <i className="ri-github-line text-xl cursor-pointer text-gray-700  w-fit">  </i>        
                    </a>
                </div>

                <div className="h-52 w-[1px] bg-gray-800 lg:hidden"></div>

            </div>
        </div>
    )
}

export default LeftSider