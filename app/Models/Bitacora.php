<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Bitacora extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'accion_id', 'observacion'
    ];

    public function user():  BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function accion(): BelongsTo
    {
        return $this->belongsTo(Accion::class, 'accion_id');
    }

}
