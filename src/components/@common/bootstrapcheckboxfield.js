import { dataComponentId, sortableClass, formGroup, rowClass, col_sm_9 } from '../common';
import { bootstrapcheckboxfieldid } from './ids';
import checkboxfield from './checkboxfield';
import extend from 'lodash/extend';
import bootstrapcheckbox from './bootstrapcheckbox';
import label from './label';

const bootstrapcheckboxfield = extend({}, checkboxfield, {
    html: `<div class="${formGroup} ${sortableClass} ${rowClass}" ${dataComponentId}="${bootstrapcheckboxfieldid}">
               ${label.html}
               ${bootstrapcheckbox.html}
           </div>`
});

export default bootstrapcheckboxfield;