Milestone 1 - Setup e Routing
Clonare il backend del progetto, impostare il frontend con Vite e configurare il routing con react-router-dom.

Clonare e avviare il backend:

Per gestire i task, utilizzeremo un backend già pronto.

Cloniamo il repository

https://github.com/boolean-it/react-task-manager-back
e avviamo il server con:

npm install
npm run start
Dopo qualche secondo, nel terminale apparirà un messaggio simile a:

✅ Server in ascolto su http://localhost:3001
Questo URL dovrà essere utilizzato per configurare il frontend.

Impostiamo il frontend:

Creiamo il progetto con Vite.
Installiamo react-router-dom nel progetto.
Creiamo il router principale in App.jsx utilizzando BrowserRouter.
Definiamo due pagine principali:

Lista dei Task (TaskList.jsx) → mostrerà l'elenco dei task.
Aggiungi Task (AddTask.jsx) → conterrà il form per aggiungere un nuovo task.
Aggiungere una barra di navigazione con NavLink, per permettere all'utente di spostarsi tra le pagine.

Definire le rotte con Routes e Route, associando ogni percorso alla rispettiva pagina.


 Milestone 2 - Setup Context API e Fetch Iniziale
Creare un contesto globale per la gestione dei dati e recuperare la lista dei task dall'API.

Salvare l'URL dell'API nel file .env del progetto frontend:
Creare un file .env nella cartella del progetto frontend e aggiungere lo URL della API raccolto alla Milestone 1.
In questo modo, l'URL sarà accessibile in tutto il progetto senza doverlo scrivere manualmente nel codice.

Creare un Context API (GlobalContext) per gestire lo stato globale dell'applicazione.

Definire uno useState all'interno del provider, per memorizzare la lista dei task.

Effettuare una richiesta GET a /tasks al caricamento dell'app, utilizzando useEffect, e salvare i dati nello stato.

Stampare in console i dati ricevuti per verificare il corretto recupero delle informazioni.

Rendere disponibile il GlobalContext.Provider in App.jsx, avvolgendo l'intera applicazione.


Milestone 3 - Lista dei Task (Pagina)
Visualizzare l'elenco dei task in una tabella e ottimizzare il rendering con React.memo().

Recuperare la lista dei task dal GlobalContext e mostrarla nella pagina TaskList.jsx.

Strutturare TaskList.jsx come una tabella, con le intestazioni Nome, Stato, Data di Creazione.

Creare un componente TaskRow.jsx, che rappresenta una singola riga della tabella e mostra solo le proprietà title, status e createdAt (escludendo description).

Applicare uno stile differente alla colonna status, assegnando i seguenti colori di sfondo alle celle in base al valore dello stato:
"To do" → rosso
"Doing" → giallo
"Done" → verde

Utilizzare React.memo() su TaskRow.jsx per ottimizzare le prestazioni ed evitare render inutili.


Milestone 4 - Creazione del Custom Hook useTasks() (GET)
Creare un custom hook per centralizzare la gestione dei task e semplificare l'accesso ai dati.

Creare un hook useTasks() che recupera i task iniziali con una richiesta GET a /tasks e li memorizza in uno stato locale (useState).

Definire le funzioni addTask, removeTask, updateTask all'interno di useTasks(), lasciandole vuote per ora.

Rendere disponibili le funzioni e la lista dei task restituendole come valore dell'hook.

Integrare useTasks() nel GlobalContext, in modo che tutti i componenti possano accedere ai task e alle funzioni di gestione.