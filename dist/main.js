// var dataJson = "{teams : [[{name: \"Italy\", flag: 'ita'}, {name: \"France\", flag: 'fra'}],[{name: \"Greek\", flag: 'gre'}, {name: \"New Zealand\", flag: 'nzl'}],[ {name: \"Ukraine\", flag: 'ukr'}, {name: \"Russia\", flag: 'rus'}],[{name: \"Tahiti\", flag: 'tah'},{name: \"Mexico\", flag: 'mex'}],[{name: \"Colombia\", flag: 'col'},{name: \"Japan\", flag: 'jpn'}],[{name: \"Honduras\", flag: 'hon'},{name: \"Norway\", flag: 'nor'}],[{name: \"Portugal\", flag: 'por'},{name: \"Poland\", flag: 'pol'}], [{name: \"Mali\", flag: 'mli'},{name: \"USA\", flag: 'usa'}]]}"

// var dataJson = {
//     teams : [
//         [
//             {name: "Ukraine", flag: 'ukr'},
//             {name: "France", flag: 'fra'}
//         ],
//         [
//             {name: "Greek", flag: 'gre'},
//             {name: "New Zealand", flag: 'nzl'}
//         ],
//         [
//             {name: "Ukraine", flag: 'ukr'},
//             {name: "Russia", flag: 'rus'}
//         ],
//         [
//             {name: "Tahiti", flag: 'tah'},
//             {name: "Mexico", flag: 'mex'}
//         ],
//         [
//             {name: "Colombia", flag: 'col'},
//             {name: "Japan", flag: 'jpn'}
//         ],
//         [
//             {name: "Honduras", flag: 'hon'},
//             {name: "Norway", flag: 'nor'}
//         ],
//         [
//             {name: "Portugal", flag: 'por'},
//             {name: "Poland", flag: 'pol'}
//         ],
//         [
//             {name: "Mali", flag: 'mli'},
//             {name: "USA", flag: 'usa'}
//         ]
//     ],
//     results : [
//         [[1,0], [3,4], [2,1], [1,3], [1,4], [0,1], [1,2], [0,3]],
//         [[2,0], [3,2], [8,6], [0,1]],
//         [[0,3],[2,1]],
//         [[200,1]]
//     ]
// };


var matchData = {
    teams : [
        [
            {name: "Мексика", flag: 'mex'},
            {name: "Італія", flag: 'ita'}
        ],
        [
            {name: "Польща", flag: 'pol'},
            {name: "Колумбія", flag: 'col'}
        ],
        [
            {name: "Катар", flag: 'qat'},
            {name: "Нігерія", flag: 'nig'}
        ],
        [
            {name: "Україна", flag: 'ukr'},
            {name: "США", flag: 'usa'}
        ],
        [
            {name: "Уругвай", flag: 'uru'},
            {name: "Норвегія", flag: 'nor'}
        ],
        [
            {name: "Португалія", flag: 'por'},
            {name: "Корея", flag: 'kor'}
        ],
        [
            {name: "Еквадор", flag: 'ecu'},
            {name: "Італія", flag: 'ita'}
        ],
        [
            {name: "Катар", flag: 'qat'},
            {name: "Україна", flag: 'ukr'}
        ],
        [
            {name: "Португалія", flag: 'por'},
            {name: "Аргентина", flag: 'arg'}
        ],
        [
            {name: "Італія", flag: 'ita'},
            {name: "Японія", flag: 'jpn'}
        ],
        [
            {name: "Сенегал", flag: 'sen'},
            {name: "Польща", flag: 'pol'}
        ],
        [
            {name: "Нова Зеландія", flag: 'nzl'},
            {name: "Уругвай", flag: 'uru'}
        ],
        [
            {name: "США", flag: 'usa'},
            {name: "Катар", flag: 'qat'}
        ],
        [
            {name: "Нігерія", flag: 'nig'},
            {name: "Україна", flag: 'ukr'}
        ],
        [
            {name: "Малі", flag: 'mli'},
            {name: "Франція", flag: 'fra'}
        ],
        [
            {name: "Корея", flag: 'kor'},
            {name: "Аргентина", flag: 'arg'}
        ]
    ],
    results : [
        // [[1,0], [3,4], [2,1], [1,3], [1,4], [0,1], [1,2], [0,3],[0,1],[2,1],[2,1]],
        // [[2,0], [3,2], [8,6], [0,1], [0,2],[2,1]],
        // [[0,3],[2,1],[3,1]],
        // [[2,1],[0,2]],
        // [[3,2]]
    ]
};

function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

function isEmptyObject(obj) {
    if(jQuery.isEmptyObject(obj)) {
        return true
    } else {
        return false
    }
}

// $(function () {
//     if(IsJsonString(dataJson) === true) {
//         return
//     } else {
//         // matchData = dataJson;
//         var jsonObject = jQuery.parseJSON(dataJson)
//         console.log(jsonObject)
//     }
// })

function edit_fn(container, data, doneCb) {
    //cant remove this function - plugin will crush
}

/* Render function is called for each team label when data is changed, data
 * contains the data object given in init and belonging to this slot.
 *
 * 'state' is one of the following strings:
 * - empty-bye: No data or score and there won't team advancing to this place
 * - empty-tbd: No data or score yet. A team will advance here later
 * - entry-no-score: Data available, but no score given yet
 * - entry-default-win: Data available, score will never be given as opponent is BYE
 * - entry-complete: Data and score available
 */
function render_fn(container, data, score, state) {
    switch(state) {
        case "empty-bye":
            container.append("Команда відсутня")
            return;
        case "empty-tbd":
            container.append("Незабаром")
            return;

        case "entry-no-score":
        case "entry-default-win":
        case "entry-complete":
            container.append('<img src="https://api.fifa.com/api/v1/picture/flags-sq-4/'+data.flag+'" /> ').append(data.name)
            return;
    }
}

$(function() {
    $('.demo').bracket({
        init: matchData,
        teamWidth: 170,
        scoreWidth: 30,
        matchMargin: 30,
        roundMargin: 50,
        save: function(){}, /* without save() labels are disabled */
        decorator: {edit: edit_fn,
            render: render_fn}})
});