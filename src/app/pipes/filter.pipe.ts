import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string) {
    if (value.length == 0 || filterString=='') {
      return value
    }
    const users = [];
    for(const user of value){
      console.log(user+"From Pipe");
      if(user.title.includes(filterString)){
        users.push(user)
      }
    }
    return users;
  }
}
