function updateCard() {
    var schoolNameTxt = document.getElementById("schoolName").value;
    console.log(schoolNameTxt);
    var studentNameTxt = document.getElementById("studentName").value;
    console.log(studentNameTxt);
    var dateOfBirthTxt = document.getElementById("dateOfBirth").value;
    console.log(dateOfBirthTxt);
    var classNameTxt = document.getElementById("className").value;
    console.log(classNameTxt);
    var rollNumberTxt = document.getElementById("rollNumber").value;
    console.log(rollNumberTxt);
    var contactNumberTxt = document.getElementById("contactNumber").value;
    console.log(contactNumberTxt);

    // console.log(
    //     schoolNameTxt,
    //     studentNameTxt,
    //     dateOfBirthTxt,
    //     classNameTxt,
    //     rollNumberTxt,
    //     contactNumberTxt
    // );
}

function updateCard() {
    document.getElementById("schoolNameVal").value = document.getElementById("schoolName").value;
    document.getElementById("studentNameVal").value = document.getElementById("studentName").value;
    document.getElementById("dateOfBirthVal").value = document.getElementById("dateOfBirth").value;
    document.getElementById("classVal").value = document.getElementById("className").value;
    document.getElementById("rollNumberVal").value = document.getElementById("rollNumber").value;
    document.getElementById("contactNumVal").value = document.getElementById("contactNumber").value;
}

function printStudentID() {
    window.print();
}
