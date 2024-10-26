import inputIcon from "../icons/input.svg";

export const InputBlock = (bm, label) => {
    bm.add('bootstrap_input', {
        label: `
        <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path class="gjs-block-svg-path" d="M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z"></path>
            <polygon class="gjs-block-svg-path" points="4 10 5 10 5 14 4 14"></polygon>
        </svg>
      <div>${label}</div>`,
        category: 'Bootstrap Forms',
        content: '<input name="input1" class="form-control"/>',
    });
};

export default (dc, traits, config = {}) => {
    const defaultType = dc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;

    dc.addType('input', {
        model: {
            defaults: {
                ...defaultModel.prototype.defaults,
                'custom-name': config.labels.input,
                tagName: 'input',
                draggable: 'form .form-group',
                droppable: false,
                traits: [
                    traits.value,
                    traits.name,
                    traits.placeholder, {
                        label: config.labels.trait_type,
                        type: 'select',
                        name: 'type',
                        options: [
                            {value: 'text', name: config.labels.type_text},
                            {value: 'email', name: config.labels.type_email},
                            {value: 'password', name: config.labels.type_password},
                            {value: 'number', name: config.labels.type_number},
                            {value: 'date', name: config.labels.type_date},
                            {value: 'hidden', name: config.labels.type_hidden},
                        ]
                    }, traits.required
                ],
            },
        },
        isComponent(el) {
            if(el.tagName === 'INPUT') {
                return {type: 'input'};
            }
        },
        view: defaultView,
    });
}
