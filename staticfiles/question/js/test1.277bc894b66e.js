function FilterCropList3(category) {
    $('.croplist').show();
    var sucess = '';
    $.ajax({
        type:"GET",
        url:"/crops/crops_infor",
        dataType:"xml",
        async:true,
        data:{ csrfmiddlewaretoken: '{{ csrf_token }}'},
        success: xmlParser,
        fail: failxml
    });

    function xmlParser(xml) {
        $('.croplist').fadeOut();
        $(xml).find("crop").each(function () {
var output='<div class="card-body">';
            var the_category = $(this).find("category").text();
            var crop = $(this).find("cropname").text();
            var about = $(this).find("cropabout").text();
            var botanical_name=$(this).find("botanicalname").text();
            var crop_view = "";
            if (category.toLowerCase() === the_category.toLowerCase()) {
                crop_view +="'"+crop+"'";
                output+='<h4><a href="javascript:FilterCropName('+crop_view+')">'+crop+'</a></h4>';
                output+='<small class="text-muted">'+the_category+'</small>';
                output+='<p>Botanical Name: </p><small class="text-muted">'+botanical_name+'</small>';
                output+='<h4>About</h4>';
                output+='<p>'+about+'</p>';
                output+='</di>';
            $('#output').html(output);
            $("#output").fadeIn(1000);
            }

            else{
                sucess = 'error';
            }



        });
    }
    function failxml() {
        $('#output').html('Sorry! We could not load the crops at the moment');
        $('.croplist').hide();
        }
}
function FilterCropName(crop) {
    $('.croplist').show();
    var sucess = '';
    $.ajax({
        type:"GET",
        url:"/crops/crops_infor",
        dataType:"xml",
        async:true,
        data:{ csrfmiddlewaretoken: '{{ csrf_token }}'},
        success: xmlParser,
        fail: failxml
    });

    function xmlParser(xml) {
        $('.croplist').fadeOut();
        $(xml).find("crop").each(function () {
            var output='<div class="card-body">';
            var the_category = $(this).find("category").text();
            var about = $(this).find("cropabout").text();
            var botanical_name=$(this).find("botanicalname").text();
            var crop_view = "";
            var crop_name = $(this).find("cropname").text();

            if (crop.toLowerCase() === crop_name.toLowerCase()) {
                output += '<h4>' + crop_name + '</h4>';
                output += '<small class="text-muted">' + the_category + '</small>';
                output += '<p>Botanical Name: </p><small class="text-muted">' + botanical_name + '</small>';
                output += '<h4>About</h4>';
                output += '<p>' + about + '</p>';
                output += '<h4>Varieties</h4>';
                output+='<table class="table">';
                    output+='<tr>';
                    output+='<th>Variety</th>';
                    output+='<th>Colour</th>';
                    output+='</tr>';
                $(this).find("variety").each(function () {
                    var variety_name = $(this).find("name").text();
                    var variety_colour = $(this).find("colour").text();

                    output+='<tr>';
                    output+='<td>'+variety_name+'</td>';
                    output+='<td>'+variety_colour+'</td>';
                    output+='</tr>';

                });
                output+='</table>';
                output += '<h4>Ecological Requirements</h4>';
                $(this).find("ecologicalrequirements").each(function () {
                    var rainfall = $(this).find("rainfall").text();
                    var soil = $(this).find("soil").text();
                    var temperature = $(this).find("temperature").text();
                    var altitude = $(this).find("altitude").text();
                    output += '<h5>Rainfall</h5>';
                    output+='<p>'+rainfall+'</p>';
                    output += '<h5>Soil</h5>';
                    output+='<p>'+soil+'</p>';
                    output += '<h5>Temperature</h5>';
                    output+='<p>'+temperature+'</p>';
                    output += '<h5>Altitude</h5>';
                    output+='<p>'+altitude+'</p>';
                });
                output += '<h4>Propagation</h4>';
                var propagation = $(this).find("propagation").text();
                output+='<p>'+propagation+'</p>';
                output += '<h4>Land Preparation and Planting</h4>';
                $(this).find("landpreparationplanting").each(function () {
                    output+='<p>'+$(this).find("p").text()+'</p>';
                });
                output += '<h4>Pest and Diseases</h4>';
                output += '<h3>Pests</h3>';
                $(this).find("pest").each(function () {
                    var pest_name = $(this).find("pestname").text();
                    var pest_detail = $(this).find("p").text();
                    output += '<p>' + pest_name + '</p>';
                    output += '<p>' + pest_detail + '</p>';
                });
                output += '<h3>Diseases</h3>';
                $(this).find("disease").each(function () {
                    var disease_name = $(this).find("diseasename").text();
                    var disease_detail = $(this).find("p").text();
                    output += '<p>' + disease_name + '</p>';
                    output += '<p>' + disease_detail + '</p>';
                });
                output += '<h4>Nutrition and Nutrition Deficiencies</h4>';
                output += '<h3>Nutrition</h3>';
                $(this).find("nutrition").each(function () {
                    var nutrition_name = $(this).find("nutritionname").text();
                    var nutrition_detail = $(this).find("p").text();
                    output += '<p>' + nutrition_name + '</p>';
                    output += '<p>' + nutrition_detail + '</p>';
                });
                output += '<h3>Deficiencies</h3>';
                $(this).find("deficiency").each(function () {
                    var deficiency_name = $(this).find("deficiencyname").text();
                    var deficiency_detail = $(this).find("p").text();
                    output += '<p>' + deficiency_name + '</p>';
                    output += '<p>' + deficiency_detail + '</p>';
                });
                output += '<h4>Weed Control</h4>';
                $(this).find("weedcontrol").each(function () {
                    var weed_detail = $(this).find("p").text();
                    output += '<p>' + weed_detail + '</p>';
                });
                output += '<h4>Maturity and Harvesting</h4>';
                $(this).find("maturityandharvesting").each(function () {
                    var harvest_detail = $(this).find("p").text();
                    output += '<p>' + harvest_detail + '</p>';
                });
                output+='</di>';
            $('#output').html(output);
            $("#output").fadeIn(1000);
            }
            else{
                sucess = 'error';
            }



        });
    }
    function failxml() {
        $('#output').html('Sorry! We could not load the crops at the moment');
        $('.croplist').hide();
        }
}