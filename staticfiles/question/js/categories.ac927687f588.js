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
            var crop = $(this).find("cropname").text();
            var about = $(this).find("cropabout").text();
            var botanical_name=$(this).find("botanicalname").text();
            var crop_view = "";
            var crop_name = $(this).find("cropname").text();

            if (crop.toLowerCase() === crop_name.toLowerCase()) {
                output+='<h4>'+crop+'</h4>';
                output+='<small class="text-muted">'+the_category+'</small>';
                output+='<p>Botanical Name: </p><small class="text-muted">'+botanical_name+'</small>';
                output+='<h4>About</h4>';
                output+='<p>'+about+'</p>';
                output+='<h4>Varieties</h4>';
                $(this).find("variety").each(function () {
                    output+='<h4>About</h4>';
                    var variety_name =$(this).find("name").text();
                    output+='<p>'+variety_name+'</p>';
                });

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