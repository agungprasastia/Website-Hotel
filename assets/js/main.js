document.addEventListener("DOMContentLoaded", function() {
    const reservationForm = document.getElementById("reservationForm");

    if (reservationForm) {
        reservationForm.addEventListener("submit", function(event) {

            const checkinDate = document.getElementById("checkin").value;
            const checkoutDate = document.getElementById("checkout").value;

            const dateIn = new Date(checkinDate);
            const dateOut = new Date(checkoutDate);

            if (dateOut <= dateIn) {
                event.preventDefault(); 
                alert("Tanggal Check-out harus setelah Tanggal Check-in.");
                
            } else if (checkinDate === "" || checkoutDate === "") {
                event.preventDefault();
                alert("Silakan pilih Tanggal Check-in dan Check-out.");
            } else {
                event.preventDefault();
                alert("Reservasi Anda sedang diproses!");
            }
        });
    }

    const elementsToReveal = document.querySelectorAll(".reveal-on-scroll");

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    elementsToReveal.forEach(element => {
        observer.observe(element);
    });

});