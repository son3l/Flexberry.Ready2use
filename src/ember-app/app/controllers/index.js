import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.ready2use.caption'),
          title: i18n.t('forms.application.sitemap.ready2use.title'),
          children: [{
            link: 'i-i-s-ready2use-method-l',
            caption: i18n.t('forms.application.sitemap.ready2use.i-i-s-ready2use-method-l.caption'),
            title: i18n.t('forms.application.sitemap.ready2use.i-i-s-ready2use-method-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-ready2use-download-file-l',
            caption: i18n.t('forms.application.sitemap.ready2use.i-i-s-ready2use-download-file-l.caption'),
            title: i18n.t('forms.application.sitemap.ready2use.i-i-s-ready2use-download-file-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-ready2use-execution-l',
            caption: i18n.t('forms.application.sitemap.ready2use.i-i-s-ready2use-execution-l.caption'),
            title: i18n.t('forms.application.sitemap.ready2use.i-i-s-ready2use-execution-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-ready2use-opt-files-l',
            caption: i18n.t('forms.application.sitemap.ready2use.i-i-s-ready2use-opt-files-l.caption'),
            title: i18n.t('forms.application.sitemap.ready2use.i-i-s-ready2use-opt-files-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-ready2use-upload-file-l',
            caption: i18n.t('forms.application.sitemap.ready2use.i-i-s-ready2use-upload-file-l.caption'),
            title: i18n.t('forms.application.sitemap.ready2use.i-i-s-ready2use-upload-file-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-ready2use-value-of-size-l',
            caption: i18n.t('forms.application.sitemap.ready2use.i-i-s-ready2use-value-of-size-l.caption'),
            title: i18n.t('forms.application.sitemap.ready2use.i-i-s-ready2use-value-of-size-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-ready2use-no-n-opt-file-l',
            caption: i18n.t('forms.application.sitemap.ready2use.i-i-s-ready2use-no-n-opt-file-l.caption'),
            title: i18n.t('forms.application.sitemap.ready2use.i-i-s-ready2use-no-n-opt-file-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-ready2use-optimize-l',
            caption: i18n.t('forms.application.sitemap.ready2use.i-i-s-ready2use-optimize-l.caption'),
            title: i18n.t('forms.application.sitemap.ready2use.i-i-s-ready2use-optimize-l.title'),
            icon: 'tasks',
            children: null
          }]
        }
      ]
    };
  }),
})