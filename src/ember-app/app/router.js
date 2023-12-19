import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-ready2use-download-file-l');
  this.route('i-i-s-ready2use-download-file-e',
  { path: 'i-i-s-ready2use-download-file-e/:id' });
  this.route('i-i-s-ready2use-download-file-e.new',
  { path: 'i-i-s-ready2use-download-file-e/new' });
  this.route('i-i-s-ready2use-execution-l');
  this.route('i-i-s-ready2use-execution-e',
  { path: 'i-i-s-ready2use-execution-e/:id' });
  this.route('i-i-s-ready2use-execution-e.new',
  { path: 'i-i-s-ready2use-execution-e/new' });
  this.route('i-i-s-ready2use-method-l');
  this.route('i-i-s-ready2use-method-e',
  { path: 'i-i-s-ready2use-method-e/:id' });
  this.route('i-i-s-ready2use-method-e.new',
  { path: 'i-i-s-ready2use-method-e/new' });
  this.route('i-i-s-ready2use-no-n-opt-file-l');
  this.route('i-i-s-ready2use-no-n-opt-file-e',
  { path: 'i-i-s-ready2use-no-n-opt-file-e/:id' });
  this.route('i-i-s-ready2use-no-n-opt-file-e.new',
  { path: 'i-i-s-ready2use-no-n-opt-file-e/new' });
  this.route('i-i-s-ready2use-opt-files-l');
  this.route('i-i-s-ready2use-opt-files-e',
  { path: 'i-i-s-ready2use-opt-files-e/:id' });
  this.route('i-i-s-ready2use-opt-files-e.new',
  { path: 'i-i-s-ready2use-opt-files-e/new' });
  this.route('i-i-s-ready2use-optimize-l');
  this.route('i-i-s-ready2use-optimize-e',
  { path: 'i-i-s-ready2use-optimize-e/:id' });
  this.route('i-i-s-ready2use-optimize-e.new',
  { path: 'i-i-s-ready2use-optimize-e/new' });
  this.route('i-i-s-ready2use-upload-file-l');
  this.route('i-i-s-ready2use-upload-file-e',
  { path: 'i-i-s-ready2use-upload-file-e/:id' });
  this.route('i-i-s-ready2use-upload-file-e.new',
  { path: 'i-i-s-ready2use-upload-file-e/new' });
  this.route('i-i-s-ready2use-value-of-size-l');
  this.route('i-i-s-ready2use-value-of-size-e',
  { path: 'i-i-s-ready2use-value-of-size-e/:id' });
  this.route('i-i-s-ready2use-value-of-size-e.new',
  { path: 'i-i-s-ready2use-value-of-size-e/new' });
});

export default Router;
