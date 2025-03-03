function getFormvalue() {
    //Write your code here
	event.preventDefault(); 

    let fname = document.forms["form1"]["fname"].value.trim();
    let lname = document.forms["form1"]["lname"].value.trim();

    if (fname === "" || lname === "") {
        alert("Please enter both first and last name.");
        return;
    }

    alert(fname + " " + lname);


}