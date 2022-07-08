import React from 'react';

interface IRegistroRespuestaProps {
    respuesta: string;
    activa: number;
    correcta: number;
    error?: string;
    handleChangeRespuesta(text: string): void;
    handleChangeCorrecta(checked: any): void;
    handleChangeActiva(checked: any): void;
}

const RegistroRespuesta: React.FunctionComponent<IRegistroRespuestaProps> = ({
    respuesta,
    activa,
    correcta,
    error,
    handleChangeRespuesta,
    handleChangeCorrecta
}) => {
    return (
        <>
        <div className='flex flex-row mt-5 mb-2'>
            <div>
                <label htmlFor="pregunta_descripcion" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Descripción de la pregunta
                </label>
                <input type="text" id="pregunta_descripcion" className={`bg-gray-50 border w-96 ${ error ? 'border-red-600' : 'border-gray-300'  } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} required
                    value={ respuesta }
                    onChange={ e => handleChangeRespuesta(e.target.value)}
                />
                { error &&
                    <span className='my-2 text-red-600 text-sm'>
                        { error }
                    </span>
                }
            </div>
            <div className="flex items-center pt-5 my-5 mx-5">
                <input id="pregunta_activa" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    value = { correcta }
                    onChange={ e => handleChangeCorrecta(e.target.value) }
                />
                <label htmlFor="pregunta_activa" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Pregunta Correcta
                </label>
            </div>
            <div className="flex items-center pt-5 my-5 mx-5">
                <input id="pregunta_activa" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    value = { activa }
                    onChange={ e => handleChangeCorrecta(e.target.value) }
                />
                <label htmlFor="pregunta_activa" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Pregunta Activa
                </label>
            </div>
        </div>
        </>
    )
}


export default RegistroRespuesta;
