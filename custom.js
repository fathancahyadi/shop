// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// owl carousel 

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
})


// enter
document.addEventListener('DOMContentLoaded', function () {
    // Ambil semua elemen input dan textarea, termasuk tombol submit
    const inputs = document.querySelectorAll('input, textarea');
    const submitBtn = document.getElementById('submitBtn');

    // Tambahkan event listener untuk setiap elemen input
    inputs.forEach((input, index) => {
        input.addEventListener('keypress', function (event) {
            // Periksa apakah tombol yang ditekan adalah 'Enter'
            if (event.key === 'Enter') {
                event.preventDefault(); // Cegah submit form secara default
                
                // Jika elemen adalah textarea (Message), tekan tombol Submit
                if (input.id === 'message') {
                    submitBtn.click();
                } else {
                    // Fokus ke elemen input berikutnya jika ada
                    const nextInput = inputs[index + 1];
                    if (nextInput) {
                        nextInput.focus();
                    }
                }
            }
        });
    });
});
