/*!
 * Custom toasts
 * Created by Sinan ŞAHİN on 19.03.2019
 * Require jquery-3.3.1 JS
 * Require Font Awesome 4.7.0 CSS
 */

(function ($) {
    SnnToasts = function (opts) {
        var _this = this;

        // default configuration
        var config = $.extend({}, {
            position: 'top-right',
            closeButton: false,
            showFunction: function () {},
            hideFunction: function () {}
        }, opts);

        // main function
        _this.show = function(_showConfig) {
            var e = $('body');

            _this.toastsObject = $.extend({}, {
                type: 'success',
                container : '',
                column : '',
                title : '',
                content : '',
                closeButton : '',
                icon : ''
            }, _showConfig);

            //CREATE TOASTS CONTAINER
            if($('#snn-toasts-' + config.position).length === 0)
            {
                _this.toastsObject.container = $('<div/>', {
                    id: 'snn-toasts-' + config.position,
                    class: 'snn-toasts'
                }).appendTo($(e));
            }
            else
            {
                _this.toastsObject.container = $('#snn-toasts-' + config.position);
            }

            //CREATE TOASTS
            if(_this.toastsObject.type.toLowerCase() === 'success')
            {
                _this.toastsObject.icon = _this.toastsObject.icon ? _this.toastsObject.icon : '<i class="fa fa-2x fa-check"></i>';

                _this.toastsObject.column = $('<div/>', {
                    id: 'snn-toasts-success',
                    class: 'snn-toasts-column snn-toasts-column-' + config.position  + ' snn-toasts-success'
                }).append(
                    $('<div/>', {
                        id: 'snn-toasts-icon',
                        class: 'snn-toasts-icon'
                    }).html(_this.toastsObject.icon).first()
                ).append(
                    $('<div/>', {
                        id: 'snn-toasts-title',
                        class: 'snn-toasts-title'
                    }).html(_this.toastsObject.title).first()
                ).append(
                    $('<div/>', {
                        id: 'snn-toasts-content',
                        class: 'snn-toasts-content'
                    }).html(_this.toastsObject.content).first()
                ).appendTo($(_this.toastsObject.container));
            }
            else if(_this.toastsObject.type.toLowerCase() === 'info')
            {
                _this.toastsObject.icon = _this.toastsObject.icon ? _this.toastsObject.icon : '<i class="fa fa-2x fa-info"></i>';

                _this.toastsObject.column = $('<div/>', {
                    id: 'snn-toasts-info',
                    class: 'snn-toasts-column snn-toasts-column-' + config.position  + ' snn-toasts-info'
                }).append(
                    $('<div/>', {
                        id: 'snn-toasts-icon',
                        class: 'snn-toasts-icon'
                    }).html(_this.toastsObject.icon).first()
                ).append(
                    $('<div/>', {
                        id: 'snn-toasts-title',
                        class: 'snn-toasts-title'
                    }).html(_this.toastsObject.title).first()
                ).append(
                    $('<div/>', {
                        id: 'snn-toasts-content',
                        class: 'snn-toasts-content'
                    }).html(_this.toastsObject.content).first()
                ).appendTo($(_this.toastsObject.container));
            }
            else if(_this.toastsObject.type.toLowerCase() === 'warning')
            {
                _this.toastsObject.icon = _this.toastsObject.icon ? _this.toastsObject.icon : '<i class="fa fa-2x fa-warning"></i>';

                _this.toastsObject.column = $('<div/>', {
                    id: 'snn-toasts-warning',
                    class: 'snn-toasts-column snn-toasts-column-' + config.position  + ' snn-toasts-warning'
                }).append(
                    $('<div/>', {
                        id: 'snn-toasts-icon',
                        class: 'snn-toasts-icon'
                    }).html(_this.toastsObject.icon).first()
                ).append(
                    $('<div/>', {
                        id: 'snn-toasts-title',
                        class: 'snn-toasts-title'
                    }).html(_this.toastsObject.title).first()
                ).append(
                    $('<div/>', {
                        id: 'snn-toasts-content',
                        class: 'snn-toasts-content'
                    }).html(_this.toastsObject.content).first()
                ).appendTo($(_this.toastsObject.container));
            }
            else if(_this.toastsObject.type.toLowerCase() === 'error')
            {
                _this.toastsObject.icon = _this.toastsObject.icon ? _this.toastsObject.icon : '<i class="fa fa-2x fa-close"></i>';

                _this.toastsObject.column = $('<div/>', {
                    id: 'snn-toasts-error',
                    class: 'snn-toasts-column snn-toasts-column-' + config.position  + ' snn-toasts-error'
                }).append(
                    $('<div/>', {
                        id: 'snn-toasts-icon',
                        class: 'snn-toasts-icon'
                    }).html(_this.toastsObject.icon).first()
                ).append(
                    $('<div/>', {
                        id: 'snn-toasts-title',
                        class: 'snn-toasts-title'
                    }).html(_this.toastsObject.title).first()
                ).append(
                    $('<div/>', {
                        id: 'snn-toasts-content',
                        class: 'snn-toasts-content'
                    }).html(_this.toastsObject.content).first()
                ).appendTo($(_this.toastsObject.container));
            }
            else
            {
                _this.toastsObject.icon = '';
                _this.toastsObject.column = '';
            }

            //CLOSE BUTTON
            if(config.closeButton)
            {
                _this.toastsObject.closeButton = $('<div/>', {
                    id: 'snn-toasts-close-button',
                    class: 'snn-toasts-close-button'
                }).html('<i class="fa fa-close"></i>').appendTo($(_this.toastsObject.column));

                //CLOSE TOASTS WITH BUTTON
                $(_this.toastsObject.closeButton).off('click').on('click', function () {
                    $(this).parent().css('opacity', 1)
                        .slideDown('slow')
                        .animate(
                            { opacity: 0 },
                            { queue: false, duration: 'slow' },
                            'slow',
                            $(_this.toastsObject.column).remove()
                        );

                    if($('.snn-toasts-column-' + config.position).length === 0){
                        $('#snn-toasts-' + config.position).remove();
                    }
                });
            }
            else
            {
                setInterval(function() {
                    $(_this.toastsObject.column) .css('opacity', 1)
                        .slideDown('slow')
                        .animate(
                            { opacity: 0 },
                            { queue: false, duration: 'slow' },
                            'slow',
                            $(_this.toastsObject.column).remove()
                        );

                    if($('.snn-toasts-column-' + config.position).length === 0){
                        $('#snn-toasts-' + config.position).remove();
                    }
                }, 4000);
            }

            //POSITION
            $(_this.toastsObject.container).addClass('snn-toasts-' + config.position);

            //ANIMATION
            $(_this.toastsObject.column) .css('opacity', 0)
                .slideDown('slow')
                .animate(
                    { opacity: 1 },
                    { queue: false, duration: 'slow' }
                );
        };
    };
    // start
    $(function() {

        var number = new Number();

        var toastrType = "";

        var closeButton = new Object();

        $('#button-left-bottom').on('click', function () {
            number = Math.random() * 10000;

            toastrType = $('input[name="toastr-type"]:checked').val();
            closeButton = $('input[name="close-button-type"]:checked').val() === "true" ? true : false;

            var leftBottom = new SnnToasts({
                closeButton : closeButton,
                position: 'l-b'
            });

            leftBottom.show({
                type: toastrType.toLowerCase(),
                title : 'SNN TOASTR TITLE ' + number,
                content : 'SNN TOASTR CONTENT '  + number
            });
        });

        $('#button-right-bottom').on('click', function () {
            number = Math.random() * 10000;

            toastrType = $('input[name="toastr-type"]:checked').val();
            closeButton = $('input[name="close-button-type"]:checked').val() === "true" ? true : false;

            var rightBottom = new SnnToasts({
                closeButton : closeButton,
                position: 'r-b'
            });

            rightBottom.show({
                type: toastrType.toLowerCase(),
                title : 'SNN TOASTR TITLE ' + number,
                content : 'SNN TOASTR CONTENT '  + number
            });
        });

        $('#button-left-top').on('click', function () {
            number = Math.random() * 10000;

            toastrType = $('input[name="toastr-type"]:checked').val();
            closeButton = $('input[name="close-button-type"]:checked').val() === "true" ? true : false;

            var leftTop = new SnnToasts({
                closeButton : closeButton,
                position: 'l-t'
            });

            leftTop.show({
                type: toastrType.toLowerCase(),
                title : 'SNN TOASTR TITLE ' + number,
                content : 'SNN TOASTR CONTENT '  + number
            });
        });

        $('#button-right-top').on('click', function () {
            number = Math.random() * 10000;

            toastrType = $('input[name="toastr-type"]:checked').val();
            closeButton = $('input[name="close-button-type"]:checked').val() === "true" ? true : false;

            var rightTop = new SnnToasts({
                closeButton : closeButton,
                position: 'r-t'
            });

            rightTop.show({
                type: toastrType.toLowerCase(),
                title : 'SNN TOASTR TITLE ' + number,
                content : 'SNN TOASTR CONTENT '  + number
            });
        });
    });
})(jQuery);