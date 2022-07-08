import React, { useState, useEffect } from 'react'
import { Inertia } from '@inertiajs/inertia';

import route from '../Utils/route';

import AppLayout from '../Layouts/AppLayout'
import ListaPreguntas from '../Components/ListaPreguntas'
import RegistroPregunta from '../Components/RegistroPregunta'
import Pregunta from '../core/data/models/Pregunta';

interface IRegistroPreguntasState {
    descripcionPregunta: string;
    preguntaActiva: number;
}

interface IPreguntasPageProps {
    preguntas: Pregunta[],
    errors: any;
}

const Preguntas: React.FC<IPreguntasPageProps> = (props) => {

    const [ descripcion, setDescripcion ] = useState<string>('');
    const [ activo, setActivo ] = useState<number>(0);

    useEffect(()=>{
        setDescripcion('');
        setActivo(0);
    }, [props.preguntas]);

    const setDescripcionPregunta = (pregunta: string): void => {
        setDescripcion(pregunta);
    };

    const setPreguntaActiva = (checked: any): void => {
        setActivo(checked == 0 ? 1 : 0);
    }

    const registrarPregunta = (): void => {
        Inertia.post(route('preguntas.store'), {
            'descripcion_pregunta': descripcion,
            'activo': activo,
        }, {
            preserveScroll: true,
        });
    }

    const eliminarPregunta = (id: number): void => {
        Inertia.delete(route('preguntas.destroy', {
            id: id,
        }), {
            preserveScroll: true ,
        });
    }

    const verPregunta = (id: number): void => {
        Inertia.get(route('preguntas.show', { id: id }));
    }

    return (
        <AppLayout
            titulo='Preguntas'
        >
            <RegistroPregunta
                handleChangeDescripcionPregunta={ setDescripcionPregunta }
                handleChangePreguntaActiva={ setPreguntaActiva }
                handleClick={ registrarPregunta }
                descripcionPregunta={descripcion}
                preguntaActiva={activo}
                error={ props.errors.descripcion_pregunta}
            />
            <ListaPreguntas
                preguntas={props.preguntas}
                handleEliminar={ eliminarPregunta }
                handleShow = { verPregunta }
            />
        </AppLayout>
    )
}

export default Preguntas
