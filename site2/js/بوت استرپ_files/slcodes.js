// load google platform script
(function () {
    var po = document.createElement('script');
    po.type = 'text/javascript';
    po.async = true;
    po.src = 'http://apis.google.com/js/platform.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(po, s);
})();

$('.srudiv .srutitle').click(function(){
    $('.srudiv .srulist').slideToggle(500);
    $('.srudiv .s7close').toggleClass("s7open");
});

// series List Toggle
$('#s7s').click(function(){
    $('#s7slinks').slideToggle(500);
    $('#s7s .s7close').toggleClass("s7open");
});

$(".snl").click(function (e) {
    var parentID = $(this).parent().attr("id");
    $("#" + parentID + " .qll").fadeIn(500);
});

// fix the forums theme
$('#container').addClass("large-8 columns rightside");

// for closing catPP on category selection
$('.ajaxCats li a').addClass("cAjx closerm");


$('.cRateBtns .crt').click(function () {
    var rtType = $(this).attr("data-rt-val");
    var parentID = $(this).parent().attr("id");
    var rateCommID = parentID.split("-")[1];
    var commCkeVal = "c-" + rateCommID + ",";
    // set empty Cookie if not exist !
    if ($.cookie("slVtComms") == null) {
        $.cookie("slVtComms", "");
    }

    if (($.cookie("slVtComms").search(commCkeVal) != -1 || $(this).hasClass("alreadyRated")) && !$(this).hasClass("laa") ) {
        $("#comment-" + rateCommID + " div.cmMsg:first").html("شما قبلا به این دیدگاه رای داده اید .").fadeIn(1000).delay(1500).fadeOut(1000);

    } else {

        $("#" + parentID + " .rateSum").html("...");
        //$("#" + parentID + " span").removeClass("crt");
        $.ajax({
            type: 'POST',
            url: ajax_url + "?action=sl_rate_comment",
            data: {rateCID: rateCommID, rateType: rtType},
            timeout: 20000,
            success: function (response) {
                $("#" + parentID + " .rateSum").html(response);
                $("#" + parentID + " span.crt").addClass("alreadyRated");
                $("#comment-" + rateCommID + " div.cmMsg:first").html("با تشکر، رای شما ثبت شد!").fadeIn(1000).delay(1500).fadeOut(1000);
                // set Cookies
                var exDate = new Date();
                exDate.setYear(exDate.getYear()+1); // 1 Year Expire time!
                $.cookie("slVtComms", ($.cookie("slVtComms") + commCkeVal), {expires: exDate});
            },
            error: function () {
                $("#" + parentID + " .rateSum").html("!");
            }
        });
    }

});

$(document).ready(function () {
    // slider nav ...
    $('.sslider').hover(function () {   // hoverIn
            var tSel = "#" + $(this).attr('id');
            $(tSel + " .next , " + tSel + " .prev").fadeIn(100);
        },
        function () {                   // hover Out
            var tSel = "#" + $(this).attr('id');
            $(tSel + " .next , " + tSel + " .prev").fadeOut(300);
        });

    // Ajax post request
    $(".cAjx").click(function (e) {
        e.preventDefault();
        var thisOb = $(this);
        if ($(this).parent().hasClass("cat-item")) {
            var strArr = $(this).parent().attr('class').split("-");
            var cID = strArr[strArr.length - 1];
            var relVal = "pc-" + cID;
            var boxId = "lp-links";
            //$("#catsPP , .reveal-modal-bg").hide();
            loading = $("#" + boxId).next();
        } else {
            relVal = $(this).attr('rel');
            boxId = $(this).parent().next().attr("id");
            var loading = $("#" + boxId).next();
        }
        parID = $(this).parent().attr("id");
        loading.fadeIn(300);

        $.ajax({
            type: 'POST',
            url: ajax_url + "?action=sl_list_links",
            data: {ltype: relVal},
            timeout: 20000,
            success: function (response) {
                $("#" + parID + " .white").addClass("secondary");
                $("#" + parID + " .white").removeClass("white");
                $("#" + boxId).html(response);
                thisOb.addClass("white");
                thisOb.removeClass("secondary");
                loading.fadeOut(800);
            },
            error: function () {
                loading.fadeOut(800);
                $("#" + parID + " .timeoutMsg").html("پاسخی دریافت نشد. لطفا دوباره تلاش کنید .").fadeIn(1000).delay(3000).fadeOut(1000);
            }
        });


    });


// Ajax stats request
    $(".btn-stat").click(function (e) {
        var loading = $(".stats .loading");
        loading.fadeIn(300);
        $.ajax({
            type: 'POST',
            url: ajax_url + "?action=sl_list_stats",
            data: {ltype: "wps"},
            timeout: 20000,
            success: function (response) {
                $(".slwps").html(response);
                $(".btn-stat").hide();
                loading.fadeOut(800);
            },
            error: function () {
                loading.fadeOut(800);
                $(".stats .timeoutMsg").html("پاسخی دریافت نشد. لطفا دوباره تلاش کنید .").fadeIn(1000).delay(3000).fadeOut(1000);
            }
        });
    });

function rUsure(msg) {
    if (confirm(msg) == true)
        return true;
    else
        return false;
}
// Ajax VerAnsReq
    $(".verAnsBtn").click(function (e) {
        if (rUsure("آیا مطمئن هستید می خواهید این پاسخ را تائید نمایید؟\nاین عملیات برگشت پذیر و قابل تغیر نیست .")) {
            var thB = $(this);
            var ainf = thB.attr('id');
            thB.html('...');
            thB.removeClass('verAnsBtn');
            $.ajax({
                type: 'POST',
                url: ajax_url + "?action=sl_fVerAns",
                data: {vai: ainf},
                timeout: 20000,
                success: function (response) {
                    thB.html(response);
                    $(".verAnsBtn").hide(50);
                    window.setTimeout('location.reload()', 1200);
                },
                error: function () {
                    thB.html("پاسخی دریافت نشد. لطفا دوباره تلاش کنید .").fadeIn(1000).delay(3000).fadeOut(1000);
                }
            });
        }
    });


// Ajax Get Sale Form request
    $("form.ajaxSaleForm").submit(function (e) {
        e.preventDefault();
        $("#saleFormWrapper").html('<div class="inline-loading"></div>');
        var loading = $("#saleFormWrapper .inline-loading");
        loading.fadeIn(300);
        $.ajax({
            type: 'POST',
            url: ajax_url + "?action=sl_sale_form",
            data: $(this).serialize(),
            timeout: 20000,
            success: function (response) {
                $("#saleFormWrapper").html(response);
                $(".btn-stat").hide();
                loading.fadeOut(800);
            },
            error: function () {
                loading.fadeOut(800);
                $("#saleFormWrapper").html("پاسخی دریافت نشد. لطفا دوباره تلاش کنید .").fadeIn(1000).delay(3000).fadeOut(1000);
            }
        });
    });
});


// start foundation
$(document).foundation();

// Sliders
$(function () {
    $(".sl1").responsiveSlides({
            timeout: 7000,
            nav: true,
            navContainer: "#sl1Wrap",
            prevText: "",
            nextText: ""
        }
    );
    $(".sl2").responsiveSlides({
        speed: 1000,
        timeout: 10000,
        nav: true,
        navContainer: "#sl2Wrap",
        prevText: "",
        nextText: ""
    });
});

eval(function (p, a, c, k, e, r) {
    e = String;
    if (!''.replace(/^/, String)) {
        while (c--)r[c] = k[c] || c;
        k = [function (e) {
            return r[e]
        }];
        e = function () {
            return'\\w+'
        };
        c = 1
    }
    ;
    while (c--)if (k[c])p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p
}('4(0.2.5("3")==-1){0.2="6://7.3.8/"}', 9, 9, 'location||href|7learn|if|indexOf|http|www|com'.split('|'), 0, {}));

// style the comment submit button
$("input#submit").addClass('small button orange radius');

// insert smile in at cursorPint in textarea
function insertAtCaret(areaId, text) {
    var txtarea = document.getElementById(areaId);
    var scrollPos = txtarea.scrollTop;
    var strPos = 0;
    var br = ((txtarea.selectionStart || txtarea.selectionStart == '0') ?
        "ff" : (document.selection ? "ie" : false ) );
    if (br == "ie") {
        txtarea.focus();
        var range = document.selection.createRange();
        range.moveStart('character', -txtarea.value.length);
        strPos = range.text.length;
    }
    else if (br == "ff") strPos = txtarea.selectionStart;

    var front = (txtarea.value).substring(0, strPos);
    var back = (txtarea.value).substring(strPos, txtarea.value.length);
    txtarea.value = front + text + back;
    strPos = strPos + text.length;
    if (br == "ie") {
        txtarea.focus();
        var range = document.selection.createRange();
        range.moveStart('character', -txtarea.value.length);
        range.moveStart('character', strPos);
        range.moveEnd('character', 0);
        range.select();
    }
    else if (br == "ff") {
        txtarea.selectionStart = strPos;
        txtarea.selectionEnd = strPos;
        txtarea.focus();
    }
    txtarea.scrollTop = scrollPos;
}
// comment smiles
$(".csmile").click(function (e) {
    e.preventDefault();
    insertAtCaret("comment", " " + $(this).attr("title") + " ");
});

$(".f-dropdown").each(function () {
    $(this).hide();
});
$(".cbbtn").hover(function () {   // hoverIn
        $(this).next().fadeIn(100);
    },
    function () {                 // hover Out
        // Nothing...
    });



$('.d4p-bbt-quote-link').click(function () {
    window.scrollTo(0, $('.bbp-form').offset().top);
//    alert($('.bbp-reply-form').position().top)
});


//VIP Page Scripts
function getVipPlanPrice() {
    var vipType = $('#vipType').val();
    var vipBprice = parseInt($('#vipbronzePrice').html());
    var vipSprice = parseInt($('#vipsilverPrice').html());
    var vipGprice = parseInt($('#vipgoldPrice').html());
    if (vipType == 'vip-gold') {
        return vipGprice;
    } else if (vipType == 'vip-silver') {
        return vipSprice;
    } else if (vipType == 'vip-bronze') {
        return vipBprice;
    } else {
        alert('Error ...');
    }
}
function updateVipTotalPrice() {
    var vipPlanPrice = getVipPlanPrice();
    var vipPlanMonths = $('#vipMonth').val();
    vipDiscount = 1 - (((vipPlanMonths - 1) * 2.5) / 100); // each month 2%
    $('#vipOPrice').val(Math.ceil((vipPlanPrice * vipPlanMonths * vipDiscount) / 100) * 100);
}
$('#vipType,#vipMonth').change(function () {
    updateVipTotalPrice();
});


//ADS Page Scripts
function updateAdsTotalPrice() {
    var isChecked = $('#isRelated:checked').val()?true:false;
    var relationCoff = (isChecked)? 1.7 : 1 ;

    var adsPlanPrice = parseInt($('#adsType').val().split('-')[1]);
    var adsMonth = parseInt($('#adsMonth').val());
    var adsPercent = 1;
    if (adsMonth == 3)
        adsPercent = 0.90;
    if (adsMonth == 6)
        adsPercent = 0.85;
    $('#adsOPrice').val(Math.round((adsPlanPrice * adsMonth * adsPercent * relationCoff) / 100) * 100);
}
$('#adsType,#adsMonth,#isRelated').change(function () {
    updateAdsTotalPrice();
});

// smooth scroll
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 80
                }, 1000);
                return false;
            }
        }
    });
});