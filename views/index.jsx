<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>


    <script>
        var request = require('request');
        function updateClient(postData) {
            console.log("updateClient");
            fetch('http://localhost:5002/process_post', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "id": 123456,
                    "first_name": document.getElementsByName("first_name")[0].value,
                    "last_name": document.getElementsByName("last_name")[0].value
                })
            })
                .then(response => response.json())
                .then(response => {
                    console.log("response:" + response.first_name + " " + response.last_name);
                    console.log(JSON.stringify(response));
                })
        }
    </script>
</head>

<body>
    <form action="http://localhost:5002/process_post" method="post">
        First Name: <input type="text" name="first_name"> <br>

        Last Name: <input type="text" name="last_name">
        <input type="submit" value="Submit">
    </form>

    <button id="btn_1" onclick="updateClient() ">click me!</button>
</body>

</html>