$(document).ready(function() {
    $("#form-v1").validate({
      rules: {
        kerjasama : {
          required: true
        },
        nama: {
          required: true,
          number: false,
          minLength: 3
        },
        email: {
          required: true,
          email: true
        },
        telepon:{
            required: true,
            number: true,
            min: 6
        },
        cvfile:{
            required: true,
            extension: "docx,rtf,doc,pdf",
            filesize:1000000
        },
        portofile:{
            required: true,
            extension: "docx|rtf|doc|pdf",
            filesize:1000000
        },
        topik:{
            required: true,
            minLength:20
        }

      },


      messages : {
        kerjasama: {
          minlength: "Jenis kerja sama harus dipilih salah satu"
        },
        nama: {
          required: "Nama harus di-isi",
          number: "tidak boleh ada angka dalam menulis nama",
          min: "nama minimal 3 huruf"
        },
        email: {
          required:"E-mail harus di-isi"  ,
          email: "Mohon Masukan email dengan format yang benar: abc@domain.com"
        },
        telepon: {
            required: "Nomor telepon harus di-isi",
            number: "semua harus angka dalam menulis nomor telepon",
            min: "nomor telepon minimal 3 digit"
        },
        cvfile: {
            required: "file CV harus dipilih",
            extension: "upload file CV ber-format PDF/rtf/docx ",
            filesize:"maximal ukuran file 1MB"
          },
          portofile: {
            required: "file portofolio harus dipilih",
            extension: "upload file portofolio ber-format PDF/rtf/docx ",
            filesize:"maximal ukuran file 1MB"
          },
          topik: {
            required: "Topik tidak boleh kosong",
            minLength: "Topik harus di - isi minimal 20 character"
          },
      
      }
    });
  });