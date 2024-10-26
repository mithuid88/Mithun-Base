export const FormBlock = (bm, label) => {
    bm.add('bootstrap_form', {
        label: `
        <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path class="gjs-block-svg-path" d="M22,5.5 C22,5.2 21.5,5 20.75,5 L3.25,5 C2.5,5 2,5.2 2,5.5 L2,8.5 C2,8.8 2.5,9 3.25,9 L20.75,9 C21.5,9 22,8.8 22,8.5 L22,5.5 Z M21,8 L3,8 L3,6 L21,6 L21,8 Z" fill-rule="nonzero"></path>
            <path class="gjs-block-svg-path" d="M22,10.5 C22,10.2 21.5,10 20.75,10 L3.25,10 C2.5,10 2,10.2 2,10.5 L2,13.5 C2,13.8 2.5,14 3.25,14 L20.75,14 C21.5,14 22,13.8 22,13.5 L22,10.5 Z M21,13 L3,13 L3,11 L21,11 L21,13 Z" fill-rule="nonzero"></path>
            <rect class="gjs-block-svg-path" x="2" y="15" width="10" height="3" rx="0.5"></rect>
        </svg>
    
      <div>${label}</div>`,
        category: 'Bootstrap Forms',
        content: `
        <form>
          <div class="form-group">
            <label>Name</label>
            <input name="name" placeholder="Type here your name" class="form-control"/>
          </div>
          <div class="form-group">
            <label>Email</label>
            <input name="email" type="email" placeholder="Type here your email" class="form-control"/>
          </div>
          <div class="form-check">
            <input name="sex" type="checkbox" class="form-check-input" value="M">
            <label class="form-check-label">M</label>
          </div>
          <div class="form-check">
            <input name="sex" type="checkbox" class="form-check-input" value="F">
            <label class="form-check-label">F</label>
          </div>
          <div class="form-group">
            <label>Message</label>
            <textarea name="message" class="form-control"></textarea>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary">Send</button>
          </div>
        </form>
      `,
    });
};

export default (dc, traits, config = {}) => {
    const defaultType = dc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;
    let actionTrait;

    // If the formPredefinedActions is set in the config you can add a dropdown menu to the actions trait
    if(config.formPredefinedActions && config.formPredefinedActions.length) {
        actionTrait = {
            type: 'select',
            label: config.labels.trait_action,
            name: 'action',
            options: [],
        };
        config.formPredefinedActions.forEach((action) => {
            actionTrait.options.push({value: action.value, name: action.name})
        });
    } else {
        actionTrait = {
            label: config.labels.trait_action,
            name: 'action',
        }
    }

    dc.addType('form', {
        model: {
            defaults: {
                ...defaultModel.prototype.defaults,
                droppable: ':not(form)',
                draggable: ':not(form)',
                traits: [
                    {
                        type: 'select',
                        label: config.labels.trait_enctype,
                        name: 'enctype',
                        options: [
                            {value: 'application/x-www-form-urlencoded', name: 'application/x-www-form-urlencoded (default)'},
                            {value: 'multipart/form-data', name: 'multipart/form-data'},
                            {value: 'text/plain', name: 'text/plain'},
                        ]
                    },
                    {
                        type: 'select',
                        label: config.labels.trait_method,
                        name: 'method',
                        options: [
                            {value: 'post', name: 'POST'},
                            {value: 'get', name: 'GET'},
                        ]
                    },
                    actionTrait
                ],
            },

            init() {
                this.listenTo(this, 'change:formState', this.updateFormState);
            },

            updateFormState() {
                var state = this.get('formState');
                switch (state) {
                    case 'success':
                        this.showState('success');
                        break;
                    case 'error':
                        this.showState('error');
                        break;
                    default:
                        this.showState('normal');
                }
            },

            showState(state) {
                var st = state || 'normal';
                var failVis, successVis;
                if (st === 'success') {
                    failVis = 'none';
                    successVis = 'block';
                } else if (st === 'error') {
                    failVis = 'block';
                    successVis = 'none';
                } else {
                    failVis = 'none';
                    successVis = 'none';
                }
                var successModel = this.getStateModel('success');
                var failModel = this.getStateModel('error');
                var successStyle = successModel.getStyle();
                var failStyle = failModel.getStyle();
                successStyle.display = successVis;
                failStyle.display = failVis;
                successModel.setStyle(successStyle);
                failModel.setStyle(failStyle);
            },

            getStateModel(state) {
                var st = state || 'success';
                var stateName = 'form-state-' + st;
                var stateModel;
                var comps = this.get('components');
                for (var i = 0; i < comps.length; i++) {
                    var model = comps.models[i];
                    if (model.get('form-state-type') === st) {
                        stateModel = model;
                        break;
                    }
                }
                if (!stateModel) {
                    var contentStr = "";//formMsgSuccess;
                    if (st === 'error') {
                        contentStr = "";//formMsgError;
                    }
                    stateModel = comps.add({
                        'form-state-type': st,
                        type: 'text',
                        removable: false,
                        copyable: false,
                        draggable: false,
                        attributes: {'data-form-state': st},
                        content: contentStr,
                    });
                }
                return stateModel;
            },
        },
        isComponent(el) {
            if (el.tagName === 'FORM') {
                return {type: 'form'};
            }
        },

        view: defaultView.extend({
            events: {
                submit(e) {
                    e.preventDefault();
                }
            }
        }),
    });
}
