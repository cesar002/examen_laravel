
import React, { useState } from 'react'
import { Inertia } from '@inertiajs/inertia';

import AppLayout from '../../Layouts/AppLayout'
import ListaRespuestas from '../../Components/ListaRespuestas';
import RegistroRespuestas from '../../Components/RegistroRespuesta';

import Pregunta from '../../core/data/models/Pregunta';
import Respuesta from '../../core/data/models/Respuesta';

interface IPreguntaShowPageProps {
    errors: any;
    pregunta: Pregunta;
    respuestas: Respuesta[]
}

const PreguntasShow: React.FC<IPreguntaShowPageProps> = (props) => {

    const [ respuesta, setRespuesta ] = useState<string>('');
    const [ correcta, setCorrecta ] = useState<number>(1);
    const [ activa, setActiva ] = useState<number>(1);

    const _setCorrecta = (checked: any): void => {
        setCorrecta(checked == 0 ? 1 : 0);
    }

    const _setActiva = (checked: any): void => {
        setActiva(checked == 0 ? 1 : 0);
    }

    const registrarRespuesta = (pregunta_id: number) => {

    }

    return (
        <AppLayout
            titulo='Pregunta'
        >
            <RegistroRespuestas
                respuesta = { respuesta }
                correcta = { correcta }
                activa = { activa }
                handleChangeRespuesta = { setRespuesta }
                handleChangeCorrecta = { _setCorrecta }
                handleChangeActiva = { _setActiva }
            />
            <ListaRespuestas
                respuestas={ props.respuestas }
            />
        </AppLayout>
    )
}

export default PreguntasShow
