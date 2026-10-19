/* Налаштування платформи Robot School Academy.
   MODE: 'beta'  — усе зберігається лише в цьому браузері, нікуди не надсилається (для тестування без хостингу);
         'prod'  — реєстрація та успішність надсилаються в Google Таблицю через Google Apps Script.
   API_URL: адреса веб-застосунку Apps Script (закінчується на /exec). Див. README.txt, розділ «Підключення Google Таблиці». */
window.RS_CONFIG = {
  MODE: 'beta',
  API_URL: '',
  PASS_PERCENT: 80,
  BRANCHES: ['Полтава', 'Онлайн', 'Кременчук', 'Київ — виїзні заняття'],
  CONTACT: 'Методичний відділ Robot School · +38 (068) 463-66-67 · robotschoolua@gmail.com',
  VERSION: '1.0 · 19.10.2026'
};
