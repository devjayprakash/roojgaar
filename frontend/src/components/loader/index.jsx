import React from 'react'


let Loader = () => {
    return (
        <div className={'flex justify-center items-center h-screen w-full fixed top-0 left-0 right-0 bg-white'}>
            <img width={100} height={100} src="/images/loading.gif" alt="loading image"/>
        </div>
    )
}

export default Loader