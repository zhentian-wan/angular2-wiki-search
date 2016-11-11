import {FormControl} from "@angular/forms";
export const valideUrl = (ctrl: FormControl) => {
  let valid = false;
  valid = /^(ftp|https|http)+$/gi.test(ctrl.value);
  return valid ? null : {
    url: {
      valid: false,
      message: 'Not a valid url'
    }
  };
}
