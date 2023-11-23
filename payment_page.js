// payment_page.js
document.addEventListener('DOMContentLoaded', function () {
    var amountInput = document.querySelector('input[type="pay"]');
    var downloadButton = document.querySelector('button');

    var hiddenPriceElement = document.getElementById('price-hide');
    var hiddenNameElement = document.getElementById('name-hide');

    if (amountInput && downloadButton && hiddenPriceElement && hiddenNameElement) {
        downloadButton.addEventListener('click', function () {
            var enteredAmount = parseFloat(amountInput.value);
            var correctPrice = parseFloat(hiddenPriceElement.innerText);
            var fileName = hiddenNameElement.innerText + ".aep";

            if (!isNaN(enteredAmount) && enteredAmount === correctPrice) {
                var link = document.createElement('a');
                link.href = fileName;
                link.download = fileName;
                link.click();
            } else {
                alert('Incorrect amount. Please enter the correct price.');
            }
        });
    }
});