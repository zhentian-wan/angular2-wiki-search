
import {Validator, NG_VALIDATORS, FormControl} from "@angular/forms";
import {validateDuration} from "./validateDuration";
import {Directive, forwardRef} from "@angular/core";

export const MIN_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  multi: true,
  useExisting: forwardRef(() => DurationValidator)
};

// target and duration with ngModel
@Directive({
  selector: '[duration][ngModel]',
  providers: [MIN_LENGTH_VALIDATOR]
})
export class DurationValidator implements Validator {
  validate(c: FormControl): {[key: string]:any} {
    return validateDuration(c);
  }
}
