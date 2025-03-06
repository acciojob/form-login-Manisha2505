function getFormvalue() {
            // Get the input values
            let firstName = document.querySelector("input[name='fname']").value.trim();
            let lastName = document.querySelector("input[name='lname']").value.trim();

            // Check if both fields are filled
            if (firstName === "" || lastName === "") {
                alert("Please enter both first and last names.");
                return;
            }

            // Display the full name in an alert
            alert(firstName + " " + lastName);
        }