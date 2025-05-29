import React from 'react'
import { useFormik } from 'formik';
import { registerFormSchemas } from '../schemas/RegisterFormSchemas';

function RegisterForm() {

    const submit = (values, action) => {
        setTimeout(() => {
            action.resetForm();
        }, 2000)
        console.log(values, action);
    }

    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            age: '',
            password: '',
            confirmPassword: '',
            term: ''
        },
        validationSchema: registerFormSchemas,
        onSubmit: submit
    });
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='inputDiv'>
                    <label>Email</label>
                    <input type="text" id='email' placeholder='Email Giriniz.'
                        value={values.email} onChange={handleChange} />
                    {errors.email && <p className='input-error'>{errors.email}</p>}
                </div>

                <div className='inputDiv'>
                    <label>Yaş</label>
                    <input type="number" id='age' placeholder='Yaş Giriniz.'
                        value={values.age} onChange={handleChange} />
                    {errors.age && <p className='input-error'>{errors.age}</p>}

                </div>

                <div className='inputDiv'>
                    <label>Şifre</label>
                    <input type="password" id='password' placeholder='Şifre Giriniz.'
                        value={values.password} onChange={handleChange} />
                    {errors.password && <p className='input-error'>{errors.password}</p>}

                </div>

                <div className='inputDiv'>
                    <label>Şifre Tekrar</label>
                    <input type="password" id='confirmPassword' placeholder='Şifreyi Tekrar Giriniz.'
                        value={values.confirmPassword} onChange={handleChange} />
                    {errors.confirmPassword && <p className='input-error'>{errors.confirmPassword}</p>}

                </div>

                <div className='inputDiv'>
                    <div className='term-div'>
                        <input type="checkbox" id='term'
                            value={values.term} onChange={handleChange} />
                        <label>Kullanıcı Sözleşmesini Kabul Ediyorum</label>
                    </div>

                    {errors.term && <p className='input-error'>{errors.term}</p>}

                </div>
                <button type='submit' className='button'>Kaydet</button>

            </form>
        </div>
    )

}

export default RegisterForm