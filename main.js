Vue.createApp({
    data() {
      return {
        message: "Hello Vue!",
        header: {
          title: "Muhammad Syafiqurrahman",
          description:
            "Masa depanmu tergantung pada mimpimu, maka tidurlah.",
          motto: "Orang yang terlahir dari keluarga sederhana, pertama kali muncul di dunia pada tanggal 7 desember 2001 dan menginjak kaki pertama kali di daerah kota Bima-NTB. Membawa motto hidup Maja Labo Dahu di kehidupannya. Merupakan seorang pecinta kucing, dan masih mengalami kesusahan dalam melakukan koding. Namun, akan tetap berusaha sekuat dan semampu mungkin untuk bisa menguasainya.",
          social: {
            ig: {
              url: "https://instagram.com/apycks",
              title: "Apycks",
            },
            fb: {
              url: "https://facebook.com/",
              title: "Muhammad Syafiqurrahman",
            },
            github: {
              url: "https://github.com/Matchapics/tekweb2022",
              title: "Matchapics",
            },
            twitter: {
              url: "https://www.twitter.com/Matchapics",
              title: "Matchapics",
            },
          },
          imageProfile:
            "https://raw.githubusercontent.com/matchapics/Vue-Axios-Basic/master/images/background.jpg",
        },
      };
    },
  }).mount("#app");