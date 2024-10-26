export const TextareaBlock = (bm, label) => {
    bm.add('bootstrap_textarea', {
        label: `
        <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path class="gjs-block-svg-path" d="M22,7.5 C22,6.6 21.5,6 20.75,6 L3.25,6 C2.5,6 2,6.6 2,7.5 L2,16.5 C2,17.4 2.5,18 3.25,18 L20.75,18 C21.5,18 22,17.4 22,16.5 L22,7.5 Z M21,17 L3,17 L3,7 L21,7 L21,17 Z"></path>
            <polygon class="gjs-block-svg-path" points="4 8 5 8 5 12 4 12"></polygon>
            <polygon class="gjs-block-svg-path" points="19 7 20 7 20 17 19 17"></polygon>
            <polygon class="gjs-block-svg-path" points="20 8 21 8 21 9 20 9"></polygon>
            <polygon class="gjs-block-svg-path" points="20 15 21 15 21 16 20 16"></polygon>
        </svg>
    
      <div>${label}</div>`,
        category: 'Bootstrap Forms',
        content: '<textarea name="textarea1" class="form-control"></textarea>',
    });
};

export default (dc, traits, config = {}) => {
    const defaultType = dc.getType('default');
    const defaultView = defaultType.view;
    const inputType = dc.getType('input');
    const inputModel = inputType.model;

    // TEXTAREA
    dc.addType('bootstrap_textarea', {
        model: {
            defaults: {
                ...inputModel.prototype.defaults,
                'custom-name': config.labels.textarea,
                tagName: 'textarea',
                traits: [
                    traits.name,
                    traits.placeholder,
                    traits.required
                ]
            },
        },
        isComponent(el) {
            if(el.tagName === 'TEXTAREA'){
                return {type: 'textarea'};
            }
        },
        view: defaultView,
    });
}
