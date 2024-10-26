$(document).ready(function () {
    $('[data-component="image-comparison-slider"]').each(function () {
        const $imageComparisonSlider = $(this);

        function setSliderState(e, $element) {
            const $sliderRange = $element.find('[data-image-comparison-range]');

            if (e.type === 'input') {
                $sliderRange.addClass('image-comparison-range-active');
                return;
            }

            $sliderRange.removeClass('image-comparison-range-active');
            $element.off('mousemove', moveSliderThumb);
        }

        function moveSliderThumb(e) {
            const $sliderRange = $imageComparisonSlider.find('[data-image-comparison-range]');
            const $thumb = $imageComparisonSlider.find('[data-image-comparison-thumb]');
            let position = e.layerY - 20;

            if (e.layerY <= $sliderRange.offset().top) {
                position = -20;
            }

            if (e.layerY >= $sliderRange.outerHeight()) {
                position = $sliderRange.outerHeight() - 20;
            }

            $thumb.css('top', `${position}px`);
        }

        function moveSliderRange(e, $element) {
            const value = e.target.value;
            const $slider = $element.find('[data-image-comparison-slider]');
            const $imageWrapperOverlay = $element.find('[data-image-comparison-overlay]');

            $slider.css('left', `${value}%`);
            $imageWrapperOverlay.css('width', `${value}%`);

            $element.on('mousemove', moveSliderThumb);
            setSliderState(e, $element);
        }

        function init($element) {
            const $sliderRange = $element.find('[data-image-comparison-range]');

            if (!('ontouchstart' in window)) {
                $sliderRange.on('mouseup', e => setSliderState(e, $element));
                $sliderRange.on('mousedown', moveSliderThumb);
            }

            $sliderRange.on('input', e => moveSliderRange(e, $element));
            $sliderRange.on('change', e => moveSliderRange(e, $element));
        }

        init($imageComparisonSlider);
    });
});
