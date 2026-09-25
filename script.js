function loginUser(event) {
    event.preventDefault();

    alert("Login successful!");

    window.location.href = "../index.html";
}


function postJob(event) {
    event.preventDefault();

    let title = document.getElementById("jobTitle").value;

    alert("Project '" + title + "' posted successfully!");

    event.target.reset();
}


function submitProposal(event) {
    event.preventDefault();

    alert("Proposal submitted successfully!");

    event.target.reset();
}


function sendMessage() {

    let message = document.getElementById("message").value;

    if (message.trim() === "") {
        alert("Please enter a message");
        return;
    }

    alert("Message sent: " + message);

    document.getElementById("message").value = "";
}


function updateProgress() {

    alert("Project progress updated!");
}


function makePayment() {

    alert("Payment page opened!");
}


function submitReview(event) {

    event.preventDefault();

    let rating = document.getElementById("rating").value;

    alert("Review submitted with rating: " + rating);

    event.target.reset();
}