

students = [
  { id: 1, name: "Ahmad", specialist: "Computer Science", year: "1st Year", date: "2024/05/01", supervisor: "Name" },
  { id: 2, name: "Ali", specialist: "Computer Science", year: "2nd Year", date: "2024/05/01", supervisor: "Name" },
  { id: 3, name: "Aseel", specialist: "Computer Science", year: "3rd Year", date: "2024/05/01", supervisor: "Name" },
  { id: 4, name: "Yamen", specialist: "Computer Science", year: "4th Year", date: "2024/05/01", supervisor: "Name" },
  { id: 5, name: "Salma", specialist: "Computer Science", year: "5th Year", date: "2024/05/01", supervisor: "Name" },
  { id: 6, name: "Maryam", specialist: "Computer Science", year: "1st Year", date: "2024/05/01", supervisor: "Name" },
  { id: 7, name: "Manar", specialist: "Computer Science", year: "2nd Year", date: "2024/07/01", supervisor: "Name" },
  { id: 8, name: "Yara", specialist: "Computer Science", year: "3rd Year", date: "2024/06/01", supervisor: "Name" },
  { id: 9, name: "Malak", specialist: "Computer Science", year: "5th Year", date: "2024/08/01", supervisor: "Name" },
  { id: 10, name: "Lara", specialist: "Computer Science", year: "4th Year", date: "2024/09/01", supervisor: "Name" },
]

const page_size = 4
const last_page = Math.ceil(students.length / page_size)
var current_page = 1


const init_table = () => {
  fill_table()
  init_pagination()
}

const next_page = () => { set_current_page(current_page + 1) }
const prev_page = () => { set_current_page(current_page - 1) }
const goto_page = (i) => { set_current_page(i) }
const set_current_page = (n) => {

  if (n < 1 || n > last_page) {
  } else {
    current_page = n;
    init_table()
  }

}



const init_pagination = () => {
  const bar = document.getElementById("pagination_bar")
  bar.innerHTML = `<li class="page-item"><a class="page-link" href="#" onClick="next_page()">Next</a></li>`
  for (var i = last_page; i > 0; i -= 1) {
    console.log(current_page, i);

    bar.innerHTML += `<li class="page-item">` +
      `<a style="background: ${current_page == i ? "#125478" : ""}; color:${current_page == i ? "#fff" : ""}"` +
      `class="page-link" href="#" onClick="goto_page('${i}')">` +
      `${i}` +
      `</a>` +
      `</li>`
  }
  bar.innerHTML += `<li class="page-item" onClick="prev_page()"><a class="page-link" href="#">Previous</a></li>`
}
const fill_table = () => {
  const table = document.getElementById("student_table")
  table.innerHTML = "<thead><tr><th>ID</th><th>Name</th><th>Specialist</th><th>Year</th><th>Date</th><th>Supervisor</th></tr></thead>"
  table.innerHTML += "<tbody>"


  students.filter((s, i) => i >= page_size * (current_page - 1) && i < page_size * current_page)
    .map(s => table.innerHTML +=
      "<tr>" +
      `<td>${s.id}</td>` +
      `<td>${s.name}</td>` +
      `<td>${s.specialist}</td>` +
      `<td>${s.year}</td>` +
      `<td>${s.date}</td>` +
      `<td>${s.supervisor}</td>` +
      "</tr>")

  table.innerHTML += "</tbody>"

}