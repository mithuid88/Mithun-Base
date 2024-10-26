
export const InputGroupBlock = (bm, label, c) => {
    bm.add('form_group_input', {
        label: `
        <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path class="gjs-block-svg-path" d="M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z"></path>
          <polygon class="gjs-block-svg-path" points="4 10 5 10 5 14 4 14"></polygon>
      </svg>
      <div>${label}</div>`,
        category: 'Bootstrap Forms',
        content: `
      <div class="form-group">
        <label>Name</label>
        <input name="name" placeholder="Type here your name" class="form-control"/>
      </div>
      `,
    });

    bm.add('input_group', {
        label: `
        <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path class="gjs-block-svg-path" d="M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z"></path>
          <polygon class="gjs-block-svg-path" points="4 10 5 10 5 14 4 14"></polygon>
      </svg>
      <div>${label}</div>`,
        category: 'Bootstrap Forms',
        content: `
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">$</span>
        </div>
        <input name="input1" type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
        <div class="input-group-append">
          <span class="input-group-text">.00</span>
        </div>
      </div>
      `,
    });
};

export default (dc, traits, config = {}) => {
    const defaultType = dc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;

    dc.addType('input_group', {
        model: {
            defaults: {
                ...defaultModel.prototype.defaults,
                'custom-name': config.labels.input_group,
                tagName: 'div',
                traits: [],
            },
        }, 
        isComponent(el) {
            if(el && el.classList && el.classList.contains('form_group_input')) {
                return {type: 'form_group_input'};
            }
        },
        view: defaultView,
    });
}
