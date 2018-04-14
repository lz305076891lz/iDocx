import { schema } from 'normalizr';

export const template = new schema.Entity('templates');
export const templates = [template];
export const fish = new schema.Entity('fishes', {}, {
  idAttribute: 'comp_id',
  /* eslint no-shadow: 0 */
  processStrategy(fish) {
    return {
      ...fish,
      id: fish.comp_id,
      filepath: fish.comp_path,
      fileName: `文档${fish.comp_id}`,
      // previewHref: `http://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(`http://www.aidocx.com/index.php/api/files/${fish.comp_id}`)}`,
      previewHref: `http://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(`http://www.aidocx.com/${fish.comp_path}`)}`,
      downloadLinks: {
        standard: {
          id: '1',
          name: '标准版',
          price: 0,
          downloadLink: `http://www.aidocx.com/${fish.comp_path}`,
        },
        withreview: {
          id: '2',
          name: '带审阅版',
          price: 0,
          downloadLink: `http://www.aidocx.com/${fish.comp_path.split(".")[0]}_NoStyle.docx`,
        },
        nostyle: {
          id: fish.comp_id,
          name: '无样式版',
          price: 0,
          downloadLink: `http://www.aidocx.com/${fish.comp_path.split(".")[0]}_Revise.docx`,
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
