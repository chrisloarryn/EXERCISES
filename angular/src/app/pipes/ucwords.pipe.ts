import {Pipe, PipeTransform} from "@angular/core";
// set uppercase to the first letter of words
@Pipe({
    name: "ucwords"
})
export class pipeUcwords implements PipeTransform {
    transform(value: string): string {
        if (!value) {
            return "";
        }
        if (value) {
            const f = value
                .toString()
                .slice(0, 1)
                .toUpperCase();
            const s = value.toString().slice(1, undefined);
            value = f + s;
        }
        return value;
    }
}
