let nama, val;
const url_string = document.URL;
const url = new URL(url_string);
let sender;

if (url.searchParams.get('by') != null) {
  sender = url.searchParams.get('by');
} else {
  sender = "Han";  // Ganti Adam dengan Han
}

let footer = document.getElementById("credit");
footer.innerHTML = sender;
footer.href = "https://www.facebook.com/IfanCyber4rt/";

document.querySelector(".tombol").addEventListener('click', function () {
  Swal.fire("Hai Sayangku", "Aku punya pertanyaan nih, mau jawab ya?", "question").then(function () {
    Swal.fire("Jawab yang jujur ya, jangan bohong, nanti aku kecewa!").then(function () {
      Swal.fire("Awas, aku bisa tahu kalau kamu bohong!!", "", "error").then(function () {

        const {
          value: name
        } = Swal.fire({
          title: 'Masukin nama kamu dulu, biar aku bisa sebutin dengan penuh cinta',
          input: 'text',
          inputLabel: '',
          showCancelButton: true,
          inputValidator: (value) => {
            if (!value) {
              return 'Ayo dong, jangan malu-malu beb!'
            } else {
              nama = value;
            }
          }
        }).then(function () {
          const pertanyaan = Swal.fire({
            title: `${nama}, sayang nggak sama ${sender}?`,
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: `Sayang Banget!`,
            denyButtonText: `Gak Sayang`,
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(`${sender} juga sayang banget sama ${nama}, lebih dari yang kamu tahu!`).then(function () {
                Swal.fire({
                  title: 'Seberapa sayang? Coba jawab jujur, ya!',
                  icon: 'question',
                  input: 'range',
                  inputLabel: 'Skalanya antara 1 - 100',
                  inputAttributes: {
                    min: 1,
                    max: 100,
                    step: 1
                  },
                  inputValue: 50
                }).then((e) => {
                  val = e.value;
                  Swal.fire(`Makasih ya udah sayang sama ${sender} ${val}%`).then(function () {
                    Swal.fire({
                      title: `Sekarang, ${nama} kangen nggak sama ${sender}?`,
                      showDenyButton: true,
                      showCancelButton: false,
                      confirmButtonText: `Kangen Banget :(`,
                      denyButtonText: `Gak Kangen!`,
                    }).then((result) => {
                      if (result.isConfirmed) {
                        Swal.fire(`Huhu, ${sender} juga kangen banget sama ${nama}`).then(function () {
                          Swal.fire('Terakhir deh, aku mau tanya lagi').then(function () {
                            Swal.fire('Coba klik ikon hati yang ada di bawah, biar aku tahu kamu serius! 😉')
                          })
                        })
                      } else if (result.isDenied) {
                        Swal.fire('Jahat banget, nggak kangen sama pacar sendiri?! 😢', '', 'error').then(function () {
                          Swal.fire('Yaudah deh, bye! 😔')
                        })
                      }
                    })
                  })
                })
              })
            } else if (result.isDenied) {
              Swal.fire(`Yakin gak suka sama ${sender}?`, '', 'error').then(function () {
                Swal.fire('Yaudah deh, bye! 😞')
              })
            }
          })
        })
      });
    });
  });
});

document.querySelector('.hati').addEventListener('click', function () {
  confetti();
  const teks = document.getElementById('teks');
  const btn = document.querySelector('.tombol');
  teks.classList.remove('d-none')
  btn.classList.add('d-none')
  console.log(teks);
  console.log(btn);
})

