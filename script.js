// ! ДЗ 30. Merry Christmas and happy New Year 🎊

// Let’s make some magic! 🙌🏻
// Write logic(create it by yourself) and render Christmas card 🎅🏽
// Write your wishes for everyone 🎄. If you want create predictions with wishes for next year! 🎁
// On the next lesson we open your homework together and read it! 🎉
// Let it be fun for you!
//     // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Давайте сделаем немного волшебства! 🙌🏻
// Пишите логику(создавайте сами) и визуализируйте рождественскую открытку 🎅🏽
// Напишите свои пожелания для всех 🎄. Если вы хотите создавать прогнозы с пожеланиями на следующий год! 🎁
// На следующем уроке мы вместе открываем домашнее задание и читаем его! 🎉
// Пусть вам будет весело!

// Хай Новий рік у вишиванці
// Розбудить вас щасливо вранці,
// І принесе у вашу хату –
// Усмішок й радощів багато.
// Розбудить приспані надії,
// Зерном і щастям вас засіє,
// Зігріє миром і любов'ю
// І подарує вам здоров'я!

let content = [
    {
        "description": "Хай Новий рік у вишиванці",
    },
    {
        "description": "Розбудить вас щасливо вранці,",
    },
    {
        "description": "І принесе у вашу хату –",
    },
    {
        "description": "Усмішок й радощів багато.",
    },
    {
        "description": "Розбудить приспані надії,",
    },
    {
        "description": "Зерном і щастям вас засіє,",
    },
    {
        "description": "Зігріє миром і любов'ю",
    },
    {
        "description": "І подарує вам здоров'я!",
    },
];

let pictures = {
    decoration: "images/decoration.jpg",
    gerb: "images/gerb_ukraine.png",
    year: "images/year_2023.jpg",
    background: "images/background_green.png",
    flag: "images/flag_ukraine.png",
};

let list = [];
class Card {
    constructor() {
    }

    render(cont, pict) {
        let text = [];

        cont.forEach(function (item) {
            text.push(`<p>${item.description}</p>`);
        });

        list.push(`
		 <div class="gerb">
            <img class="gerb-image" src="${pict.decoration}" alt="image">
            <img class="gerb-image" src="${pict.gerb}" alt="image">
            <img class="gerb-image" src="${pict.year}" alt="image">
        </div>

        <div class="box">
            <div class="box-left">
                <img class="box-image" src="${pict.background}" alt="image">
                <img class="box-image" src="${pict.background}" alt="image">
                <img class="box-image" src="${pict.background}" alt="image">
            </div>

            <div class="content">
                <div class="description">
                ${text.join("")}
                </div>

                <div class="flag">
                    <img class="flag-image" src="${pict.flag}" alt="image">
                </div>
            </div>

            <div class="box-rigth">
                <img class="box-image" src="${pict.background}" alt="image">
                <img class="box-image" src="${pict.background}" alt="image">
                <img class="box-image" src="${pict.background}" alt="image">
            </div>
        </div>	   
       `)
        return list;
    }
}

let text = new Card();
text.render(content, pictures);

document.write(`
    <div class="container">
       ${list}
    </div>
`)





