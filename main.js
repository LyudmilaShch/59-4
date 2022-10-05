const todolistId_1 = '1'
const todolistId_2 = '2'

const todolist = [
    {
        id: todolistId_1,
        title: "What to learn",
        filter: "all"
    },
    {
        id: todolistId_2,
        title: "What to buy",
        filter: "all"
    }
]

const tasks = {
    [todolistId_1]: [ // "1"
        {id: '11', title: "HTML", isDone: true},
        {id: '12', title: "CSS", isDone: true},
        {id: '13', title: "JS", isDone: true}
    ],
    [todolistId_2]: [ //"2"
        {id: '21', title: "Wine", isDone: true},
        {id: '22', title: "Cheese", isDone: true},
        {id: '23', title: "Cake", isDone: true}
    ]
}

console.log([...tasks[todolistId_1], {id: 14, title: "Redux", isDone: true}])
console.log(tasks[todolistId_2].find(t => t.id === '21'))
console.log(tasks[todolistId_1][2].title)
console.log(tasks[todolistId_1][2]["title"])
console.log(tasks[todolist[1]["id"]][0].title)
console.log(tasks[todolist[1].id][0].title)
console.log(tasks["2"][0].title)

//C => [...], concat, push
//R => map, filter, sort, find
//U => map
//D => filter

//reduce

const numbers = [1, 2, 3, 4, 5]

console.log(numbers.reduce((acc, el) => acc + el, 0))
//acc = 0, el = 1 => 1
//acc = 1, el = 2 => 3
//acc = 3, el = 3 => 6
//acc = 6, el = 4 => 10
//acc = 10, el = 5 => 15

console.log(numbers.reduce((acc, el) => acc > el ? acc: el)) // => 5

let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 25,
        isMarried: false,
        scores: 100
    }
];

console.log(students.reduce((acc, el) => acc.scores > el.scores ? acc : el))

console.log(students.reduce((acc, el) => {
        const updatedStudent = {...el, scores: el.scores+10}
    acc.push(updatedStudent)
    return acc
}, []))

console.log(students.map((el) => ({...el, scores: el.scores+10})))

console.log(students.reduce((acc, el) => {
   if(el.scores >= 100){
       acc.push(el)
   }
    return acc
}, []))

console.log(students.filter((el) => el.scores>=100))

console.log(students.reduce((acc, el) => {
    acc[el.name] = {...el}
    delete acc[el.name].name
    return acc9
}, {}))