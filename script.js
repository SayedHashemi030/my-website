const form = document.querySelector('.form');
const thanks = document.querySelector('.thanks-message');

// اعتبارسنجی فرم
function validateForm(formData) {
    for (let key in formData) {
        if (!formData[key]) {
            alert(`Bitte füllen Sie das Feld ${key} aus!`);
            return false;
        }
    }
    return true;
}

// وقتی فرم ارسال میشه
form.addEventListener('submit', function (e) {
    e.preventDefault(); // جلوگیری از رفرش شدن صفحه

    // دریافت داده‌ها از فرم
    const formData = {
        name: form.querySelector('input[placeholder="Name"]').value,
        email: form.querySelector('input[placeholder="E-Mail"]').value,
        phone: form.querySelector('input[placeholder="Telefonnummer"]').value,
        age: form.querySelector('input[placeholder="Alter"]').value,
        eyeColor: form.querySelector('input[placeholder="Augenfarbe"]').value,
        maritalStatus: form.querySelector('select').value,
        hobbies: form.querySelector('input[placeholder="Hobbys"]').value
    };

    // اعتبارسنجی فرم
    if (!validateForm(formData)) {
        return;
    }

    // نمایش اطلاعات در کنسول
    console.log("Eingabedaten:", formData);

    // ارسال به سرور (با استفاده از fetch)
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // داده‌ها به فرمت JSON
    })
    .then(response => response.json())
    .then(data => {
        console.log('Erfolgreich gesendet:', data);
    })
    .catch((error) => {
        console.error('Fehler:', error);
    });

    // پنهان کردن فرم و نمایش پیام تشکر
    form.style.display = 'none';
    thanks.style.display = 'block';
});