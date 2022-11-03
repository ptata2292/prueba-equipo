<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Models\User;
Use Log;

class UserController extends Controller
{

    public function getAll(){
      $data = User::get();
      return response()->json($data, 200);
    }

    public function get(Request $request){

      $user = User::where('email', $request['email'])->first();
        return response()->json($user, 200);
    }

}
