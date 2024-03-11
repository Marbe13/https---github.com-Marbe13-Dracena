// paypal_integration.js

function createPayPalPayment() {
    const payload = {
        USER: 'AVBv_dyCDjAqbDDkqIuRuoQuSnzv30pQZSYu7vEr vd8VmPg4aKipUGagbEFZoo7-OPLsanWpI94Shoj-',
        PWD: 'EFhKogqhmMopRwMGQIysvoow5CkSvr37RWGG2OjU a3VzSJYF2fHLsHENre1Mu0qmDLfqauHL76puAjph',
        SIGNATURE: 'Dracena',
        METHOD: 'SetExpressCheckout',
        VERSION: '78',
        AMT: '10',
        cancelUrl: 'https://example.com/cancel',
        returnUrl: 'https://example.com/success'
    };
    
    // Configuración de encabezados HTTP (si es necesario)
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        // Otros encabezados según lo requiera la llamada a la API de PayPal
    };
    
    // Realizar la llamada a la API de PayPal utilizando fetch()
    fetch('https://api-3t.sandbox.paypal.com/nvp', {
        method: 'POST',
        headers: headers,
        body: new URLSearchParams(payload)
    })
    .then(response => response.text())
    .then(data => {
        // Procesar la respuesta de PayPal
        console.log(data);
    })
    .catch(error => {
        console.error('Error al realizar la llamada a la API de PayPal:', error);
    });
}

