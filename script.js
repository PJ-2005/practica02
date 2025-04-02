// Manejar el formulario de pago
document.getElementById('paymentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validar los campos del formulario
    const email = document.getElementById('email').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expiry = document.getElementById('expiry').value;
    const cvv = document.getElementById('cvv').value;
    const name = document.getElementById('name').value;
    const termsChecked = document.getElementById('termsCheck').checked;
    
    if (!email || !cardNumber || !expiry || !cvv || !name || !termsChecked) {
        alert('Por favor complete todos los campos y acepte los términos y condiciones');
        return;
    }
    
    // Simular procesamiento de pago
    setTimeout(function() {
        // Mostrar modal de éxito
        var successModal = new bootstrap.Modal(document.getElementById('successModal'));
        var buyModal = bootstrap.Modal.getInstance(document.getElementById('buyModal'));
        
        buyModal.hide();
        successModal.show();
        
        // Limpiar el formulario
        document.getElementById('paymentForm').reset();
    }, 1500);
});

// Cerrar modales al hacer clic fuera de ellos
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        var modal = bootstrap.Modal.getInstance(event.target);
        modal.hide();
    }
});