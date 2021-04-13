// definicion de los elementos y su prioridad
class QElement {
	constructor(element, priority)
	{
		this.element = element;
		this.priority = priority;
	}
}

//controlador de la cola
class PriorityQueue {
	constructor()
	{
		this.items = [];
	}

// agrega un elemento y lo ordena por prioridad
        enqueue(element, priority)
        {
            // crea el nuevo elemento
            var qElement = new QElement(element, priority);
            var contain = false;

            // recorrer todo el arreglo
            for (var i = 0; i < this.items.length; i++) {
                //encontrar el espacio de prioridad
                if (this.items[i].priority < qElement.priority) {
                    // al encotrar el espacio
                    // agregar
                    this.items.splice(i, 0, qElement);
                    contain = true;
                    break;
                }
            }

            // si no encontro su prioridad en el arreglo, agreguelo de ultimo
            if (!contain) {
                this.items.push(qElement);
            }
        }

        //remover el dato de tipo FIFO
        dequeue()
        {
        //mientras no este vacío
            if (this.isEmpty())
                return "borrado";
            return this.items.shift();
        }

        // retorna la mayor prioridad dada
        front()
        {
           //mientras no este vacío
            if (this.isEmpty())
                return "No elements in Queue";
            return this.items[0];
        }

        // retorna la menor prioridad dada
        rear()
        {
             //mientras no este vacío
            if (this.isEmpty())
                return "No elements in Queue";
            return this.items[this.items.length - 1];
        }

        // retorna si esta vacío o no
        isEmpty()
        {
            // return true if the queue is empty.
            return this.items.length == 0;
        }

        // retorna todo el contenido del arreglo
        printPQueue()
        {
            var str = "";
            for (var i = 0; i < this.items.length; i++)
                str += this.items[i].element + "//" + this.items[i].priority+ "\n" ;
            return str;
        }
}



var priorityQueue = new PriorityQueue();

priorityQueue.enqueue("paciente critico", 1);
priorityQueue.enqueue("gripe", 5);
priorityQueue.enqueue("embarazo", 1);
priorityQueue.enqueue("brazo roto", 2);
priorityQueue.enqueue("dolor de cabeza", 6);
priorityQueue.enqueue("herida por arma", 2);




console.log(priorityQueue.printPQueue());
