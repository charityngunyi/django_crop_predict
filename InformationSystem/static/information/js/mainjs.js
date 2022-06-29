function NeedCropList2() {
    $('.croplist').show();
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
            $("#output").append('<div class="book"><div class="title">' + $(this).find("cropname").text() + '</div><div class="description">' + $(this).find("cropcategory").text() + '</div><div class="date">Published ' + $(this).find("cropbotanicalname").text() + '</div></div>');
            $("#output").fadeIn(1000);
        });
    }
    function failxml() {
        $('#output').html('Sorry! We could not load the crops at the moment');
        $('.croplist').hide();
        }
}

function FilterCropList2(category) {
    $('.croplist').show();
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
            var output='<div class="book"><div class="title">';
            var the_category = $(this).find("cropcategory").text();
            var crop = $(this).find("cropname").text();
            if (category === the_category) {
                output += '<div class="book"><div class="title">' + $(this).find("cropname").text() + '</div><div class="description">' + $(this).find("category").text() + '</div><div class="date">Published ' + $(this).find("botanicalname").text() + '</div></div>';
            }
            output+='</di>';
            output+='</di>';
            $('#output').html(output);
            $("#output").fadeIn(1000);

        });
    }
    function failxml() {
        $('#output').html('Sorry! We could not load the crops at the moment');
        $('.croplist').hide();
        }
}
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
            var output='<div class="book"><div class="title">';
            var the_category = $(this).find("cropcategory").text();
            var crop = $(this).find("cropname").text();
            var crop_view = "";
            if (category.toLowerCase() === the_category.toLowerCase()) {
                crop_view +="'"+crop+"'";
                $('#output').html('<div class="book"><div class="title"><a href="javascript:FilterCropName('+crop_view+')">'+crop+'</a></div><div class="description">' + $(this).find("cropcategory").text() + '</div><div class="date">Published ' + $(this).find("cropbotanicalname").text() + '</div></div>');
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
            var output='<div class="book"><div class="title">';
            var the_category = $(this).find("cropcategory").text();
            var crop_name = $(this).find("cropname").text();

            if (crop.toLowerCase() === crop_name.toLowerCase()) {
                $('#output').html('<div class="book"><div class="title">' + $(this).find("cropname").text() + '</div></div>');
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