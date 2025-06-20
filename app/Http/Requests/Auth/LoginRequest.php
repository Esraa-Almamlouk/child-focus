<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'phone' => ['required'],
            'password' => ['required'],
        ];
    }

    public function messages()
    {
        return [
            'phone.required' => 'الرجاء إدخال رقم الهاتف.',
            'password.required' => 'الرجاء إدخال كلمة المرور.',
        ];
    }
}
