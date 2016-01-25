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
    },

    {
        quote: "I am the danger.",
        cite: "Walter White"
    }
];

function prepareQuote() {
    var quote = $('#quote').text();
    var regEx = /\s/g;

    quote = quote.replace(regEx, "%20");
    quote = "\"".concat(quote);
    quote = quote.concat("\"");

    return quote;
}

function prepareCite() {
    var cite = $('#cite').text();
    var regEx = /\s/g;

    cite = cite.replace(regEx, "%20");
    return cite;
}

function prepareTweet() {
    var quote = $('#quote').text();
    var cite = $('#cite').text();
    var href = "https://twitter.com/intent/tweet?text=";

    href = href.concat(prepareQuote());
    href = href.concat(" - ");
    href = href.concat(prepareCite());

    return href;
}

function quoteMe() {
    var random = Math.floor(Math.random() * quotes.length);

    var quote = quotes[random].quote;
    var cite = quotes[random].cite;

    $('#quote').text(quote);
    $('#cite').text(cite);
    $('.btn-twitter').attr("href", prepareTweet());
    $('.btn-twitter').removeClass('disabled');
}
