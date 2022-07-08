import React from 'react'
import moment from 'moment';

import Pregunta from '../core/data/models/Pregunta'

export interface IListaPreguntasProps {
    preguntas: Pregunta[];
    handleEliminar(id: number): void;
    handleShow(id: number): void;
}

const ListaPreguntas: React.FunctionComponent<IListaPreguntasProps> = (props) => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-5">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            No.
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Pregunta
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Activo
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Fecha de creación
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Fecha de actualización
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody>
                    { props.preguntas.map(pregunta =>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                { pregunta.id }
                            </th>
                            <td className="px-6 py-4">
                                { pregunta.descripcion_pregunta }
                            </td>
                            <td className="px-6 py-4">
                                { pregunta.activo ? 'Activo' : 'Inactivo' }
                            </td>
                            <td className="px-6 py-4">
                                { moment(pregunta.created_at).format('LLL') }
                            </td>
                            <td className="px-6 py-4">
                                {  moment(pregunta.updated_at).format('LLL') }
                            </td>
                            <td className="px-6 py-4 text-right">
                                <div className="inline-flex rounded-md shadow-sm" role="group">
                                    <button type="button" className="py-2 px-4 text-sm font-medium text-white bg-blue-600 rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                                        onClick={ ()=> props.handleShow(pregunta.id) }
                                    >
                                        Ver
                                    </button>
                                    <button type="button" className="py-2 px-4 text-sm font-medium text-white bg-red-700 border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                                        onClick={()=>props.handleEliminar(pregunta.id)}
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ) }
                </tbody>
            </table>
        </div>
    )
}

export default ListaPreguntas
