# My Name

- Lee Samuel

## Project Name

- Project 3: ContentChef (Task Management Web App)

### Project Description

- ContentChef is a React-based task management application designed for business owners who need to streamline their social media production. The app allows users to "cook" (create) social media posts, track their quality, and manage them through a full CRUD (Create, Read, Update, Delete) cycle. This project demonstrates state management, controlled components, and conditional rendering.

## View Online

- (use GH pages link here)

### Functionality

1. The Kitchen (Task View) - Create and manage social media "tasks."
2. CRUD Operations - Users can Create new drafts, Read through their library, Update existing text, and Delete unwanted posts.
3. Progress Tracking - Mark posts as "Posted" (Complete) to trigger a visual strike-through effect.
4. Status Filtering - Toggle views between "All," "Posted" (Complete), and "Drafts" (Incomplete).
5. Contact Portal - A dedicated view featuring a controlled-component contact form.

### User Stories

1.  **As a small business owner**, 
I want to input a topic and category,
So that the app can generate a professional draft for me.
2.  **As a content creator**, 
I want to edit my drafts and see live word counts,
So that I ensure they meet platform standards.
3.  **As a manager**, 
I want to filter my posts by "Posted" or "Draft" status,
So that I can see what work is remaining.
4.  **As a potential client**, 
I want to fill out a contact form,
So that I can ask questions about the service.

### Wireframe Diagrams

**State 1: The Menu (Input Phase)** `Assets/wireframe-state-1.png`
**State 2: The Kitchen (Editor Phase)** `Assets/wireframe-state-2.png`
**State 3: The Pantry (Library Phase)** `Assets/wireframe-state-3.png`
**State 4: Contact View** (Displays form fields for First Name, Last Name, Email, and Comments).

### State Tree

``` javascript
App State
├── currentView (string: 'todos' | 'contact')
├── posts (array of objects)
│   ├── id (number)
│   ├── topic (string)
│   ├── content (string)
│   └── isCompleted (boolean)
└── contactForm (object)
    ├── firstName (string)
    ├── lastName (string)
    ├── email (string)
    └── comments (string)
```    
   
### Technologies Used

 - React (v19.2): Core library for UI and state management.
 - Vite: Build tool and local development server.
 - JavaScript (ES6+): Functional logic, array methods, and state hooks.
 - HTML5 & CSS3: Structural markup and custom styling (minimum 10 custom rules).
 - Git & GitHub: Version control and repository management.

### Installation Instructions

1. **Clone the repository:** `git clone https://github.com/lsamuel-dev/ContentChef.git`
2. **Install dependencies:** `npm install`
3. **Run the development server:** `npm run dev`
4. **View in Browser:** Open `http://localhost:5173` 

### Ideas for Future Improvement

1. OpenAI/Gemini API Integration: Automate the "Chef" to generate real AI text based on user topics.
2. Image Integration: Automatically fetch relevant social media images using the Pexels or Unsplash API.
3. Export to Social: Add a feature to download formatted posts for Instagram, LinkedIn, or X.