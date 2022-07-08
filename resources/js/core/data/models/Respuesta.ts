export default interface Respuesta {
    id: number;
    pregunta_id: number;
    descripcion_respuesta: string;
    correcta: boolean;
    activo: boolean;
    created_at: string;
    updated_at: string;
}
