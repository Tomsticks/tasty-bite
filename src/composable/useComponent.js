import { Dialog, Notify } from 'quasar';

export function ShowSnack(message, type) {
  Notify.create({
    message: message,
    type: type,
  });
}
