export const RadioBlock = (bm, label) => {
    bm.add('bootstrap_radio', {
        label: `
        <svg aria-hidden="true" width="24" height="50" focusable="false" data-prefix="far" data-icon="dot-circle" class="svg-inline--fa fa-dot-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>
            <div>${label}</div>
        `,
        category: 'Bootstrap Forms',
        content: `
        <div class="form-check">
          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
          <label class="form-check-label" for="exampleRadios1">
            Default radio
          </label>
        </div>
      `,
    });
};

export default (dc, traits, config = {}) => {
    const checkType = dc.getType('checkbox');

    // RADIO
    dc.addType('radio', {
        model: {
            defaults: {
                ...checkType.model.prototype.defaults,
                'custom-name': config.labels.radio,
                attributes: {type: 'radio'},
            },
        },
        isComponent(el) {
            if(el.tagName === 'INPUT' && el.type === 'radio'){
                return {type: 'radio'};
            }
        },
        view: checkType.view,
    });
}
