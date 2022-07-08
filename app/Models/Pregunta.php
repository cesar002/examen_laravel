<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Pregunta extends Model
{
    use HasFactory;

    protected $fillable = [
        'descripcion_pregunta', 'activo',
    ];


    public function examenes(): BelongsToMany
    {
        return $this->belongsToMany(Examen::class, 'examenes_preguntas', 'examen_id', 'pregunta_id');
    }

    public function respuestas(): HasMany
    {
        return $this->hasMany(Respuesta::class);
    }

}
