import constants from './constants';
import { elHasClass } from '../../utils';

export const TabsBlock = (bm, c) => {
    bm.add('tabs', {
        label: `
        <svg aria-hidden="true" width="24" height="50" focusable="false" data-prefix="fas" data-icon="ellipsis-h" class="svg-inline--fa fa-ellipsis-h fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path></svg>
            <div>${c.labels.tabs}</div>
        `,
        category: 'Components',
        content: `
            <ul class="nav nav-tabs" role="tablist">
              <li class="nav-item">
                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Tab 1</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Tab 2</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Tab 3</a>
              </li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">Home tab panel</div>
              <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">Profile tab panel</div>
              <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">Contact tab panel</div>
            </div>
        `
    });
    bm.add('tabs-tab', {
        label: `
        <svg aria-hidden="true" width="24" height="50" focusable="false" data-prefix="fas" data-icon="circle" class="svg-inline--fa fa-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg>
            <div>${c.labels.tab}</div>
        `,
        category: 'Components',
        content: {
            type: 'tabs-tab',
        }
    });
    bm.add('tabs-tab-pane', {
        label: `
        <svg aria-hidden="true" width="24" height="50" focusable="false" data-prefix="fas" data-icon="window-maximize" class="svg-inline--fa fa-window-maximize fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-16 160H64v-84c0-6.6 5.4-12 12-12h360c6.6 0 12 5.4 12 12v84z"></path></svg>
            <div>${c.labels.tabPane}</div>
        `,
        category: 'Components',
        content: {
            type: 'tabs-tab-pane',
        }
    });
};

export default (dc, config = {}) => {
    const defaultType = dc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;
    const { navigationName, tabSelector } = constants;
    const classId = config.classNavigation;
    const type = navigationName;

    dc.addType(type, {

        model: {
            defaults: {
                ...defaultModel.prototype.defaults,
                name: 'Tabs Navigation',
                copyable: 0,
                draggable: true,
                droppable: tabSelector,

                traits: [
                    {
                        type: 'class_select',
                        options: [
                            {value: 'nav-tabs', name: 'Tabs'},
                            {value: 'nav-pills', name: 'Pills'},
                        ],
                        label: 'Type',
                    },
                    {
                        type: 'class_select',
                        options: [
                            {value: '', name: 'Left'},
                            {value: 'nav-fill', name: 'Fill'},
                            {value: 'nav-justified', name: 'Justify'},
                        ],
                        label: 'Layout',
                    },
                ],
            },

            init() {
                this.get('classes').pluck('name').indexOf(classId) < 0 && this.addClass(classId);
            }
        },
        isComponent(el) {
            if (elHasClass(el, classId)) return { type };
        },

        view: {
            init() {
                const props = [
                    'type',
                    'layout',
                ];
                const reactTo = props.map(prop => `change:${prop}`).join(' ');
                this.listenTo(this.model, reactTo, this.render);
                const comps = this.model.components();

                // Add a basic template if it's not yet initialized
                if (!comps.length) {
                    comps.add(`
                        <ul class="nav nav-tabs" role="tablist">
                          <li class="nav-item">
                            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Tab 1</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Tab 2</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Tab 3</a>
                          </li>
                        </ul>
                    `);
                }
            },
        },
    });
}
