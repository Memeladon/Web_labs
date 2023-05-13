$(document).ready(function () {
    $("form").submit(function (event) {
        var phoneInput = $("#phone");
        var phoneRegex =
            /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

        if (!phoneRegex.test(phoneInput.val())) {
            alert("Пожалуйста, введите корректный номер телефона!");
            event.preventDefault();
        }
    });
});