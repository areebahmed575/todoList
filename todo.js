import inquirer from "inquirer";
let todo = [];
let loop = true;
while (loop) {
    const answer = await inquirer.prompt([
        {
            type: "input",
            name: "Todos",
            message: "Do you want to add todos"
        },
        {
            type: "confirm",
            name: "addMore",
            message: "Do you want to add more todos",
            default: false
        },
        {
            type: "cofirm",
            name: "removeTodo",
            message: "Do you want to remove todos",
            default: false
        }
    ]);
    loop = answer.addMore;
    if (answer.Todos) {
        console.log(answer);
        todo.push(answer.Todos);
    }
    else {
        console.log("Kindly add invalid input");
    }
    if (answer.removeTodo) {
        if (todo.length > 0) {
            console.log("Current todos:");
            todo.forEach((Todos, index) => {
                console.log(`${index + 1}. ${Todos}`);
            });
            const removeIndex = await inquirer.prompt([
                {
                    type: "input",
                    name: "index",
                    message: "Enter the index of the todo you want to remove",
                }
            ]);
            todo.splice(removeIndex - 1, 1);
            console.log("Todo removed successfully");
            //console.log(todo)
        }
        else {
            console.log("No todos found to remove");
        }
    }
}
if (todo.length > 0) {
    console.log("your todo list:");
    todo.forEach(Todos => {
        console.log(Todos);
    });
}
else {
    console.log("No todos found");
}
