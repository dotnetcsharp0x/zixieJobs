var loadprices = 0;
var loadprices_job = 0;
$('#loadprices').text("Off");
$('#loadprices').removeClass("btn-primary");
$('#loadprices').addClass("btn-danger");
setTimeout(function run() {
    loadPrice();
    setTimeout(run, 1000);
}, 1000);

$("#loadprices").click(function () {
    if (loadprices_job == 0) {
        if (loadprices == 1) {
            loadprices = 0;
        }
        else {
            loadprices = 1;
        }
        if (loadprices == 1) {
            $('#loadprices').text("On");

            $('#loadprices').addClass("btn-primary");
            $('#loadprices').removeClass("btn-danger");
        }
        else {
            $('#loadprices').text("Off");
            $('#loadprices').removeClass("btn-primary");
            $('#loadprices').addClass("btn-danger");
        }
    }
});

function loadPrice() {
    if (loadprices == 1) {
        if (loadprices_job == 0) {
            loadprices_job = 1;
            $.ajax({
                url: "https://localhost:7284/Stocks/GetPrices/LoadPrices",
                context: document.body,
                dataType: 'jsonp',
                success: function (data) {
                    console.log("Finish: " + data);
                    loadprices_job = 0;
                },
                complete: function(data) {
                    console.log("Finish c: " + data);
                    loadprices_job = 0;
                }
            });
        }
    }
}