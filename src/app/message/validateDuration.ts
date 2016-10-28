import {FormControl} from "@angular/forms";

export function validateDuration(ctrl:FormControl){

  const numValue = parseInt(ctrl.value);
  const valid = numValue < 10;

  return valid ? null : {
    validateDuration: {
      valid: false,
      message: "Duration should less than 10"
    }
  }
}
