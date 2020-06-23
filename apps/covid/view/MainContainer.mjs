import CountryTable              from './country/Table.mjs';
import FooterContainer           from './FooterContainer.mjs';
import HeaderContainer           from './HeaderContainer.mjs';
import MainContainerController   from './MainContainerController.mjs';
import {default as TabContainer} from '../../../node_modules/neo.mjs/src/tab/Container.mjs';
import Viewport                  from '../../../node_modules/neo.mjs/src/container/Viewport.mjs';

/**
 * @class Covid.view.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends Viewport {
    static getConfig() {return {
        className: 'Covid.view.MainContainer',
        ntype    : 'main-container',

        autoMount : true,
        controller: MainContainerController,
        layout    : {ntype: 'vbox', align: 'stretch'},

        items: [
            {module: HeaderContainer, height: 120},
            {
                module: TabContainer,
                flex     : 1,
                reference: 'tab-container',
                style    : {margin: '10px', marginTop: 0},

                items: [{
                    module   : CountryTable,
                    reference: 'table-container',

                    tabButtonConfig: {
                        iconCls: 'fa fa-table',
                        route  : 'mainview=table',
                        text   : 'Table'
                    }
                }, {
                    ntype: 'component',
                    html : 'Tab 2',

                    tabButtonConfig: {
                        iconCls: 'fa fa-dna',
                        route  : 'mainview=helix',
                        text   : 'Helix'
                    }
                }]
            },
            FooterContainer
        ]
    }}
}

Neo.applyClassConfig(MainContainer);

export {MainContainer as default};