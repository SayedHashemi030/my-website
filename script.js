document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // دریافت اطلاعات از فرم
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const phone = document.getElementById('phone').value;
    const hobbies = document.getElementById('hobbies').value;
    const eyeColor = document.getElementById('eyeColor').value;
    const status = document.getElementById('status').value;

    // نمایش خوش‌آمدگویی با نام شخص
    document.getElementById('greeting').textContent = 'Danke, ' + name + '!';

    // نمایش نتایج در صفحه
    document.getElementById('resultName').textContent = 'Name: ' + name;
    document.getElementById('resultEmail').textContent = 'E-Mail: ' + email;
    document.getElementById('resultAge').textContent = 'Alter: ' + age;
    document.getElementById('resultPhone').textContent = 'Telefonnummer: ' + phone;
    document.getElementById('resultHobbies').textContent = 'Hobbys: ' + hobbies;
    document.getElementById('resultEyeColor').textContent = 'Augenfarbe: ' + eyeColor;
    document.getElementById('resultStatus').textContent = 'Familienstand: ' + status;

    // نمایش نتیجه
    document.getElementById('result').style.display = 'block';
});