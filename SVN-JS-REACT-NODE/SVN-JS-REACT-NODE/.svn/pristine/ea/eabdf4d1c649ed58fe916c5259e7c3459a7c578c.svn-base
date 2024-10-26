
export const SelectBlock = (bm, label) => {
    bm.add('bootstrap_select', {
        label: `
        <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path class="gjs-block-svg-path" d="M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z" fill-rule="nonzero"></path>
            <polygon class="gjs-block-svg-path" transform="translate(18.500000, 12.000000) scale(1, -1) translate(-18.500000, -12.000000) " points="18.5 11 20 13 17 13"></polygon>
            <rect class="gjs-block-svg-path" x="4" y="11.5" width="11" height="1"></rect>
        </svg>
    
      <div>${label}</div>`,
        category: 'Bootstrap Forms',
        content: `<select class="form-control" name="select1">
        ${label ? `<option value="">${label}</option>` : ''}
        <option value="1">${label} 1</option>
        </select>`,
    });
};

export default (editor, dc, traits, config = {}) => {
    const defaultType = dc.getType('default');
    const defaultModel = defaultType.model;
    const inputType = dc.getType('input');
    const inputModel = inputType.model;

    const preventDefaultClick = () => {
        return defaultType.view.extend({
            events: {
                'mousedown': 'handleClick',
            },

            handleClick(e) {
                e.preventDefault();
            },
        });
    };

    // SELECT
    dc.addType('select', {
        model: {
            defaults: {
                ...inputModel.prototype.defaults,
                'custom-name': config.labels.select,
                tagName: 'select',
                traits: [
                    traits.name, {
                        label: config.labels.trait_options,
                        type: 'select-options'
                    },
                    traits.required
                ],
            },
        },
        isComponent(el) {
            if(el.tagName === 'SELECT'){
                return {type: 'select'};
            }
        },
        view: preventDefaultClick(),
    });

    const traitManager = editor.TraitManager;
    traitManager.addType('select-options', {
        events:{
            'keyup': 'onChange',
        },

        onValueChange: function () {
            const optionsStr = this.model.get('value').trim();
            const options = optionsStr.split('\n');
            const optComps = [];

            for (let i = 0; i < options.length; i++) {
                const optionStr = options[i];
                const option = optionStr.split(config.optionsStringSeparator);
                const opt = {
                    tagName: 'option',
                    attributes: {}
                };
                if(option[1]) {
                    opt.content = option[1];
                    opt.attributes.value = option[0];
                } else {
                    opt.content = option[0];
                    opt.attributes.value = option[0];
                }
                optComps.push(opt);
            }

            const comps = this.target.get('components');
            comps.reset(optComps);
            this.target.view.render();
        },

        getInputEl: function() {
            if (!this.$input) {
                const target = this.target;
                let optionsStr = '';
                const options = target.get('components');

                for (let i = 0; i < options.length; i++) {
                    const option = options.models[i];
                    const optAttr = option.get('attributes');
                    const optValue = optAttr.value || '';
                    optionsStr += `${optValue}${config.optionsStringSeparator}${option.get('content')}\n`;
                }

                this.$input = document.createElement('textarea');
                this.$input.value = optionsStr;
            }
            return this.$input;
        },
    });
}
