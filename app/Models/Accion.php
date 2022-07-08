<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Accion extends Model
{
    use HasFactory;

    protected $table = 'acciones';

    protected $fillable = [
        'descripcion_accion', 'activo'
    ];

    public function bitacoras(): HasMany
    {
        return $this->hasMany(Bitacora::class, 'accion_id');
    }

}
