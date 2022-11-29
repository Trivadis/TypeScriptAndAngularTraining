import { FormControl } from "@angular/forms";

export interface Person {
  name: FormControl<string>;
  email: FormControl<string>;
}
