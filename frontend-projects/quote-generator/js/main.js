var quotes = [
    {
        quote: "That's my Bad Mother F**ker.",
        cite: "Jules Winnfield"
    },

    {
        quote: "The ability to destroy a planet is insignificant next to the power of the Force.",
        cite: "Darth Vader"
    },

    {
        quote: "Time is the fire in which we burn",
        cite: "Dr. Soran"
    },

    {
        quote: "Oh no you did not shoot that green sh*t at me.",
        cite: "Captain Steven Hiller"
    },

    {
        quote: "You guys might not know this, but I consider myself a bit of a loner. I tend to think of myself as a one-man wolf pack.",
        cite: "Alan Garner"
    },

    {
        quote: "Oh boy.",
        cite: "Sam Beckett"
    },

    {
        quote: "This sh*t'll make you into a goddamn sexual Tyrannosaurus.",
        cite: "Blain"
    },

    {
        quote: "He's got an arm off!",
        cite: "Ed"
    },

    {
        quote: "If you can dodge a wrench, you can dodge a ball.",
        cite: "Patches O'Houlihan"
    },

    {
        quote: "I say we get drunk, cause I'm all out of ideas.",
        cite: "Metatron"
    }
];

function quoteMe() {
    var random = Math.floor(Math.random() * quotes.length);

    var quote = quotes[random].quote;
    var cite = quotes[random].cite;

    $('#quote').text(quote);
    $('#cite').text(cite);
    $('.btn-twitter').removeClass('disabled');
}

function prepareTweet() {
    var quote = $('#quote').text();
    var cite = $('#cite').text();
}
