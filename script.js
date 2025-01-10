let nama, val;
const url_string = document.URL;
const url = new URL(url_string);
let sender;

if (url.searchParams.get('by') != null) {
  sender = url.searchParams.get('by');
} else {
  sender = "Han"; // Ganti "Adam" dengan "Han"
}

let footer = document.getElementById("credit");
footer.innerHTML = sender;
footer.href = "https://www.facebook.com/IfanCyber4rt/";

document.querySelector(".tombol").addEventListener('click', function () {
  Swal.fire("Hallo Sayangku", "Aku ada pertanyaan nih buat kamu?", "question").then(function () {
    Swal.fire("Jawab yang jujur ya!").then(function () {
      Swal.fire("Awas aja kalo boong!!", "", "error").then(function () {

        const {
          value: name
        } = Swal.fire({
          title: 'Masukin nama kamu dulu',
          input: 'text',
          inputLabel: '',
          showCancelButton: true,
          inputValidator: (value) => {
            if (!value) {
              return 'Isi dulu dong beb'
            } else {
              nama = value;
            }
          }
        }).then(function () {
          const pertanyaan = Swal.fire({
            title: `${nama} sayang gak sama ${sender}?`, // Gombalan lebih manis
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: `Sayang, banget!`,
            denyButtonText: `Gak sih...`,
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(`${sender} juga sayang banget sama ${nama}`).then(function () {
                Swal.fire({
                  title: 'Seberapa sayang emangnya?',
                  icon: 'question',
                  input: 'range',
                  inputLabel: 'Antara 1 - 100, ya!',
                  inputAttributes: {
                    min: 1,
                    max: 100,
                    step: 1
                  },
                  inputValue: 100 // Tetap 100% biar makin romantis
                }).then((e) => {
                  val = e.value
                  Swal.fire(`Makasih ya udah sayang sama ${sender} ${val}%`).then(function () {
                    Swal.fire({
                      title: `Sekarang ${nama} kangen gak sama ${sender}?`,
                      showDenyButton: true,
                      showCancelButton: false,
                      confirmButtonText: `Kangen banget :(`,
                      denyButtonText: `Gak!`,
                    }).then((result) => {
                      if (result.isConfirmed) {
                        Swal.fire(`Huhu iya ${sender} juga kangen ${nama} :((`).then(function () {
                          Swal.fire('Terakhir deh sayang').then(function () {
                            Swal.fire('Coba klik ikon hati di paling bawah dong')
                          })
                        })
                      } else if (result.isDenied) {
                        Swal.fire('Jahat banget emang ga kangen sama pacar sendiri', '', 'error').then(function () {
                          Swal.fire('Yaudah deh bye!')
                        })
                      }
                    })
                  })
                })
              })
            } else if (result.isDenied) {
              Swal.fire(`Yakin ga suka sama ${sender}?`, '', 'error').then(function () {
                Swal.fire('Yaudah deh bye!')
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
})
