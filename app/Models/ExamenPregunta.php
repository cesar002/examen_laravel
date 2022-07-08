<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ExamenPregunta extends Model
{
    use HasFactory;

    protected $table = 'examenes_preguntas';

    protected $fillable = [
        'examen_id', 'pregunta_id', 'activo',
    ];

    public function examen(): BelongsTo
    {
        return $this->belongsTo(Examen::class, 'examen_id');
    }

    //public function

}
