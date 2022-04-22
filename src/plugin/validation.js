import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure,
} from 'vee-validate';
import { required, min, max } from '@vee-validate/rules';

export default {
  install(app) {
    app.component('VeeForm', VeeForm);
    app.component('VeeField', VeeField);
    app.component('ErrorMessage', ErrorMessage);

    defineRule('required', required);
    defineRule('min', min);
    defineRule('max', max);
    defineRule('tos', required)

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `${ctx.field} is required.`,
          min: `${ctx.field} is too short.`,
          max: `${ctx.field} is too long.`,
          alpha_spaces: `${ctx.field} may only contain alphabetic characters and spaces.`,
          email: `Not a valid email.`,
          min_value: `${ctx.field} is too low.`,
          max_value: `${ctx.field} is too high.`,
          password: 'test',
          tos: 'You must accept the Terms of Service'
        };

        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `The field ${ctx.field} is invalid.`;

        return message;
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    });
  },
};
