/**
 *  Pages Authentication
 */

'use strict';
const formAuthentication = document.querySelector('#formAuthentication');

document.addEventListener('DOMContentLoaded', function (e) {
    (function () {
    // Form validation for Add new record
    if (formAuthentication) {
        const fv = FormValidation.formValidation(formAuthentication, {
            fields: {
            phone: {
                validators: {
                notEmpty: {
                    message: 'الرجاء ادخال رقم الهاتف'
                },
                stringLength: {
                    min: 9,
                    max: 9,
                    message: 'رقم الهاتف يجب ان يتكون من 9 أرقام'
                }
                }
            },
            password: {
                validators: {
                notEmpty: {
                    message: 'الرجاء ادخال كلمة المرور'
                },
                }
            },
            },
            plugins: {
            trigger: new FormValidation.plugins.Trigger(),
            bootstrap5: new FormValidation.plugins.Bootstrap5({
                eleValidClass: '',
                rowSelector: '.mb-6'
            }),
            submitButton: new FormValidation.plugins.SubmitButton(),

            defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
            autoFocus: new FormValidation.plugins.AutoFocus()
            },
            init: instance => {
            instance.on('plugins.message.placed', function (e) {
                if (e.element.parentElement.classList.contains('input-group')) {
                e.element.parentElement.insertAdjacentElement('afterend', e.messageElement);
                }
            });
            }
        });
        }

        //  Two Steps Verification
        const numeralMask = document.querySelectorAll('.numeral-mask');

        // Verification masking
        if (numeralMask.length) {
        numeralMask.forEach(e => {
            new Cleave(e, {
            numeral: true
            });
        });
        }
    })();
    });
