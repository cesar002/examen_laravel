<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Examen extends Model
{
    use HasFactory;

    protected $table = 'examenes';

    protected $fillable = [
        'user_id', 'numPreguntas',
    ];


    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function examenesPreguntas(): BelongsToMany
    {
        return $this->belongsToMany(Pregunta::class, 'examenes_preguntas', 'examen_id', 'pregunta_id');
    }

}
