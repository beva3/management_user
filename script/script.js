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
let table_body = document.querySelector('.table-body')
let searchInput = document.querySelector('#searchInput')
class manage{
    constructor(d){
        this.data = d;
    }
    getRow(i,d_row){
      return `
        <tr>
          <th scope="row">${i}</th>
            <td>${d_row.name}</td>
               <td>${d_row.email}</td>
            <td>${d_row.role}</td>
          <td>${d_row.date_joined}</td>
        </tr>
      `
    }
    display(){
        console.log('--------------------------------');
        
        console.log("display data...");
        let index = 1;
        this.data.forEach((elt) => {
          table_body.innerHTML += this.getRow(index,elt);
          index++;  // increment index for next row
        });
        console.log('--------------------------------');
    } 
    sort(by_item){
        console.log(`sorting data... by ${by_item}`);
    }
    search(){
        console.log(`searching data... `);
        searchInput.addEventListener('input', (e) => {
          table_body.innerHTML = ""
          const findName = searchInput.value.toLowerCase();
          let found = this.data.filter(item => item.name.toLowerCase().includes(findName));
  
          if(found.length >0){
            console.log("ok");
            found.forEach((elt) => {
              table_body.innerHTML += this.getRow(table_body.children.length,elt);
            });
            
            
          }else{
            console.log("error query not found");
            table_body.innerHTML = "<tr><td colspan='5'style=\"color:red;\">No results found.</td></tr>";
          }
          
      });
    }
    run(){
      this.display();
      this.sort('date_joined');
      this.search();  
    }
}

const mng = new manage(data);
mng.run();


