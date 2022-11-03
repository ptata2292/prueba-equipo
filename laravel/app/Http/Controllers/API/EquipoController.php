<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Models\Equipo;
Use Log;

class EquipoController extends Controller
{

    public function getAll(){
      $data = Equipo::get();
      return response()->json($data, 200);
    }

    public function create(Request $request){
      $data['name'] = $request['name'];
      $data['ip'] = $request['ip'];
      $data['marca'] = $request['marca'];
      $data['conecta'] = $request['conecta'];
      $data['noconecta'] = $request['noconecta'];
      
      Equipo::create($data);
      return response()->json([
          'message' => "Successfully created",
          'success' => true
      ], 200);
    }

    public function delete($id){
      $res = Equipo::find($id)->delete();
      return response()->json([
          'message' => "Successfully deleted",
          'success' => true
      ], 200);
    }

    public function get($id){
      $data = Equipo::find($id);
      return response()->json($data, 200);
    }

    public function update(Request $request,$id){
      $data['name'] = $request['name'];
      $data['ip'] = $request['ip'];
      $data['marca'] = $request['marca'];
      $data['conecta'] = $request['conecta'];
      $data['noconecta'] = $request['noconecta'];
      
      Equipo::find($id)->update($data);
      return response()->json([
          'message' => "Successfully updated",
          'success' => true
      ], 200);
    }

    public function ping(Request $request,$id){
      $data['name'] = $request['name'];
      $data['ip'] = $request['ip'];
      $data['marca'] = $request['marca'];
      $data['conecta'] = $request['conecta'];
      $data['noconecta'] = $request['noconecta'];
      
      $ip = $data['ip'];
      $output = shell_exec("ping $ip");
      
      if (strpos($output, "recibidos = 0")) {
        $data['noconecta'] += 1;
        Equipo::find($id)->update($data);
        return response()->json([
              'message' => "No Conectado",
              'success' => true
          ], 200);
      } else {
        $data['conecta'] += 1;
        Equipo::find($id)->update($data);
        return response()->json([
              'message' => "Conectado",
              'success' => true
          ], 200);
      }
      // Equipo::find($id)->update($data);
      // return response()->json([
      //     'message' => "Successfully updated",
      //     'success' => true
      // ], 200);
    }

}
