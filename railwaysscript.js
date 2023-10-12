// script.js
document.addEventListener("DOMContentLoaded", function() {
    const bookingForm = document.getElementById("booking-form");
    const reservationStatus = document.getElementById("reservation-status");

    bookingForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const train = document.getElementById("train").value;
        const passengerName = document.getElementById("passenger-name").value;
        const seatNumber = document.getElementById("seat-number").value;

        // Simulate a reservation by displaying the details
        reservationStatus.innerHTML = `Ticket booked for Train: ${train}, Passenger Name: ${passengerName}, Seat Number: ${seatNumber}`;
    });
});
