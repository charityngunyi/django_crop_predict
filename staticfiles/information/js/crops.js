function FilterCropListByCategory(category) {
    var success = '';
    $.ajax({
        type:"GET",
        url:"/crops/crops_infor",
        dataType:"xml",
        async:true,
        data:{ csrfmiddlewaretoken: '{{ csrf_token }}'},
        success: xmlParser,
        fail: fail_xml
    });

    function xmlParser(xml) {
        var output='<div class="crop_info">';
        $(xml).find("crop").each(function () {

            var the_category = $(this).find("crop_category").text();
            var crop = $(this).find("crop_name").text();

            var crop_view = "";
            if (category === the_category) {
                crop_view +="'"+crop+"'";
                output+='<h3>'+crop+'</h3>';
                output+='<p>Category:'+the_category+'</p>';
                $(xml).find("about").each(function () {
                    var about = $(this).find("p").text();
                    output+='<h4>About'+about+'</h4>'
                });

            }
            else{
                success = 'error';
            }

        });
        output+='</div';
        $('#output').html(output);
    }
    function fail_xml() {
        $('#output').html('Sorry! We could not load the crops at the moment');
        }
}

function FilterCropName(crop) {
    var success = '';
    $.ajax({
        type:"GET",
        url:"/crops/crops_infor",
        dataType:"xml",
        async:true,
        data:{ csrfmiddlewaretoken: '{{ csrf_token }}'},
        success: xmlParser,
        fail: fail_xml
    });

    function xmlParser(xml) {
        var output='<div class="crop_info">';
        $(xml).find("crop").each(function () {
            var output='<div class="book"><div class="title">';
            var the_category = $(this).find("crop_category").text();
            var crop_name = $(this).find("crop_name").text();
            var botanical_name=$(this).find("botanical_name").text();

            if (crop.toLowerCase() === crop_name.toLowerCase()) {
                output+='<h3>'+crop_name+'</h3>';
                output+='<small class="text-muted">'+the_category+'</small>';
                output+='<p>Botanical Name: </p><small class="text-muted">'+botanical_name+'</small>';
                output+='<h4>About</h4>';
                $(xml).find("crop_about").each(function () {
                    var about = $(this).find("p").text();
                    output+='<p>'+about+'</p>';
                });
                $(xml).find("crop_varieties").each(function () {
                    var variety = $(this).find("variety").text();
                    output+='<h4>Varieties</h4>';
                    output+='<p>'+variety+'</p>';
                });
                $(xml).find("ecological_requirements").each(function () {
                    var rainfall = $(this).find("rainfall").text();
                    var soil = $(this).find("soil").text();
                    var temperature = $(this).find("temperature").text();
                    var altitude = $(this).find("altitude").text();
                    output+='<h4>Ecological requirements</h4>';
                    output+='<h3>Rainfall</h3>';
                    output+='<p>'+rainfall+'</p>';
                    output+='<h3>Soil</h3>';
                    output+='<p>'+soil+'</p>';
                    output+='<h3>Temperature</h3>';
                    output+='<p>'+temperature+'</p>';
                    output+='<h3>Altitude</h3>';
                    output+='<p>'+altitude+'</p>';
                });
                $(xml).find("crop_propagation").each(function () {
                    var propagate = $(this).find("p").text();
                    output+='<h4>Propagation</h4>';
                    output+='<p>'+propagate+'</p>';
                });
                $(xml).find("land_preparation_planting").each(function () {
                    var plant = $(this).find("p").text();
                    output+='<h4>Land Preparation and planting</h4>';
                    output+='<p>'+plant+'</p>';
                });
                output+='<h4>Pests and Diseases</h4>';
                $(xml).find("pests").each(function () {
                    var pest_attribute = $(this).find("pest").attr("name");
                    $(xml).find("pest").each(function () {
                        var pest = $(this).find("p").text();
                        output+='<h4>Pests</h4>';
                        output+='<h3>'+pest_attribute+'</h3>';
                        output+='<p>'+pest+'</p>';
                    });

                });
                $(xml).find("diseases").each(function () {
                    var disease_attribute = $(this).find("disease").attr("name");
                    $(xml).find("disease").each(function () {
                        var disease = $(this).find("p").text();
                        output+='<h4>Pests</h4>';
                        output+='<h3>'+disease_attribute+'</h3>';
                        output+='<p>'+disease+'</p>';
                    });

                });
                output+='<h4>Nutrition and Nutrition Deficiencies</h4>';
                output+='<h3>Nutrition</h3>';
                $(xml).find("nutrition").each(function () {
                    var nutrition = $(this).find("p").text();
                    output+='<p>'+nutrition+'</p>';
                });
                output+='<h3>Deficiencies</h3>';
                $(xml).find("deficiencies").each(function () {
                    var deficiency_attribute = $(this).find("deficiency").attr("name");
                    $(xml).find("deficiency").each(function () {
                        var deficiency = $(this).find("p").text();
                        output+='<h3>'+deficiency_attribute+'</h3';
                        output+='<p>'+deficiency+'</p>';
                    });

                });
                output+='<h4>Weed Control></h4>';
                $(xml).find("weed_control").each(function () {
                        var weed = $(this).find("p").text();
                        output+='<p>'+weed+'</p>';
                    });
                $(xml).find("maturity_harvesting_post_harvest_handling").each(function () {
                        var harvesting = $(this).find("p").text();
                        output+='<p>'+weed+'</p>';
                    });
                 output+='</div';
                 $('#output').html(output);
            }
            else{
                success = 'error';
            }



        });
    }
    function fail_xml() {
        $('#output').html('Sorry! We could not load the crops at the moment');
        }
}