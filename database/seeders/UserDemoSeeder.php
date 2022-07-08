<?php

namespace Database\Seeders;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserDemoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'nombre' => 'Julio César',
            'paterno' => 'Castillo',
            'materno' => 'Aguirre',
            'email' => 'prueba@prueba.com',
            'email_verified_at' => Carbon::now(),
            'password' => Hash::make('password'),
        ]);
    }
}
