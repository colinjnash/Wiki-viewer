$(document).ready(function() {


    $('#submit').click(function() {
        submitInfo();


});

    $('#searchText').on('keydown', function(e) {
        if (e.which == 13) {
            submitInfo();
        }



    });



        function submitInfo() {



        $.ajax({
            url: 'https://en.wikipedia.org/w/api.php?',
            type: 'POST',
            dataType: 'jsonp',

            data: {
                action: 'query',
                format: 'json',
                inprop: "url",
                formatversion: 2,
                generator: 'search',
                gsrsearch: $("#searchText").val(),
                gsrwhat: "text",

                prop: 'extracts|info|pageimages',
                exsentences: 3,
                exintro: "",
                explaintext: "",
                exlimit: 20
                 },
                success: function(data) {

                $('#results').empty();
                    console.log(data);
                     data.query.pages.forEach(function(call) {

                    var pageLoad =
                        '<div class="pages"><h3><a href="' + call.fullurl + '" target="_blank">' + call.title + '</a></h3><p>' + call.extract + '</p></div>';


                    $('#results').append(pageLoad);
                    });
                    }
        });
            }


    
});