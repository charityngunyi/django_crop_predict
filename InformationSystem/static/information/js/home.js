function AboutUs() {
    // $('#slideshow').show();
    var output = '<div class="container">';
    output+='<div class="wrapper">';
    output+='<h2>About Us</h2>';
    output+='</div';
    output+='<p class="mb-0">\n' +
        'We are dedicated to provide our farmers with friendly service, with an aim to increase your crop yields.\n' +
        '</p>';
    output+='<p>The governmet have tried their best to support farmers interms of best farming methods, use of modern fertilizers, modern machinery but yet our farmers are experiencing low crop yields products.' +
        'Hence our aim is to provide a crop prediction system that can predict a certain crop that can be grown with given certain condidtions ,which will allow full utilization of resources that our farmers have.</p>'
    output+='</div>';
    $('#maincontent').html(output);
    // $("#loadjs").fadeIn(1000);
    // $('#slideshow').hide();
};
function HowToPredict() {
    //  $('#slideshow').show();
    var output = '<div class="container">';
    output+='<div class="wrapper">';
    output+='<h2>How to Predict</h2>';
    output+='</div';
    output+='<p class="mb-0">\n' +
        'We are dedicated to providing our farmers with friendly service, with an aim to increase your crop yields\n' +
        '</p>';
    output+='<p>The prediction system requires rainfall, soil PH ,temperature and altitude averages to predict the best crop that match your measurements..</p>';
    output+='<p class="mb-0">Click on predict link and key in the required measurements and automatically get your predicted crop.</p>';
    output+='</div>';
    $('#maincontent').html(output);
    // $("#loadjs").fadeIn(1000);
    // $('#slideshow').hide();
}

function SoilSamplingProcure()  {
    // $('#slideshow').show();
    $.ajax({
        type:"GET",
        url:"http://127.0.0.1:8000/soil_sampling",
        dataType:"xml",
        async:true,
        data:{ csrfmiddlewaretoken: '{{ csrf_token }}'},
        success: xmlParser,
        fail: failxml
    });

    function xmlParser(xml) {
        // $('.croplist').fadeOut();
        $(xml).find("soil").each(function () {
            var output='<div class="card-body">';
            output+='<p class="mb-0">For prediction to be successful and helpful the most crucial part is taking a soil sample which will be needed to measure accurate prediction requirements. </p>';
            output+='<h2>'+$(this).find("title").text()+'</h2>';
            output+='</div';
            output+='<p class="mb-0">' +$(this).find("principle").text()+'</p>';
            output+='<div>';
            output+='<h2>Materials Required</h2>';
            output+='</div';
            $(this).find("material").each(function () {
                output += '<div >';
                output += '<p class="mb-0">\n' +$(this).find("materialname").text()+'</p>';
                output += '</div';
            });
            output+='<div>';
            output+='<h2>Consideration</h2>';
            output+='</div';
            $(this).find("consideration").each(function () {
                output += '<div >';
                output += '<p class="mb-0">\n' +$(this).find("p").text()+'</p>';
                output += '</div';
            });
            output+='<div>';
            output+='<h2>Procedure</h2>';
            output+='</div';
            $(this).find("procedure").each(function () {
                output += '<div >';
                output += '<p class="mb-0">\n' +$(this).find("p").text()+'</p>';
                output += '</div';
            });
            output+='<div>';
            output+='<h2>Profile</h2>';
            output+='</div';
            $(this).find("profile").each(function () {
                output += '<div >';
                output += '<p class="mb-0">\n' +$(this).find("p").text()+'</p>';
                output += '</div';
            });
            output+='<div>';
            output+='<h2>Processing and storage</h2>';
            output+='</div';
            $(this).find("processingandstorage").each(function () {
                output += '<div >';
                output += '<p class="mb-0">\n' +$(this).find("p").text()+'</p>';
                output += '</div';
            });
            output+='<div>';
            output+='<h2>Guidlines</h2>';
            output+='</div';
            output+='<table class="table">';
                    output+='<tr>';
                    output+='<th>Crop</th>';
                    output+='<th>Inches</th>';
                    output+='<th>Centimeters</th>';
                    output+='</tr>';
                $(this).find("guidline").each(function () {

                    output+='<tr>';
                    output+='<td>'+$(this).find("crop").text()+'</td>';
                    output+='<td>'+$(this).find("inches").text()+'</td>';
                    output+='<td>'+$(this).find("cm").text()+'</td>';
                    output+='</tr>';

                });
                output+='</table>';
                $('#maincontent').html(output);
                // $("#loadjs").fadeIn(1000);
                // $('#slideshow').hide();



        });
    }
    function failxml() {
        $('#maincontent').html('Sorry! We could not load the information at the moment');
        // $('#slideshow').hide();
        }
}
function FarmersPlatform() {
    // $('#slideshow').show();
    var output = '<div class="container">';
    output+='<div class="wrapper">';
    output+='<h2>Friendly Farmers platform</h2>';
    output+='</div';
    output+='<p class="mb-0">\n' +
        ' We are dedicated to providing our farmers with creating a collaborative community where farmers can ask questions and get responses from their fellow farmers, proffessionals, experts e.t.c\n' +
        '</p>';
    output+='<p class="mb-0">Click on Customer support link to post a question</p>';
    output+='</div>';
    $('#maincontent').html(output);
    // $("#loadjs").fadeIn(1000);
    // $('#slideshow').hide();
};