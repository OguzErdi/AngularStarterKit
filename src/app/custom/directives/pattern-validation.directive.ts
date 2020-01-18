import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appPatternsValidation]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PatternValidationDirective, multi: true }]
})
export class PatternValidationDirective {
  @Input('appPatternsValidation') patterns: any;

  validate(control: AbstractControl): { [key: string]: any } | null {
    return this.patterns ? this.patternValidator(this.patterns)(control) : null;
  }

  patternValidator(patterns: any): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const errorMessage = this.testPatterns(patterns, control);

      return errorMessage ? { patternsValidation: errorMessage } : null;
    };
  }

  testPatterns(patterns: any, control: AbstractControl) {
    for (let index = 0; index < patterns.length; index++) {
      var pattern = patterns[index];

      var isValid = this.testRegEx(pattern.regex, control.value);

      if (!isValid) {
        return { errorMessage: pattern.errorMessage };
      }
    }

    return false;
  }

  testRegEx(regexStr: any, value: string): boolean {
    let regex = new RegExp(regexStr);
    return regex.test(value);
  }
}
