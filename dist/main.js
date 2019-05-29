var customData = {
    teams : [
        [
            {name: "Italy", flag: 'ita'},
            {name: "France", flag: 'fra'}
        ],
        [
            {name: "Greek", flag: 'gre'},
            {name: "New Zealand", flag: 'nzl'}
        ],
        [
            {name: "Ukraine", flag: 'ukr'},
            {name: "Russia", flag: 'rus'}
        ],
        [
            {name: "Tahiti", flag: 'tah'},
            {name: "Mexico", flag: 'mex'}
        ],
        [
            {name: "Colombia", flag: 'col'},
            {name: "Japan", flag: 'jpn'}
        ],
        [
            {name: "Honduras", flag: 'hon'},
            {name: "Norway", flag: 'nor'}
        ],
        [
            {name: "Portugal", flag: 'por'},
            {name: "Poland", flag: 'pol'}
        ],
        [
            {name: "Mali", flag: 'mli'},
            {name: "USA", flag: 'usa'}
        ]
    ],
    results : [
        [[1,0], [3,4], [2,1], [1,3], [1,4], [0,1], [1,2], [0,3]]
        // [[2,0,' 1'], [3,2,' 2'], [8,6,' 3'], [0,1,' 2']],
        // [[0,3],[2,1]],
        // [[2,1]]
    ]
};

/* Edit function is called when team label is clicked */
function edit_fn(container, data, doneCb) {
    // var input = $('<input type="text">')
    // input.val(data ? data.flag + ':' + data.name : '')
    // container.html(input)
    // input.focus()
    // input.blur(function() {
    //     var inputValue = input.val()
    //     if (inputValue.length === 0) {
    //         doneCb(null); // Drop the team and replace with BYE
    //     } else {
    //         var flagAndName = inputValue.split(':') // Expects correct input
    //         doneCb({flag: flagAndName[0], name: flagAndName[1]})
    //     }
    // })
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
        init: customData,
        teamWidth: 170,
        scoreWidth: 30,
        matchMargin: 30,
        roundMargin: 50,
        save: function(){}, /* without save() labels are disabled */
        decorator: {edit: edit_fn,
            render: render_fn}})
});


$(function () {
    $.getJSON('http://api.plos.org/search?q=title:%22Drosophila%22%20and%20body:%22RNA%22&fl=id&start=1&rows=100',function (json) {
        console.log(json)
    })
    $.ajax({
        url: "http://api.plos.org/search?q=title:%22Drosophila%22%20and%20body:%22RNA%22&fl=id&start=1&rows=100",
        success: function (data) {
            console.log(data)
        }
    })
})