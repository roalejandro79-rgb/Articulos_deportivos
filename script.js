// ========== CARRITO ==========
let carrito = []; 

// ========== AGREGAR PRODUCTO AL CARRITO ==========
function agregarAlCarrito(id) {
    // Datos de los productos con precios en pesos colombianos
    const productos = {
        1: { nombre: 'Balón de Fútbol', precio: 85000, icono: '⚽' },
        2: { nombre: 'Raqueta de Tenis', precio: 320000, icono: '🎾' },
        3: { nombre: 'Zapatillas Running', precio: 280000, icono: '👟' },
        4: { nombre: 'Guantes de Boxeo', precio: 180000, icono: '🥊' }
    };

    const producto = productos[id];
    
    // Verificar si el producto ya está en el carrito
    const existente = carrito.find(item => item.id === id);
    
    if (existente) {
        existente.cantidad++;
    } else {
        carrito.push({
            id: id,
            nombre: producto.nombre,
            precio: producto.precio,
            icono: producto.icono,
            cantidad: 1
        });
    }
    
    // Actualizar el carrito
    actualizarCarrito();
    
    // Mostrar mensaje con formato de pesos
    const precioFormateado = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    }).format(producto.precio);
    
    alert('✅ ' + producto.nombre + ' agregado al carrito\nPrecio: ' + precioFormateado);
}

// ========== ACTUALIZAR EL CARRITO ==========
function actualizarCarrito() {
    const contenedor = document.getElementById('carritoContenido');
    const totalElement = document.getElementById('totalCarrito');
    
    // Formateador de moneda para COP
    const formatter = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    });
    
    // Si el carrito está vacío
    if (carrito.length === 0) {
        contenedor.innerHTML = '<p>🛒 El carrito está vacío</p>';
        totalElement.textContent = formatter.format(0);
        return;
    }
    
    // Mostrar los productos del carrito
    let html = '<ul style="list-style: none; padding: 0;">';
    let total = 0;
    
    carrito.forEach(item => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;
        html += '<li style="padding: 10px 0; border-bottom: 1px solid #eee;">';
        html += item.icono + ' ' + item.nombre;
        html += ' - ' + formatter.format(item.precio) + ' x ' + item.cantidad;
        html += ' = ' + formatter.format(subtotal);
        html += '</li>';
    });
    
    html += '</ul>';
    contenedor.innerHTML = html;
    totalElement.textContent = formatter.format(total);
}

// ========== INICIALIZAR ==========
console.log(' Tienda Deportiva cargada correctamente');
console.log(' Precios en Pesos Colombianos (COP)');
