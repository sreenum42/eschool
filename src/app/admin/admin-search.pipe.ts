import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adminSearch'
})
export class AdminSearchPipe implements PipeTransform {

  transform(items: any[], searchText: string, category: string): any {
    console.log(items);
    console.log(searchText);
    console.log(category);
    switch (category) {
      case 'student':
        if (searchText != '') {
          return items.filter(it => {
            return it.FirstName.toLowerCase().includes(searchText)
              || it.LastName.toLowerCase().includes(searchText)
          })
        }
        else {
          return items;
        }
      case 'teacher':
        if (searchText != '') {
          return items.filter(it => {
            return it.teacherFirstName.toLowerCase().includes(searchText)
              || it.teacherLastName.toLowerCase().includes(searchText)
              || it.teacherEmail.toLowerCase().includes(searchText)
          })
        }
        else {
          return items;
        }
      default:
        return items;
    }
  }
}

