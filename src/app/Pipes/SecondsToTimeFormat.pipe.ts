import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'SecondsToTimeFormat'
})
export class SecondsToTimeFormat implements PipeTransform{
    transform(seconds: number):string{
        //3600s => 1h
        var hours = Math.floor(seconds / 3600);
        var minutes = Math.floor(seconds % 3600/ 60);
        return `${hours}hrs ${minutes}mins`


    }
}