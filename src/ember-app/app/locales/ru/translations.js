import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISReady2useDownloadFileLForm from './forms/i-i-s-ready2use-download-file-l';
import IISReady2useExecutionLForm from './forms/i-i-s-ready2use-execution-l';
import IISReady2useMethodLForm from './forms/i-i-s-ready2use-method-l';
import IISReady2useNoNOptFileLForm from './forms/i-i-s-ready2use-no-n-opt-file-l';
import IISReady2useOptFilesLForm from './forms/i-i-s-ready2use-opt-files-l';
import IISReady2useOptimizeLForm from './forms/i-i-s-ready2use-optimize-l';
import IISReady2useUploadFileLForm from './forms/i-i-s-ready2use-upload-file-l';
import IISReady2useValueOfSizeLForm from './forms/i-i-s-ready2use-value-of-size-l';
import IISReady2useDownloadFileEForm from './forms/i-i-s-ready2use-download-file-e';
import IISReady2useExecutionEForm from './forms/i-i-s-ready2use-execution-e';
import IISReady2useMethodEForm from './forms/i-i-s-ready2use-method-e';
import IISReady2useNoNOptFileEForm from './forms/i-i-s-ready2use-no-n-opt-file-e';
import IISReady2useOptFilesEForm from './forms/i-i-s-ready2use-opt-files-e';
import IISReady2useOptimizeEForm from './forms/i-i-s-ready2use-optimize-e';
import IISReady2useUploadFileEForm from './forms/i-i-s-ready2use-upload-file-e';
import IISReady2useValueOfSizeEForm from './forms/i-i-s-ready2use-value-of-size-e';
import IISReady2useDownloadFileModel from './models/i-i-s-ready2use-download-file';
import IISReady2useExecutionModel from './models/i-i-s-ready2use-execution';
import IISReady2useMethodModel from './models/i-i-s-ready2use-method';
import IISReady2useNoNOptFileModel from './models/i-i-s-ready2use-no-n-opt-file';
import IISReady2useOptFilesModel from './models/i-i-s-ready2use-opt-files';
import IISReady2useOptimizeModel from './models/i-i-s-ready2use-optimize';
import IISReady2useUploadFileModel from './models/i-i-s-ready2use-upload-file';
import IISReady2useValueOfSizeModel from './models/i-i-s-ready2use-value-of-size';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-ready2use-download-file': IISReady2useDownloadFileModel,
    'i-i-s-ready2use-execution': IISReady2useExecutionModel,
    'i-i-s-ready2use-method': IISReady2useMethodModel,
    'i-i-s-ready2use-no-n-opt-file': IISReady2useNoNOptFileModel,
    'i-i-s-ready2use-opt-files': IISReady2useOptFilesModel,
    'i-i-s-ready2use-optimize': IISReady2useOptimizeModel,
    'i-i-s-ready2use-upload-file': IISReady2useUploadFileModel,
    'i-i-s-ready2use-value-of-size': IISReady2useValueOfSizeModel
  },

  'application-name': 'Ready2use',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Ready2use',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Ready2use',
          title: 'Ready2use'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        ready2use: {
          caption: 'Ready2use',
          title: 'Ready2use',
          'i-i-s-ready2use-method-l': {
            caption: 'Method',
            title: ''
          },
          'i-i-s-ready2use-download-file-l': {
            caption: 'Download file',
            title: ''
          },
          'i-i-s-ready2use-execution-l': {
            caption: 'Execution',
            title: ''
          },
          'i-i-s-ready2use-opt-files-l': {
            caption: 'Opt files',
            title: ''
          },
          'i-i-s-ready2use-upload-file-l': {
            caption: 'Upload file',
            title: ''
          },
          'i-i-s-ready2use-value-of-size-l': {
            caption: 'Value of size',
            title: ''
          },
          'i-i-s-ready2use-no-n-opt-file-l': {
            caption: 'No n opt file',
            title: ''
          },
          'i-i-s-ready2use-optimize-l': {
            caption: 'Optimize',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-ready2use-download-file-l': IISReady2useDownloadFileLForm,
    'i-i-s-ready2use-execution-l': IISReady2useExecutionLForm,
    'i-i-s-ready2use-method-l': IISReady2useMethodLForm,
    'i-i-s-ready2use-no-n-opt-file-l': IISReady2useNoNOptFileLForm,
    'i-i-s-ready2use-opt-files-l': IISReady2useOptFilesLForm,
    'i-i-s-ready2use-optimize-l': IISReady2useOptimizeLForm,
    'i-i-s-ready2use-upload-file-l': IISReady2useUploadFileLForm,
    'i-i-s-ready2use-value-of-size-l': IISReady2useValueOfSizeLForm,
    'i-i-s-ready2use-download-file-e': IISReady2useDownloadFileEForm,
    'i-i-s-ready2use-execution-e': IISReady2useExecutionEForm,
    'i-i-s-ready2use-method-e': IISReady2useMethodEForm,
    'i-i-s-ready2use-no-n-opt-file-e': IISReady2useNoNOptFileEForm,
    'i-i-s-ready2use-opt-files-e': IISReady2useOptFilesEForm,
    'i-i-s-ready2use-optimize-e': IISReady2useOptimizeEForm,
    'i-i-s-ready2use-upload-file-e': IISReady2useUploadFileEForm,
    'i-i-s-ready2use-value-of-size-e': IISReady2useValueOfSizeEForm
  },

});

export default translations;
