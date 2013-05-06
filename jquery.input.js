(function($) {

    $.fn.input = function(options) {

        var defaults = {
            labelClass: 'inputified'
        },

        options = $.extend(defaults, options);

        this.each(function() {

            var $this = $(this);

            if ($this.is('select')) {
                $this.css('position', 'relative').css('opacity', '0').css('filter', 'alpha(opacity=0)').css('zIndex', '5').css('border', '0');

                var span = $(document.createElement('span'));
                span.css('position', 'absolute');
                span.addClass(options.labelClass).addClass(options.labelClass + '-select');
                span.attr('id', 'select:' + $this.attr('name'));

                // Grab the selected option
                var selected = $this.find('option:selected');

                span.html(selected.html());

                span.insertBefore($this);

                // Now to style the select box like the span (and vice versa)
                span.css('width', $this.width() + 'px');
                var padLeft = parseInt(span.css('padding-left').replace(/[^-\d\.]/g, ''));
                var padRight = parseInt(span.css('padding-right').replace(/[^-\d\.]/g, ''));
                var widthWithoutPad = $this.width() - padLeft - padRight;
                span.css('width', widthWithoutPad + 'px');

                // Pop on another 2 px for a border! (doesnt' matter if not as it'll be hidden anyway)
                $this.css('height', span.height() + 2 + 'px');

                $this.on('change', function() {
                    var selected = $this.find('option:selected');
                    $('[id="select:' + $this.attr('name') + '"]').html(selected.html());
                });
            }

            // if ($this.is('input')) {
            //     if ($this.attr('type') == 'checkbox') {
            //         var span = $(document.createElement('span'));

            //         span.addClass(options.labelClass).addClass(options.labelClass + '-checkbox');
            //         span.attr('id', 'checkbox:' + $this.attr('name'));

            //         if ($this.is(':checked')) {
            //             span.css('background-position', 'bottom left');
            //         }

            //         span.insertBefore($this);
            //     }
            // }

            // var inputName = $this.attr('name');
            // var inputId = '';

            // if (!$this.attr('id')) {
            //     inputId = 'input-' + inputName;
            //     $this.attr('id', inputId);
            // } else {
            //     inputId = $this.attr('id');
            // }

            // var labelId = inputId + '-label';

            // var label = $(document.createElement('label'));
            // label.attr('for', inputId);
            // label.attr('id', labelId);
            // label.attr('class', options.labelClass);
            // label.text(options.labelText);
            // label.css({
            //     cursor: 'pointer'
            // });

            // $this.after(label);

            // $this.css({ 
            //     position: 'absolute',
            //     left: '-9999px'
            // });
            
            // $this.change(function(e) {
            //     var filepath = this.value;
            //     var m = filepath.match(/([^\/\\]+)$/);
            //     var filename = m[1];
            //     label.text(filename);
            // });

            return this;

        }); // end each

    }

})(jQuery);