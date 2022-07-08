import React from 'react';
import moment from 'moment';

import Respuesta from '../core/data/models/Respuesta'

import Table from './Table';

interface IListaRespuestaProps{
    respuestas: Respuesta[];
}

const ListaRespuestas: React.FunctionComponent<IListaRespuestaProps> = ({
    respuestas
}) => {
    return (
        <Table
            columnas={[
                'No', 'Respuesta', 'Correcta', 'Activo',
                'Fecha de creación', 'Fecha de actualización'
            ]}
        >
            { respuestas.map(respuesta =>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                        { respuesta.id }
                    </th>
                    <td className="px-6 py-4">
                        { respuesta.descripcion_respuesta }
                    </td>
                    <td className="px-6 py-4">
                        { respuesta.correcta ? 'Correcta' : 'Incorrecta' }
                    </td>
                    <td className="px-6 py-4">
                        { respuesta.activo ? 'Activo' : 'Inactivo' }
                    </td>
                    <td className="px-6 py-4">
                        { moment(respuesta.created_at).format('LLL') }
                    </td>
                    <td className="px-6 py-4">
                        {  moment(respuesta.updated_at).format('LLL') }
                    </td>
                    {/* <td className="px-6 py-4 text-right">
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
                    </td> */}
                </tr>
            ) }
        </Table>
    )
}

export default ListaRespuestas
