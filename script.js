document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Collect form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var age = document.getElementById('age').value;
    var phone = document.getElementById('phone').value;
    var hobbies = document.getElementById('hobbies').value;
    var eyeColor = document.getElementById('eyeColor').value;
    var status = document.getElementById('status').value;

    // Display result
    document.getElementById('result').style.display = 'block';
    document.getElementById('greeting').textContent = 'Thank you, ' + name + '!';
    document.getElementById('resultName').textContent = 'Name: ' + name;
    document.getElementById('resultEmail').textContent = 'E-Mail: ' + email;
    document.getElementById('resultAge').textContent = 'Age: ' + age;
    document.getElementById('resultPhone').textContent = 'Phone Number: ' + phone;
    document.getElementById('resultHobbies').textContent = 'Hobbies: ' + hobbies;
    document.getElementById('resultEyeColor').textContent = 'Eye Color: ' + eyeColor;
    document.getElementById('resultStatus').textContent = 'Marital Status: ' + status;
});