
export const CheckboxBlock = (bm, label) => {
    bm.add('checkbox', {
        label: `
        <svg aria-hidden="true" width="24" height="50" focusable="false" data-prefix="fas" data-icon="check-square" class="svg-inline--fa fa-check-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"></path></svg>
            <div>${label}</div>
        `,
        category: 'Bootstrap Forms',
        content: `
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
          <label class="form-check-label" for="defaultCheck1">
            Default checkbox
          </label>
        </div>
      `,
    });
};

export default (dc, traits, config = {}) => {
    const defaultType = dc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;
    const inputType = dc.getType('input');
    const inputModel = inputType.model;

    dc.addType('checkbox', {
        model: {
            defaults: {
                ...inputModel.prototype.defaults,
                'custom-name': config.labels.checkbox_name,
                copyable: false,
                droppable: false,
                attributes: {type: 'checkbox'},
                traits: [
                    traits.id,
                    traits.name,
                    traits.value,
                    traits.required,
                    traits.checked
                ],
            },

            init() {
                this.listenTo(this, 'change:checked', this.handleChecked);
            },

            handleChecked() {
                let checked = this.get('checked');
                let attrs = this.get('attributes');
                const view = this.view;

                if (checked) {
                    attrs.checked = true;
                } else {
                    delete attrs.checked;
                }

                if (view) {
                    view.el.checked = checked
                }

                this.set('attributes', { ...attrs });
            }
        },
        isComponent(el) {
            if (el.tagName === 'INPUT' && el.type === 'checkbox') {
                return {type: 'checkbox'};
            }
        },
        view: defaultView.extend({
            events: {
                'click': 'handleClick',
            },

            handleClick(e) {
                e.preventDefault();
            },
        }),
    });
}
