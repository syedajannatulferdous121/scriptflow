// Define interfaces for tasks and users
interface Task {
  id: string;
  title: string;
  description: string;
  assignee: string;
  dueDate: Date;
  status: string;
}

interface User {
  id: string;
  name: string;
  email: string;
}

// Define the CodePlanner class
class CodePlanner {
  private tasks: Task[];
  private users: User[];

  constructor() {
    this.tasks = [];
    this.users = [];
  }

  // Method to create a new task
  createTask(): void {
    const id = prompt("Task ID:");
    const title = prompt("Task Title:");
    const description = prompt("Task Description:");
    const dueDate = new Date(prompt("Task Due Date (YYYY-MM-DD):"));
    const status = prompt("Task Status:");

    const task: Task = {
      id,
      title,
      description,
      assignee: "",
      dueDate,
      status,
    };

    this.tasks.push(task);
  }

  // Method to assign a task to a user
  assignTask(): void {
    const taskId = prompt("Task ID:");
    const assigneeId = prompt("User ID:");

    const task = this.tasks.find((t) => t.id === taskId);
    const user = this.users.find((u) => u.id === assigneeId);

    if (task && user) {
      task.assignee = user.name;
    }
  }

  // Method to update the status of a task
  updateTaskStatus(): void {
    const taskId = prompt("Task ID:");
    const status = prompt("New Task Status:");

    const task = this.tasks.find((t) => t.id === taskId);

    if (task) {
      task.status = status;
    }
  }

  // Method to get all tasks
  getAllTasks(): Task[] {
    return this.tasks;
  }

  // Method to add a new user
  addUser(): void {
    const id = prompt("User ID:");
    const name = prompt("User Name:");
    const email = prompt("User Email:");

    const user: User = {
      id,
      name,
      email,
    };

    this.users.push(user);
  }

  // Method to get all users
  getAllUsers(): User[] {
    return this.users;
  }
}

// Create an instance of CodePlanner
const codePlanner = new CodePlanner();

// Usage example:

// Add users
codePlanner.addUser();
codePlanner.addUser();

// Create tasks
codePlanner.createTask();
codePlanner.createTask();

// Assign tasks to users
codePlanner.assignTask();
codePlanner.assignTask();

// Update task status
codePlanner.updateTaskStatus();

// Get all tasks
const allTasks = codePlanner.getAllTasks();
console.log("All Tasks:", allTasks);

// Get all users
const allUsers = codePlanner.getAllUsers();
console.log("All Users:", allUsers);
