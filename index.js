import inquirer from "inquirer";
import chalk from "chalk";
// Class representing a student with a name property
class Student {
    name;
    constructor(name) {
        this.name = name;
    }
    ;
}
;
// Class representing a person with a list of students
class Person {
    students = [];
    //Method to add a student to the list
    addStudent(obj) {
        this.students.push(obj);
    }
    ;
}
;
// reating an instance of the Person class
const person = new Person();
// Function to start the program
const start = async (person) => {
    // Welcoming message
    console.log(chalk.bold.magenta.bold("\n  \tWelcome Student!  \n"));
    do {
        // Asking student for marking attendance
        const answer = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "Want to mark attendance or want an exit?",
            choices: ["Mark Attendance", "Attendance Section", "Exit"]
        });
        // if student chooses Mark Attendance
        if (answer.select === "Mark Attendance") {
            console.log(chalk.green(`If you want to Mark your Attendance.`));
            console.log(chalk.green("Go to the Attendance Section"));
        }
        // if user chooses Attendance Section
        if (answer.select == "Attendance Section") {
            // Asking which student to talk to 
            const answer = await inquirer.prompt({
                type: "input",
                name: "student",
                message: "Enter Your Name."
            });
            // Finding the student
            const student = person.students.find((value) => value.name == answer.student);
            // if student not found, Mark it's attendance
            if (!student) {
                const name = new Student(answer.student);
                person.addStudent(name);
                console.log(chalk.yellow(` ${chalk.bold.cyan(name.name)}, You have marked your attendance.`));
                console.log(person.students);
            }
            // if student found, display a message
            if (student) {
                console.log(chalk.yellow(` ${chalk.bold.green(student.name)}, Your attendance is already marked.`));
                console.log(person.students);
            }
            ;
        }
        ;
        // If user chooses Exit
        if (answer.select == "Exit") {
            console.log(chalk.magenta("Good Bye!"));
            process.exit(); // Exit the program
        }
    } while (true);
};
// Run the program
start(person);
