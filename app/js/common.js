$(function() {

	// Custom JS
  $(".dropdown").hover(            
      function() {
    $(this).find(".mega-dropdown-tail").stop( true, false ).slideDown("fast"); 
    $('.dropdown-menu', this).stop( true, false ).slideDown("fast");
          $(this).toggleClass('open');        
          
      },
      function() {      
          $('.dropdown-menu', this).stop( true, true ).slideUp("fast");
          $(this).toggleClass('open'); 
    $(this).find(".mega-dropdown-tail").stop( true, true ).slideUp("fast");
      }
  );

  $('#clients-flexslider').flexslider({
      animation: "slide",
      easing: "swing",
      animationLoop: true,
      itemWidth: 1,
      itemMargin: 1,
      minItems: 2,
      maxItems: 9,
      controlNav: false,
      directionNav: false,
      move: 2
  });
   var $menu = $("#menu").mmenu();
    var $icon = $("#my-icon");
    var API = $menu.data( "mmenu" );

    $icon.on( "click", function() {
       API.open();
    });

    API.bind( "open:finish", function() {
       setTimeout(function() {
          $icon.addClass( "is-active" );
       }, 100);
    });
    API.bind( "close:finish", function() {
       setTimeout(function() {
          $icon.removeClass( "is-active" );
       }, 100);
    });

    $('.mm-title').text("Меню");
    $('[data-toggle="tooltip"]').tooltip(); 

// ************************** START POPUPJS ***************************/
if ($('.g-phone').html('<span class="glyphicon glyphicon-earphone"></span> 8 (800) <b>555-36-27</b>') ) {
$('.g-phone').html('<span class="glyphicon glyphicon-earphone"></span> 8 (812) <b>425-34-01</b>');
$('.item.phone').html('Телефон для связи <span>8 (812) 425-34-01</span>');
}

$("#f-phones").mask("+7 (999) 999-99-99");
$("[name=fast_phone]").mask("+7 (999) 999-99-99");
$('a.time-link').html('<span class="glyphicon glyphicon-dashboard"></span> 9.00 до 19.00');
$('a.time-link').prop('title', 'Режим работы: пн-пт с 9.00 до 19.00 сб с 11.00 до 16.00 вс выходной.');

$('.g-city').text('');

var modal_html =
        '<div id="modal-callback" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">' +
        '<div class="modal-dialog">' +
        '<div class="modal-content">' +
        '<div class="modal-header dindisplay-bold">' +
        '<button data-dismiss="modal" class="close" type="button"></button>' +
        '<h4 id="title" class="modal-title roboto-light">Заполните форму!</h4>' +
        '</div>' +
        '<div class="forma modal-body roboto-light">' +

        '<form class="order-form" method="POST">' +
        '<div class="form-group">' +
        '<input type="text" placeholder="Введите ваше имя *" class="form-control" value="" id="f-name" name="fname" />' +
        '<p class="help-block text-muted"></p>' +
        '</div>' +
        '<div class="form-group">' +
        '<input type="text" placeholder="Введите ваш телефон *" class="form-control" value="" id="f-phones" name="fphones" />' +
        '<p class="help-block text-muted"></p>' +
        '</div>' +

        '<div class="form-group">' +
        '<input type="text" placeholder="Введите ваш e-mail" class="form-control" value="" id="f-email" name="femail" />' +
        '<p class="help-block text-muted"></p>' +
        '</div>' +

        '<div class="form-group">' +
        '<input type="text" value="" id="f-source" name="fsource" style="display: none" />' +
        '</div>' +

        '<div class="form-group">' +
        '<div id="manual-fine-uploader"></div>' +
        '</div>' +

        '<div id="uprogress" class="text-center"></div>' +
        '<div id="result-fli" style="display:none"></div>' +
        '<div class="btni"><button id="senderi" class="submit-form btn btn-yellow" onclick="return false">Оставить заявку -></button></div>' +
        '<div><p>Нажимая кнопку "Оставить заявку", я даю свое<br><a href="http://anti-print.ru/soglasie-na-obrabotku-personalnyx-dannyx">согласие на обработку персональных данных </a><br></p></div>'+
        '</form>' +

        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +

        '<script type="text/template" id="qq-template-manual-noedit">' +
        '<div class="qq-uploader-selector qq-uploader">' +
        '<div class="qq-upload-drop-area-selector qq-upload-drop-area" qq-hide-dropzone>' +
        '<span>Drop files here to upload</span>' +
        '</div>' +
        '<div class="qq-upload-button-selector qq-upload-button">' +
        '<button type="button" class="btn btn-sm btn-warning">Выбрать файлы</button>' +
        '</div>' +
        '<span class="qq-drop-processing-selector qq-drop-processing">' +
        '<span>Processing dropped files...</span>' +
        '<span class="qq-drop-processing-spinner-selector qq-drop-processing-spinner"></span>' +
        '</span>' +
        '<ul class="qq-upload-list-selector qq-upload-list">' +
        '<li>' +
        '<div class="qq-progress-bar-container-selector">' +
        '<div class="qq-progress-bar-selector qq-progress-bar"></div>' +
        '</div>' +
        '<span class="qq-upload-spinner-selector qq-upload-spinner"></span>' +
        '<span class="qq-upload-file-selector qq-upload-file"></span>' +
        '<span class="qq-upload-size-selector qq-upload-size"></span>' +
        '<a class="qq-upload-cancel-selector qq-upload-cancel" href="#">Cancel</a>' +
        '<span class="qq-upload-status-text-selector qq-upload-status-text"></span>' +
        '</li>' +
        '</ul>' +
        '</div>' +
        '</script>';
$('#fast_order input[type=submit]').click(function() {
        if (!$('input[name=fast_phone]').val()) {
                alert("Вы не заполнили обязательное поле: Телефон(ы)");
                return;
            }
        $.ajax({
            type: "POST",
            url: "/modules/fast.php",
            data: {
                fast_name: $('[name=fast_name]').val(),
                fast_phone: $('[name=fast_phone]').val(),
                uploadfile: $('[name=uploadfile]').val(),
                fast_msg: $('[name=fast_msg]').val(),
                ref: escape(document.referrer),
                loc: escape(document.location),
                ct: $(".g-cit").html(),
                brs: "== " + getBrowser()
            }
        }).success(function(response) {
            if (response == "ok") {
                $('#fast_order').submit();
                location.href = "http://anti-print.ru/spasibo";
            }
        });
        return false;
    });        
$('body, .highslide-caption').on('click', '.form-btn', function() {
        var source_number = $(this).attr('name');
        hs.close();
        
        $('#modal-callback,#qq-template-manual-noedit').remove();
        $('body').append(modal_html);
        $('#modal-callback').modal();
        $('#modal-callback #f-source').val(source_number);
        console.log($('#modal-callback #f-source').val());
        $('#modal-callback #f-phones').mask('+7 (999) 999-99-99');

        var fileCount = 0;
        var addedFiles = 0;
        var fileLimit = 30;

        var manualuploader = $('#manual-fine-uploader').fineUploader({
            request: {
                endpoint: '/server/handleUploads'
            },
            validation: {
                allowedExtensions: [], //'jpeg', 'jpg', 'gif', 'png'
                sizeLimit: 0 //51200 - 50 kB = 50 * 1024 bytes
            },
            failedUploadTextDisplay: {
                mode: 'custom',
                maxChars: 400,
                responseProperty: 'error',
                enableTooltip: true
            },
            callbacks: {
                onAllComplete: function(successful, failed) { //массивы

                    $('#modal-callback #uprogress').html('<img src="/fineuploader/loading.gif" alt="loading"/> Отправляем данные...');

                    var fname = $('#modal-callback #f-name').val();
                    var fphones = $('#modal-callback #f-phones').val();
                    var femail = $('#modal-callback #f-email').val();
                    var ref = escape(document.referrer);
                    var loc = escape(document.location);
                    var files = $("#modal-callback #result-fli").html();
                    var ct = $("#g-reaal-city").html();
                    var promo = $(".roistat-promo").html();
                    var fsrc = $('#modal-callback #f-source').val();
                    var brs = "== " + getBrowser();

                    //отправка формы
                    $.post("/sender", {
                        'fname': fname,
                        'fphones': fphones,
                        'femail': femail,
                        'ref': ref,
                        'loc': loc,
                        'city': ct,
                        'promo': promo,
                        'files': files,
                        'brs': brs,
                        'fsrc' : fsrc
                    }, function(data) {

                        $('#modal-callback #senderi').removeAttr('disabled');

                        if (data.error) { //выводим ошибки
                            $('#modal-callback #uprogress').html('').hide();
                            $('#modal-callback .qq-upload-list .qq-upload-success').addClass('qq-upload-fail').removeClass('qq-upload-success');
                            alert(data.error);
                        } else {
                            $('#modal-callback #uprogress').html('').hide();
                            $('#modal-callback').modal('hide');
                            //alert(data.success);
                            document.location = '/spasibo';
                        }
                    }, "json");


                },
                onSubmit: function(id, fileName) {
                    fileCount++;
                    if (fileCount > fileLimit) {
                        $('#manual-fine-uploader .qq-upload-button').hide();
                        $('#manual-fine-uploader .qq-upload-drop-area').hide();
                        return false;
                    }
                },
                onCancel: function(id, fileName) {
                    fileCount--;
                    if (fileCount <= fileLimit) {
                        $('#manual-fine-uploader .qq-upload-button').show();
                    }
                },
                onComplete: function(id, fileName, responseJSON) {
                    if (responseJSON.success) {
                        addedFiles++;
                        if (addedFiles >= fileLimit) {
                            $('#manual-fine-uploader .qq-upload-button').hide();
                            $('#manual-fine-uploader .qq-upload-drop-area').hide();
                        }
                        var result_fl = $("#modal-callback #result-fli").html();
                        $("#modal-callback #result-fli").html(result_fl + '||' + responseJSON.data_url);
                    }
                }
            },
            template: "qq-template-manual-noedit",
            autoUpload: false
        });


        $('#senderi').click(function() {

            if (!$('#modal-callback #f-phones').val()) {
                alert("Вы не заполнили обязательное поле: Телефон(ы)");
                return;
            }

            $('#modal-callback #senderi').attr('disabled', true);

            //загрузка файлов
            if ($('#modal-callback .qq-upload-list').html()) {
                $('#modal-callback #uprogress').html('<img src="/fineuploader/loading.gif" alt="loading"/> Загружаем файлы...');
                manualuploader.fineUploader('uploadStoredFiles');
            } else {

                $('#modal-callback #uprogress').html('<img src="/fineuploader/loading.gif" alt="loading"/> Отправляем данные...');

                var fname = $('#modal-callback #f-name').val();
                var fphones = $('#modal-callback #f-phones').val();
                var femail = $('#modal-callback #f-email').val();
                var ref = escape(document.referrer);
                var loc = escape(document.location);
                var files = $("#modal-callback #result-fli").html();
                var ct = $("#g-reaal-city").html();
                var promo = $(".roistat-promo").html();

                var brs = "== " + getBrowser();

                //отправка формы
                $.post("/sender", {
                    'fname': fname,
                    'fphones': fphones,
                    'femail': femail,
                    'ref': ref,
                    'loc': loc,
                    'city': ct,
                    'promo': promo,
                    'files': files,
                    'brs': brs
                }, function(data) {

                    $('#modal-callback #senderi').removeAttr('disabled');

                    if (data.error) { //выводим ошибки
                        $('#modal-callback #uprogress').html('').hide();
                        $('#modal-callback .qq-upload-list .qq-upload-success').addClass('qq-upload-fail').removeClass('qq-upload-success');
                        alert(data.error);
                    } else {
                        $('#modal-callback #uprogress').html('').hide();
                        $('#modal-callback').modal('hide');
                        //alert(data.success);
                        document.location = '/spasibo';
                    }
                }, "json");

            }


            return false;
        });

        return false;
    });        
// *************************** ENDPOPUPJS ***************************/
});
