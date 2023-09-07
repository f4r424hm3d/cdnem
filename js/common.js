//comment
var isLoggedIn = parseInt($('#is-logged-in').val());
var currentPage = $('#current-page').val();
var city_id = null;
var allMarkers = [];
window.randomize = function () {
    $('.radial-progress').each(function () {
        var transform_styles = ['-webkit-transform', '-ms-transform', 'transform'];
        $(this).find('span').fadeTo('slow', 1);
        var score = $(this).data('score');
        var deg = (((100 / 5) * score) / 100) * 180;
        var rotation = deg;
        var fill_rotation = rotation;
        var fix_rotation = rotation * 2;
        for (i in transform_styles) {
            $(this).find('.circle .fill, .circle .mask.full').css(transform_styles[i], 'rotate(' + fill_rotation + 'deg)');
            $(this).find('.circle .fill.fix').css(transform_styles[i], 'rotate(' + fix_rotation + 'deg)');
        }
    });
}

setTimeout(window.randomize, 200);

$(document).ready(function () {

    $(".exam_box_cp table").wrap("<div class='scrollTable'></div>");
    $(".eligibility table").wrap("<div class='scrollTable'></div>");
    $('.dvloading').fadeOut(2000);
    // $('.header-fix').css('position', 'fixed') ;
    // $('.header-fix').css('display', 'block') ;


    $('img[data-gsll-src]').gsp_lazyload({
        visibleOnly: false,
    });
    $('.gsm_hWrap').gsp_menu('left', 'hamburger');

    $('#tab-container ul').height(($(window).height()));
    $(document).on('touchstart click', '#filterlist li.parentlist .parentfilter', function () {
        $('ul#filterlist li').removeClass('selected');
        $(this).parent().addClass('selected');
        $('ul.activeContent').hide();
        $(this).parent().find('ul.activeContent').show();
        // updateFilters();
    })
    try {
        var left = $(".hangouts-tab [class='selected']").offset().left
        var width = $(".hangouts-tab").width();
        var diff = left - width / 2
        $(".hangouts-tab").scrollLeft($(".hangouts-tab").scrollLeft() + 50 + diff)
    }
    catch (e) {
        console.log(e)
    }

    try {
        var left = $(".exam-links-nav li.active").offset().left
        var width = $(".exam-links-nav").width();
        var diff = left - width / 2
        $(".exam-links-nav").scrollLeft($(".exam-links-nav").scrollLeft() + 50 + diff)
    }
    catch (e) {
        console.log(e)
    }

})


$('.gclick').click(function () {
    ga('send', 'event', 'Navigation', $(this).parents('li').find('.f_heading').text(), $(this).text());
})



$('.popover-markup > .trigger').popover({
    html: true,
    title: function () {
        return $(this).parent().find('.head').html();
    },
    content: function () {
        return $(this).parent().find('.content').html();
    },
    container: 'body',
    placement: 'bottom'
});




$.widget("custom.catcomplete", $.ui.autocomplete, {
    _create: function () {
        this._super();
        this.widget().menu("option", "items", "> :not(.ui-autocomplete-category)");
    },
    _renderMenu: function (ul, items) {
        var that = this,
            currentCategory = "";
        $.each(items, function (index, item) {
            var li;
            if (item.category != currentCategory) {
                ul.append("<li class='ui-autocomplete-category'>" + item.category + "</li>");
                currentCategory = item.category;
            }
            li = that._renderItemData(ul, item);
            if (item.category) {
                li.attr("aria-label", item.category + " : " + item.label);
            }
        });
    }
});

$("#keywords_input").catcomplete({
    minLength: 1,
    source: "/scripts/autocomplete/?page=" + currentPage,
    select: function (event, ui) {
        var url = ui.item.id;
        if (url != '#') {
            window.location.href = url;
        }
        return false;
    }
});

$(document).on('click', '.course-heading', function () {
    $(this).parents('.item-content').find('ul.course-list').toggleClass('displaynone');
})

$(document).on('click', '.open_link', function () {
    window.location.href = $(this).data('url');
})




$(document).ready(function () {
    if (document.getElementById('id_exam_institute')) {
        $('#id_exam_institute').select2()

        var table = $('.dtable').DataTable({
            "paging": false,
            "bInfo": false,
        });

        $('div.dataTables_filter').hide()
    }
    //overview section
    $(".faci-carousel").gsp_carousel({
        item: 6,
        slideMove: 1,
        mode: "slide",
        slideMargin: 6,
        speed: 400,
        auto: false,
        controls: true,
        pager: false,
        enableTouch: true,
        enableDrag: true,
        responsive: [{
            breakpoint: 1600,
            settings: {
                item: 6,
                slideMargin: 6
            }
        }, {
            breakpoint: 480,
            settings: {
                item: 2,
                slideMargin: 6
            }
        }]
    });

    $(".latest-news ul").gsp_carousel({
        item: 1,
        slideMove: 1,
        mode: "slide",
        slideMargin: 1,
        speed: 400,
        auto: false,
        controls: true,
        loop: true,
        pager: false,
        enableTouch: true,
        enableDrag: true,
        responsive: [{
            breakpoint: 1600,
            settings: {
                item: 2,
                slideMargin: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                item: 1,
                slideMargin: 1
            }
        }]
    });
    //Similar Colleges
    $(".simliar-box").gsp_carousel({
        item: 2,
        slideMove: 1,
        mode: "slide",
        slideMargin: 1,
        speed: 400,
        auto: false,
        controls: true,
        loop: true,
        pager: false,
        enableTouch: true,
        enableDrag: true,
    });

    // News  Section 

    $(".news-box").gsp_carousel({
        item: 1,
        slideMove: 1,
        mode: "slide",
        slideMargin: 10,
        speed: 400,
        auto: false,
        controls: true,
        loop: true,
        pager: false,
        enableTouch: true,
        enableDrag: true,
    });


    $("#trending-college").gsp_carousel({
        item: 1,
        gallery: false,
        showUpcoming: false,
        speed: 1000,
        loop: true,
        auto: true,
        pager: true,
    });





    $('.top-tabs li').on('click', function () {
        $(this).parent('.top-tabs').addClass('gssticky');
    });

    $(".header-search-icon").click(function () {
        $(".show-hide-search-box").slideToggle('2000');
    });
});

;

$(window).scroll(function () {
    if ($(this).scrollTop() > 210 && !$('#top_nav').hasClass('sticky')) {
        $('#top_nav').addClass('sticky');
        $('#top_nav').slideDown();
    } else if ($(this).scrollTop() <= 210) {
        $('#top_nav').removeClass('sticky');
    }

    if ($(this).scrollTop() > 210 && !$('#fixedNav').hasClass('sticky')) {
        $('#fixedNav').addClass('sticky');
        $('#fixedNav').slideDown();
    } else if ($(this).scrollTop() <= 210) {
        $('#fixedNav').removeClass('sticky');
    }
});


$(document).on('click', '.show_table', function () {
    $(this).find('i').toggleClass('glyphicon-minus')
    $(this).find('i').toggleClass('glyphicon-plus')
    $(this).parents('.dta-bottom').find('.table_cutoff').toggle()

});


$(document).on('click', '.apply_now_det', function () {
    $(".loading").css({ "display": "block" });
    $('#ajax_popup').html('');
    $(".middle-container").css("opacity", "0.3");
    $(".middle-container").css("pointer-events", "none");
    var course_id = $(this).data('course_id');
    $.ajax({
        type: "POST",
        url: '/scripts/apply_college_ajax/',
        traditional: true,
        data: {
            'institute_id': $(this).data('insti-id'),
            'button_id': $(this).data('btn_id'),
            'course_id': course_id
        },
        beforeSend: function () {
            $(".loading").css("display", "block");
        },
    }).done(function (response) {
        $('#ajax_popup').html(response)
        $('#log_modal').modal()

        if (course_id) {
            $('#course_div').remove()
            $('.apply_now_form').append('<input type="hidden" name="course" value="' + course_id + '">')
        }
        $(".middle-container").css("opacity", "1");
        $(".middle-container").css("pointer-events", "auto");
        $(".loading").css({ "display": "none" });

        $('.apply_now_det').css("opacity", "1");
        $('.apply_now_det').css("pointer-events", "auto");
        $(".commonForm .close, .commonForm .bg, .commonForm button.btn-default").click(function () {
            $(".commonForm").fadeOut();
        });

    });



});


$(document).on('click', '.claim_college', function () {
    $(".loading").css({ "display": "block" });
    $('#ajax_popup').html('')
    $(".middle-container").css("opacity", "0.3");
    $(".middle-container").css("pointer-events", "none");
    $.ajax({
        type: "get",
        url: '/scripts/claim_your_college/',
        traditional: true,
        data: {
            'institute_id': $(this).data('insti-id')
        },
        beforeSend: function () {
            $(".loading").css("display", "block");
        },
    }).done(function (response) {
        $('#ajax_popup').html(response)
        $('#claim_college').modal()

        $(".middle-container").css("opacity", "1");
        $(".middle-container").css("pointer-events", "auto");
        $(".loading").css({ "display": "none" });
    });



});



// setTimeout(function () {
//      var width = $('.hangouts-tab .selected').offset().left
//      $('.hangouts-tab').scrollLeft(width)
//  },600)

$(document).on('click', '.f_heading', function () {
    $(this).next('ul').toggle()
})


$('#id_exam_institute').on("change", function (e) {
    var col_id = ($(this).val())
    if ($("[data-insti_id='" + col_id + "']").length > 0) {
        $('.inc_row').hide()
        $("[data-insti_id='" + col_id + "']").show('slow');
        $('.pagination').remove()
    }
    else if (col_id == '-1') {
        window.load()
    }
    else {
        $('#ins_search_form').submit()
    }
});


$(document).on("change", '#id_exam_institute', function (e) {
    var col_id = ($(this).val())
    if ($("[data-insti_id='" + col_id + "']").length > 0) {
        $('.inc_row').hide()
        $("[data-insti_id='" + col_id + "']").show('slow');
        $('.pagination').remove()
    }
    else if (col_id == '-1') {
        window.location.href = encodeURI($('#post_url').val())
    }
    else {
        $('#ins_search_form').submit()
    }
});

$('#col_pred').on('submit', function (e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: $('#post_url').val(),
        data: $(this).serialize(),
        beforeSend: function () {
            $('.spinner').show()
        },
        success: function (response) {
            $('#ajax_up').find('.ajax_cont_cp').html($(response).find('.ajax_cont_cp'))
            $('.spinner').hide()
            var table = $('.dtable').DataTable({
                "paging": false,
                "bInfo": false,
            });
            $('div.dataTables_filter').hide()
            $('#id_exam_institute').select2()
        }
    })
});


window.fetched_pages = []
var options = {
    classname: 'sd',
    id: 'nano_bar',
    target: document.getElementById('nano_bar')
};
var nanobar = new Nanobar(options);
$(document).on('click', '.exam_links', function (event) {

    event.preventDefault();
    $('ul.mb_links li').removeClass('active')
    var page_id = parseInt($(this).data('tab_id'))

    try {
        if (fetched_pages.indexOf(page_id) < 0) {
            var link_object = $(this)
            $.ajax({
                type: "GET",
                url: $(this).attr('href'),
                beforeSend: function () {
                    a = 10
                    while (a < 99) {
                        nanobar.go(a);
                        a = a + a / 2
                    }
                    $('#update_box').css("opacity", .3);
                },
                success: function (response) {
                    $('#update_box').append($(response).find('#update_box .exam_box_cp'))
                    fetched_pages.push(page_id)
                    fade_me_out(link_object, page_id)
                    $('#update_box').css("opacity", 1)
                    $(".exam_box_cp table").wrap("<div class='scrollTable'></div>");
                    return false
                }
            })
        } else {
            fade_me_out($(this), page_id)
        }
    }
    catch (e) {
        console.log(e)
    }
})


function fade_me_out(that, page_id) {
    history.pushState(null, null, $(that).attr('href'))
    $('.exam_box_cp').fadeOut()
    $('#tab_' + page_id).fadeIn()
    $(that).parent('li').addClass('active')

    nanobar.go(100);

}

$(document).on('click', '.loc_button', function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            document.cookie = "latitude=" + position.coords.latitude
            document.cookie = "longitude=" + position.coords.longitude;
            location.reload();
        });
    } else {
        console.log('no location available')
    }
})

$(document).on('click', '.like_btn', function () {
    var type = $(this).data('value')
    var block = $(this)
    var review_id = $(this).data('review_id')
    var cook_id = review_id + '_' + type
    if (!$.gsp_cookie.readWrite(cook_id)) {
        $.ajax({
            type: "POST",
            url: '/reviews/votes/',
            data: { 'type': type, 'review_id': review_id },
            success: function (responseData) {
                $(block).find('.count').html(responseData)
                $.gsp_cookie.readWrite(cook_id, true, { expires: { type: 'h', value: 24 } });
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert('Error in review mapping');
            }
        });

    } else {
        $('#error-modal').modal('show');
        $('#error_msg').html('You have already ' + type + 'd this review');
    }
})

/* Function for reviews */

function add_review_to_institute(review_id) {
    /* Function to map review with institute */
    var institute_id = $('#selected_college').val();
    var course_id = $('#selected_courses').val();
    var batch = $('#passing_year').val();
    var post_data = {
        "insitute": institute_id,
        "review": [review_id],
        "course": course_id,
        "batch": batch,
    }

    $.ajax({
        type: "POST",
        url: '/reviews/mapping/',
        data: JSON.stringify(post_data),
        contentType: "application/json",
        success: function (responseData) {
            console.log('Review Mapped');
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('Error in review mapping');
        }
    });
}


function add_review_image(this_form, review_id) {
    /* Function to add image of review */

    var form_serialize_array = $(this_form).serializeArray();

    var image_form_data = new FormData();
    var files = this_form.images.files;
    for (var k = 0; k < files.length; k++) {
        image_form_data.append('images', files[k]);
        image_form_data.append('review', review_id);

        $.ajax({
            type: "POST",
            url: '/reviews/images/',
            data: image_form_data,
            processData: false,
            contentType: false,
            async: false,
            success: function (responseData) {
                console.log(responseData);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.responseText);
            }
        });
    }

}


function add_review(this_form) {
    /* Function to add review */
    var serialize_array = $(this_form).serializeArray();
    var post_data = {};
    $.map(serialize_array, function (n, i) {
        if (n['value'].trim()) {
            post_data[n['name']] = n['value'];
        }
    });
    post_data['institute_id'] = $('#selected_college').val();
    post_data['mobile_number'] = $('#mobile_number').val();
    post_data['campaign'] = $('#campaign').val() ? $('#campaign').val() : 'Direct'
    post_data['name'] = $('#name').val();

    var email = $('#email').val();
    if (email.trim()) {
        post_data['email'] = email;
    }


    $.ajax({
        type: "POST",
        url: '/reviews/',
        data: JSON.stringify(post_data),
        contentType: "application/json",
        async: false,
        success: function (responseData) {
            add_review_to_institute(responseData.id);
            add_review_image(this_form, responseData.id);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            //alert(jqXHR.responseText);
        }
    });
}

function show_form_buttons(show_alert) {
    /* Function to show review buttons */

    $('#all_review_forms').addClass('hide');

    var institute = $('#selected_college').val();
    var ins_course = $('#selected_courses').val();

    if (!institute || institute == '0') {
        alert('Please Select Institute First');
        return 0;
    }

    if (ins_course == '0' || ins_course == '' || !ins_course) {
        if (show_alert) {
            alert('Please Select Course');
        }
        return 0;
    }

    var passing_year = $('#passing_year').val();
    if (!passing_year || passing_year.length !== 4) {
        if (show_alert) {
            alert('Please enter passing year');
        }
        return 0;
    }


    var today = new Date()
    var current_year = today.getFullYear();
    var upper_limit_years = current_year + 4;
    if (passing_year > upper_limit_years || passing_year < 1950) {
        alert('Please enter correct year');
        return 0;
    }

    var forms = $(".review_form");
    for (var j = 0; j < forms.length; j++) {
        forms[j].reset();
    }

    $('#all_review_forms').removeClass('hide');
}

function matchStart(params, data) {
    params.term = params.term || '';
    if (data.text.toUpperCase().replace(".", "").replace(" ", "").indexOf(params.term.toUpperCase().replace(".", "").replace(" ", "")) > -1) {
        return data;
    }
    return false;
}


function load_courses(inst_id) {
    /* Function to load courses */

    $('.collegename').html($('#selected_college').text().trim());

    $.ajax({
        type: "GET",
        url: '/institute-courses-list/',
        data: {
            'institute_id': inst_id,
            'page_size': 60
        },
        success: function (responseData) {
            if (responseData.count > 0) {
                var courses = responseData.results;
                var courses_html = '<option value="0" selected>Select Your Stream</option>';
                for (var i = 0; i < courses.length; i++) {
                    courses_html += '<option value="' + courses[i].id + '">' + courses[i].name + '</option>';
                }
                $('#selected_courses').html(courses_html);
            }
            $('#selected_courses').val('0').trigger('change');
            show_form_buttons(false);
            $('.review_images').addClass('hide');
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(jqXHR.responseText);
        }
    });
}

function show_review_form(form_name) {
    /* Function to show review type form */
    $('.review_modals').modal('hide');
    $('#modal_' + form_name).modal('show');
}


function show_all_button_modal() {
    /* Function to show all buttons of modal */
    $('.review_modals').modal('hide');
    $('#ThankYouModal').modal('show');
}

function show_register_modal() {
    /* Function to show register modal */
    $('#register_login_modal').modal('hide');
    $('#register_modal').modal('show');
}

function show_login_modal() {
    /* Function to show login modal */
    $('#register_login_modal').modal('hide');
    $('#otp_mobile').prop('disabled', false);
    $('#login_modal').modal('show');
}

function show_register_login_modal() {
    /* Function to show register login modal */
    $('#register_modal').modal('hide');
    $('#login_modal').modal('hide');
    $('#register_login_modal').modal('show');
}

function authenticate_mobile_number(mobile_form) {
    /* Function to send OTP and check if user with 
    this mobile number exist or not */

    $.ajax({
        type: "POST",
        url: '/users/validate/' + mobile_form.otp_number.value + '/',
        async: false,
        success: function (responseData) {
            $('#otp_mobile').prop('disabled', true);
            $('#register_modal').modal('hide');
            $('#login_modal').modal('show');
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(jqXHR.responseText);
        }
    });

    $('#authenticate_form').removeClass('hide');
}

function verify_otp(authenticate_form) {
    /* Function to verify otp and login user */

    var verify_data = {
        "phone_no": $('#otp_mobile').val(),
        "code": authenticate_form.otp_code.value
    };

    $.ajax({
        type: "POST",
        url: '/users/verify_otp/',
        data: JSON.stringify(verify_data),
        contentType: "application/json",
        async: false,
        success: function (responseData) {
            $('.review_user').val(responseData.user_id);
            $('#login_modal').modal('hide');
            $('#is-logged-in').val('1');
            $('#modal_overview').modal('show');
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(jqXHR.responseText);
        }
    });
}

function register_user(register_user_form) {
    /* Function to regiter new user */

    var register_form_serialize_array = $(register_user_form).serializeArray();

    var register_form_data = {};

    $.map(register_form_serialize_array, function (n, i) {
        if (n['value'].trim()) {
            register_form_data[n['name']] = n['value'];
        }
    });

    $.ajax({
        type: "POST",
        url: '/users/add/',
        data: JSON.stringify(register_form_data),
        contentType: "application/json",
        async: false,
        success: function (responseData) {
            $('#otp_mobile').val(responseData.phone_no);
            $('#register_modal').modal('hide');
            $('#login_form').submit();
            $('#login_modal').modal('show');
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(jqXHR.responseText);
        }
    });
}

function show_review_modal() {
    /* Function to show review modal */
    $('#all_review_forms').addClass('hide');

    var institute = $('#selected_college').val();
    var ins_course = $('#selected_courses').val();

    if (!institute || institute == '0') {
        alert('Please Select Institute First');
        return 0;
    }

    if (ins_course == '0' || ins_course == '' || !ins_course) {
        alert('Please Select Course');
        return 0;
    }

    var passing_year = $('#passing_year').val();
    if (!passing_year || passing_year.length !== 4) {
        alert('Please enter correct passing year');
        return 0;
    }
    $('#all_review_forms').removeClass('hide');
}

function add_rating(star, count) {
    /* Function to set rating from star */

    var children = star.parentElement.children;
    children[10].value = count; //rating input
    for (var i = 1; i <= 9; i++) {
        if (i <= count) {
            children[i - 1].classList.add('checked');
        }
        else {
            children[i - 1].classList.remove('checked');
        }
    }
}


function remove_hover_clas(star) {
    /*
        Remove class after mouse 
        out and class for checked 
        stars 
    */
    var children = star.parentElement.children;
    count = children[10].value //rating input
    for (var i = 1; i <= 10; i++) {
        if (i <= count) {
            children[i - 1].classList.add('checked');
        }
        else {
            children[i - 1].classList.remove('checked');
        }
    }

}

function add_hover_class(star) {
    /* Highlight star when it hover */
    var count = star.getAttribute('onclick').split(',')[1].split(')')[0];
    var children = star.parentElement.children;
    for (var i = 1; i <= 10; i++) {
        if (i <= count) {
            children[i - 1].classList.add('checked');
        }
        else {
            children[i - 1].classList.remove('checked');
        }
    }
}


function countChar(text_box) {
    /* Function to remaining character count */

    var form = text_box.parentElement;
    var span = form.children[2];
    var characters = text_box.value.length;
    var remaining_character_count = 150 - characters;
    if (remaining_character_count <= 0) {
        var remaining_characters = '';//'0 characters remaining';
    }
    else {
        var remaining_characters = String(150 - characters) + ' characters remaining.';
    }
    span.innerText = remaining_characters;
}

function validate_title(title) {
    /* Function to validate titles */
    var title_childrens = title.parentElement.children;
    if ((title.value.trim().length > 0 && title.value.trim().length < 20) || (title.value.trim().length > 100)) {
        title_childrens[2].classList.remove('hide');
        return false;
    }
    else {
        title_childrens[2].classList.add('hide');
        return true;
    }

}

function validate_description(description) {
    /* Function to validate description */

    var description_children = description.parentElement.children;
    if (description.value.trim().length > 0 && description.value.trim().length < 150) {
        description_children[3].classList.remove('hide');
        return false;
    }
    else {
        description_children[3].classList.add('hide');
        return true;
    }
}

function ValidateEmail(mail) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(mail);
}

function EnableButton() {
    $(".submit-review").removeAttr("disabled");
    $(".loader").css('display', 'none');
}

function DisableButton() {
    $(".submit-review").attr('disabled', 'true');
    $(".loader").css('display', 'block');
}

function submit_all_forms() {
    /* Function to submit all forms */
    DisableButton();
    var forms = $('.review_form');
    var overview_form = forms[0];
    var titles = $('.review_title');
    var descriptions = $('.review_description');
    var error = 0;
    var sub_forms = forms.slice(1)

    for (var i = 0; i < sub_forms.length; i++) {
        if((sub_forms[i].review_title.value.length > 0 && sub_forms[i].description.value.length == 0) || (sub_forms[i].review_title.value.length == 0 && sub_forms[i].description.value.length > 0)){
            if(sub_forms[i].description.value.length == 0)
                sub_forms[i].description.focus();
            else
                sub_forms[i].review_title.focus();
            EnableButton();
            error += 1;
            return 0;
            break;

        }
        else if(sub_forms[i].review_title.value.length == 0 && sub_forms[i].description.value.length == 0){
        }
        else{
            if(!validate_title(sub_forms[i].review_title)){
                sub_forms[i].review_title.focus();
                EnableButton();
                error += 1;
                return 0;
                break;

            }
            if(!validate_description(sub_forms[i].description)){
                sub_forms[i].description.focus();
                EnableButton();
                error += 1;
                return 0;
                break;

            }
        }
    }
    if (overview_form.description.value.length < 150) {
        alert('Description must be at least 150 characters long.')
        overview_form.description.focus();
        EnableButton();
        return 0;
    }

    if (overview_form.review_title.value.length < 20 || overview_form.review_title.value.length > 100) {
        alert('Title cannot be less than 20 and more than 100 characters.');
        overview_form.review_title.focus();
        EnableButton();
        return 0;
    }



    var mobile_number = $('#mobile_number').val();
    if (mobile_number) {
        if (mobile_number.trim().length !== 10) {
            $('#mobile_number_error').removeClass('hide');
            error += 1;
        }
    }
    else {
        $('#mobile_number_error').removeClass('hide');
        error += 1;
    }

    var reviewer_name = $('#name').val();
    if (!reviewer_name.trim()) {
        error += 1;
        $('#name_error').removeClass('hide');
    }

    var form_email = $('#email').val();
    if (form_email.trim()) {
        if (ValidateEmail(form_email) == false) {
            error += 1;
            $('#email_error').removeClass('hide')
        }
    }

    if (error > 0) {
        alert('Please fix the above errors.');
        EnableButton();
        return 0;
    }
    for (var i = 0; i < forms.length; i++) {
        if (forms[i].review_title.value.trim().length > 0 && forms[i].description.value.trim().length > 0) {
            add_review(forms[i]);
        }
    }

    alert('Thanks, we have received your review.');
    location.reload();

}

// function createLead(that, event) {
//     event.preventDefault();
//     data = $(that).serialize();
//     url = "/common/lead_create_ajax_stream/";
//
//     $.ajax({
//       type: "POST",
//       url: url,
//       data: data,
//       success:function(response){
//           $("#success_message").text(response.message);
//           $("#download_brochure_success_modal").modal();
//
//
//       },
//       error:function(errors){
//         console.log(errors)
//       }
//   });
//
//
//
// }

$(document).ready(function () {

    $("#footer_form").submit(function (event) {

        event.preventDefault();
        var data = $(this).serialize();
        var url = "/common/lead_create_ajax_stream/";

        $.ajax({
            type: "POST",
            url: url,
            data: data,
            success: function (response) {
                $("#success_message").text(response.message);
                $("#download_brochure_success_modal").modal();
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    'response': 'Success',
                    'event': 'leadSubmission',
                    'django_form_id': response.form_id,
                    'created_lead_id': response.created_lead_id,
                    'new_lead_created': response.new_lead_created
                });

            },
            error: function (errors) {
                console.log(errors);
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    'response': 'Failure',
                    'event': 'leadSubmission',
                    'django_form_id': '',
                    'error_message': '',
                    'created_lead_id': '',
                    'new_lead_created': ''
                });
            }
        });
    });

    // Hide Header on scroll down START 

    var scrollStatus, currentScrollTop = 0, navbar = $('header');
    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();
        var navHeight = navbar.height();
        //console.log(scrollPosition);
        currentScrollTop = scrollPosition;

        if (scrollStatus < currentScrollTop && scrollPosition > navHeight - 60) {
            navbar.addClass("scrollUp");
        } else if (scrollStatus > currentScrollTop && !(scrollPosition <= navHeight - 60)) {
            navbar.removeClass("scrollUp");
        }
        scrollStatus = currentScrollTop;
    });
    // Hide Header on scroll down END 

    $('.container-college-detail table').wrap('<div class="scrollTable"></div>');
});

$(document).on('click', '.show_cutoff > p', function () {
    $(this).find('i').toggleClass('glyphicon-minus')
    $(this).find('i').toggleClass('glyphicon-plus')
    $(this).siblings('.show_content').toggle();
});