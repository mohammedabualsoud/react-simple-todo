
export const addTodoCommand = (text) => {

    return new Promise((resolve, reject) => {
        getTodosCommand().then((todos) => {
            if (todos && todos.constructor === Array) {
                const todo = {id: getlastId(), text, status: 'active'}
                todos.push(todo)
                updateTodosCommand(todos)
                    .then(() => {
                        resolve(todo)
                        generateId()
                    }).catch((e) => {
                        decrementId()
                        reject('unable to add this todo', todo)
                    })
            }
        })
    })
}

export const updateTodoCommand = (id, key, value) => {
    return new Promise((resolve, reject) => {
        getTodosCommand()
            .then((todos) => {
                let found = false
                for (let i = 0; i < todos.length; i++) {
                    if (todos[i].id === id) {
                        found = true
                        todos[i][key] = value
                        updateTodosCommand(todos)
                            .then(() => {
                                resolve(todos[i])
                            })

                    }
                }
                if (!found) {
                    reject('todo with id' + id  + ' doesn"t exists')
                }
            })
    })
}


export const removeTodoCommand = (id) => {
    return new Promise((resolve, reject) => {
        getTodosCommand()
            .then((todos) => {
                updateTodosCommand(todos.filter((todo) => todo.id !== id))
                    .then(() => {
                        resolve(id)
                    }).catch((e) => {
                        reject(`not able to delete todo item with it ${id}`)
                })
            })
    })
}

export const getTodosCommand = () => {
    return new Promise((resolve, reject) => {
        const todos = localStorage.getItem('todos')
        if (todos === null) {
            resolve([])
        } else {
            resolve(JSON.parse(todos))
        }
    })
}

export const updateTodosCommand = (todos) => {
    return new Promise((resolve, reject) => {
        try {
            localStorage.setItem('todos', JSON.stringify(todos))
            resolve(todos)
        } catch (e) {
            reject(e)
        }
    })
}

// return last generated todo id.
const getlastId = () => {
    let lastId = localStorage.getItem('latestTodoId')
    if (lastId === null) {
        lastId = 0;
    }
    return parseInt(lastId)
}
 // generate new todo id by incrementing it by 1.
const generateId = () => {
    const lastId = getlastId() + 1
    localStorage.setItem('latestTodoId', lastId)
    return lastId;
}

const decrementId = () => {
    let lastId = getlastId() || 1 // or part for first addition.
    localStorage.setItem('latestTodoId', lastId - 1)
}