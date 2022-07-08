import React from 'react'
import { Navbar } from 'flowbite-react';
import { Inertia } from '@inertiajs/inertia';
import { Link} from '@inertiajs/inertia-react';

import route from '../Utils/route';

const NavBar: React.FunctionComponent = () => {

    const cerrarSesion = (): void => {
        Inertia.post(route('logout'));
    }

    return (
        <Navbar
            fluid={true}
            rounded={true}
            >
            <Navbar.Brand>
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Generador de examenes
                </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link
                href="/navbars"
                active={true}
                >
                    Generar Examen
                </Navbar.Link>
                <Navbar.Link>
                    <Link href={ route('preguntas.index') }>
                        Preguntas
                    </Link>
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    Usuarios
                </Navbar.Link>
                {/* <Navbar.Link href="/navbars">
                    Services
                </Navbar.Link> */}
                <Navbar.Link onClick={cerrarSesion}>
                    Cerrar sesión
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar
