current = 0;

$(document).ready(function() {
    $(`.card[data-id='${current}']`).css("z-index", "2");
    $(`.card[data-id='${(current+1)%5}']`).css("z-index", "1");
    setInterval(next, 5000);
})

function next(){
    $(`.card[data-id='${current}']`)
        .animate({left: "450px", right: "-450"}, {duration: 750, done: function(){
            $(`.card[data-id='${current}']`).css({"z-index": "0", "transform": "scale(0.95)"});
            current = (current + 1) % 5;
            $(`.card[data-id='${current}']`).css("z-index", "2");
            $(`.card[data-id='${(current + 1) % 5}']`).css("z-index", "1");
        }})
        .animate({left: "0px", right: "0px"}, {duration: 750, done: function(){
            $(`.card[data-id='${(current + 4) % 5}']`).css("transform", "scale(1.0)");
        }})
}
