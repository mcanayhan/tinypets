document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.urun button');
    const cartItems = document.getElementById('cart-items');
    const clearCartButton = document.getElementById('clear-cart');
    const checkoutButton = document.getElementById('checkout');
    let messageDiv; // Mesajı tutacak değişken

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const product = this.getAttribute('data-product');
            const selectElement = this.previousElementSibling;
            const option = selectElement.options[selectElement.selectedIndex].text;
            addToCart(product, option);
        });
    });

    clearCartButton.addEventListener('click', function () {
        clearCart();
    });

    checkoutButton.addEventListener('click', function () {
        placeOrder();
    });

    function addToCart(product, option) {
        const listItem = document.createElement('li');
        listItem.textContent = `${option} ${product}`;
        cartItems.appendChild(listItem);
    }

    function clearCart() {
        while (cartItems.firstChild) {
            cartItems.removeChild(cartItems.firstChild);
        }
    }

    function placeOrder() {
        if (cartItems.children.length === 0) {
            alert('Sepetiniz boş. Lütfen bir ürün ekleyin.');
        } else {
            clearCart();
            showMessage('Siparişiniz alınmıştır, keyifli alışverişler dileriz.');
        }
    }

    function showMessage(message) {
        // Önce mevcut mesaj varsa kaldırıyoruz
        if (messageDiv) {
            messageDiv.remove();
        }

        // Yeni bir div oluşturuyoruz
        messageDiv = document.createElement('div');
        messageDiv.textContent = message;
        messageDiv.classList.add('notification');
        document.body.appendChild(messageDiv);

        // Mesajı 5 saniye sonra kaldır
        setTimeout(() => {
            messageDiv.style.opacity = '0';
            setTimeout(() => {
                messageDiv.remove();
            }, 1000);
        }, 5000);
    }
});