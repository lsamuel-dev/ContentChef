# Lee Samuel

## Project Name
- Project 3: ContentChef (Task Management Web App)

### Project Description
- ContentChef is a React-based task management application I built for business owners who need to streamline their social media production. Instead of a standard to-do list, this app lets users "cook" (create) social media posts, track their quality in real-time, and manage them through a full CRUD (Create, Read, Update, Delete) cycle. I focused on using React state to handle navigation and data flow between the kitchen and the library.

## View Online
- [Live Demo Link] (Replace with your GH pages link)
- [GitHub Repository] (Replace with your repo link)

### Functionality
1. **The Kitchen (Task View):** This is the main `/todos` view where I can generate new post drafts and edit them side-by-side with live stats.
2. **CRUD Operations:** I implemented full data management. Users can Create new drafts, Read their library cards, Update text in the editor, and Delete unwanted posts.
3. **Mark as Finished:** I added a toggle for each post so it can be marked as "Finished." This triggers a visual strike-through effect on the card to show it's ready to be posted.
4. **Status Filtering:** I included filter buttons so I can toggle the view between "All" posts, "Finished" posts (Complete), and "Drafts" (Incomplete).
5. **Contact Portal:** A dedicated `/contact` view that uses a controlled-component form to collect user feedback.

### User Stories
1. **As a small business owner**, I want to pick a topic and category so that the app can generate a professional starting draft for me.
   - **Acceptance Criteria:** - Form contains a text input for the topic and a dropdown for the category.
     - Clicking "Generate" triggers the display of a pre-written draft.
2. **As a content creator**, I want to edit my drafts and see live word counts so I can make sure they fit platform limits before I post them.
   - **Acceptance Criteria:**
     - A textarea allows for manual editing of content.
     - A live word count updates on-screen as the user types.
3. **As a manager**, I want to mark tasks as "Finished" and filter my list so I can see exactly what work is still left in the draft stage.
   - **Acceptance Criteria:**
     - Each item has a button to toggle status to "Finished."
     - Completed items receive a visual strike-through effect.
     - Filter buttons (All, Drafts, Finished) correctly sort the list.
4. **As a user**, I want to use a contact form to send messages so I can get help or ask questions about the app.
   - **Acceptance Criteria:**
     - Dedicated view displays fields for First Name, Last Name, Email, and Comments.
     - Form uses controlled components and resets after submission.

### Wireframe Diagrams
- **State 1: The Menu (Input Phase)** - `Assets/wireframe-state-1.png`
- **State 2: The Kitchen (Editor Phase)** - `Assets/wireframe-state-2.png`
- **State 3: The Pantry (Library Phase)** - `Assets/wireframe-state-3.png`
- **State 4: Contact View** - Showing fields for First Name, Last Name, Email, and Comments.

### State Tree
```javascript
App State
├── currentView (string: 'kitchen' | 'contact')
├── posts (array of objects)
│   ├── id (number)
│   ├── topic (string)
│   ├── category (string)
│   ├── content (string)
│   └── isCompleted (boolean: handles the strike-through logic)
└── activePost (object: the post currently being edited)
```

### Component List
- **Container Components:** App, KitchenContainer, ContactContainer, LibraryManager.
- **Presentational Components:** NavBar, DraftForm, DraftEditor, ContentCard, ContactForm, FilterButtons, StatLabel.

### Technologies Used
- **React (v19):** For building the UI and managing state with hooks.
- **Vite:** For the development environment and bundling.
- **JavaScript (ES6+):** For logic, array filtering, and handling form events.
- **HTML5 & CSS3:** For the structure and custom styling (includes over 10 custom rules for the layout and "Finished" status effects).
- **Git & GitHub:** For version control and hosting.

### Installation Instructions
1. **Clone the repository:** `git clone https://github.com/lsamuel-dev/ContentChef.git`
2. **Install dependencies:** `npm install`
3. **Run the development server:** `npm run dev`
4. **View in Browser:** Open `http://localhost:5173`

### Ideas for Future Improvement
1. **LocalStorage:** I want to save the posts to the browser so they don't disappear when the page refreshes.
2. **AI Integration:** Connecting to an API like Gemini to generate actual custom text for the drafts.
3. **Image Suggestions:** Adding a feature that suggests relevant stock images based on the post category.
```