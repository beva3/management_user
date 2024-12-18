const data = [
    {
      "name": "Michael Johnson",
      "email": "michaelj@example.com",
      "role": "Moderator",
      "date_joined": "2024-03-20"
    },
    {
      "name": "Sarah Parker",
      "email": "sarahp@example.com",
      "role": "Administrator",
      "date_joined": "2023-09-14"
    },
    {
      "name": "James Lee",
      "email": "jamesl@example.com",
      "role": "User",
      "date_joined": "2022-06-05"
    },
    {
      "name": "Emily Brown",
      "email": "emilyb@example.com",
      "role": "Moderator",
      "date_joined": "2024-01-15"
    }
]
console.log(data);

class manage{
    constructor(d){
        this.data = d;
    }
    display(){
        console.log("display data...");
    } 
    sort(by_item){
        console.log(`sorting data... by ${by_item}`);
    }
    search(query){
        console.log(`searching data...  ${query}`);   
    }
}

const mng = new manage(data);
mng.display();
mng.sort('name');
mng.search('Johnson');


