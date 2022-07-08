import React from 'react'

interface IRegistroPreguntaProps {
    handleClick?(): void;
    handleChangeDescripcionPregunta(text: string): void;
    handleChangePreguntaActiva(checked: any): void;
    descripcionPregunta: string;
    preguntaActiva: number;
    error?: string;
}

const RegistroPregunta: React.FunctionComponent<IRegistroPreguntaProps> = (props) => {

    return (
        <>
        <div className='flex flex-row mt-5 mb-2'>
            <div>
                <label htmlFor="pregunta_descripcion" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Descripción de la pregunta
                </label>
                <input type="text" id="pregunta_descripcion" className={`bg-gray-50 border w-96 ${ props.error ? 'border-red-600' : 'border-gray-300'  } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} required
                    value={ props.descripcionPregunta }
                    onChange={ e => props.handleChangeDescripcionPregunta(e.target.value)}
                />
                { props.error &&
                    <span className='my-2 text-red-600 text-sm'>
                        { props.error }
                    </span>
                }
            </div>
            <div className="flex items-center pt-5 my-5 mx-5">
                <input id="pregunta_activa" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    value = { props.preguntaActiva }
                    onChange={ e => props.handleChangePreguntaActiva(e.target.value) }
                />
                <label htmlFor="pregunta_activa" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Pregunta Activa
                </label>
            </div>
        </div>
        <button type="button"
            className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={ props.handleClick }
        >
            Registrar Pregunta
        </button>
        </>
    )
}

RegistroPregunta.defaultProps = {
    handleClick: ()=>{},
    handleChangeDescripcionPregunta: (text: string) => {},
    handleChangePreguntaActiva: (check: any) => {},
}

export default RegistroPregunta
