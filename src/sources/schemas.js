import {schema} from 'normalizr';
import {root} from '../../settings';

export const template = new schema.Entity('templates');
export const templates = [template];
export const fish = new schema.Entity('fishes', {}, {
  idAttribute: 'comp_id',
  /* eslint no-shadow: 0 */
  processStrategy(fish) {
    return {
      ...fish,
        id: '文档' + fish.comp_id.substr(fish.comp_id.length - 5),
      filepath: fish.comp_path,
        // fileName: fish.doc_title,
        // previewHref: `http://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(`${root}index.php/api/files/${fish.comp_id}`)}`,
        previewHref: `http://39.106.25.99/op/view.aspx?src=${encodeURIComponent(`${root}${fish.comp_path}`)}`,
      downloadLinks: {
        standard: {
          id: '1',
          name: '标准版',
          price: 0,
            downloadLink: `${root}${fish.comp_path}`,
        },
        withreview: {
          id: '2',
          name: '带审阅版',
          price: 0,
            downloadLink: `${root}${fish.comp_path.split(".")[0]}_Revise.docx`,
        },
        nostyle: {
            id: '3',
          name: '无样式版',
          price: 0,
            downloadLink: `${root}${fish.comp_path.split(".")[0]}_NoStyle.docx`,
        },
      },
    };
  },
});
export const fishes = [fish];
export const plainFish = new schema.Entity('fishes', {
  template,
}, {
  idAttribute: 'comp_id',
});
export const plainFishes = [plainFish];

export const user = new schema.Entity('users');
