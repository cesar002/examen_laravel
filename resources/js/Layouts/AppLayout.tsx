import React from 'react'

import NavBar from '../Components/NavBar';

interface IAppLayout {
    titulo?: string;
    children?: React.ReactNode;
}

const AppLayout: React.FunctionComponent<IAppLayout> = ({
    titulo,
    children,
}) => {
    return (
        <div className='w-full h-screen bg-gray-200'>
            <NavBar />
            <div className='bg-white rounded-md shadow-lg w-auto my-14 mx-24 px-10 py-8'>
                <h3 className='text-gray-700 text-2xl'>
                    { titulo }
                </h3>
                <div className='my-4'>
                    { children }
                </div>
            </div>
        </div>
    )
}

export default AppLayout
