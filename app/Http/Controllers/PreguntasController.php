<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegistroPreguntaRequest;
use App\Models\Pregunta;
use App\Models\Respuesta;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PreguntasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Preguntas', [
            'preguntas' => Pregunta::get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(RegistroPreguntaRequest $request)
    {
        try {
            Pregunta::create($request->all());
        } catch (\Throwable $th) {
            //throw $th;
        }finally{
            return redirect()->back();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Inertia::render('Preguntas/PreguntaShow', [
            'pregunta' => Pregunta::find($id),
            'respuestas' => Respuesta::where('pregunta_id', $id)->get(),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            Pregunta::findOrFail($id)->delete();
        } catch (\Throwable $th) {
            //throw $th;
        }finally{
            return redirect()->back();
        }
    }
}
