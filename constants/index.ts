import { Home, Eye, Database, Brush, Rocket, Cog, UploadCloud, ArrowUpCircle, Book } from 'lucide-react';

import { Example } from "@/types";

export const tagList = [
    {
        value: "routes",
        label: "Routes"
    },
    {
        value: "controllers",
        label: "Controllers"
    },
    {
        value: "models",
        label: "Models"
    },
    {
        value: "views",
        label: "Views"
    },
    {
        value: "components",
        label: "Components"
    },
];

export const exampleData: Example[] = [
    {
        title: "Routing Basics",
        date: "2023-07-01",
        author: "Author 1",
        category: "Routing",
        subcategory: "Defining Routes",
        complexity: "easy",
        tags: ["routes", "controllers"],
        summary: "This example demonstrates the basics of setting up routes in a web application.",
        text: "In this example, we will explore how to define routes for a web application. We will also look at how to associate these routes with specific controller actions.",
        code: `const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(\`Example app listening at http://localhost:\${port}\`);
});`
    },
    {
        title: "Model Definition",
        date: "2023-07-02",
        author: "Author 2",
        category: "Optimizing",
        subcategory: "Images",
        complexity: "medium",
        tags: ["models", "views"],
        summary: "This example demonstrates how to define a model in a web application.",
        text: "In this example, we will explore how to define a model for a web application. We will also look at how to use this model to interact with a database.",
        code: `const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;`
    },
    {
        title: "Advanced Component Design",
        date: "2023-07-03",
        author: "Author 3",
        category: "Rendering",
        subcategory: "Static and Dynamic",
        complexity: "hard",
        tags: ["components", "routes"],
        summary: "This example demonstrates advanced techniques for designing components in a web application.",
        text: "In this example, we will explore some advanced techniques for designing components in a web application. We will look at how to create reusable components and how to manage state within components.",
        code: `import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

export default Counter;`
    },
    {
        title: "View Rendering",
        date: "2023-07-04",
        author: "Author 4",
        category: "Rendering",
        subcategory: "Edge and Node.js Runtimes",
        complexity: "medium",
        tags: ["views", "controllers"],
        summary: "This example demonstrates how to render views in a web application.",
        text: "In this example, we will explore how to render views in a web application. We will also look at how to pass data to these views from a controller.",
        code: `const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page', message: 'Welcome to our website!' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});`
    },
    {
        title: "Controller Actions",
        date: "2023-07-05",
        author: "Author 5",
        category: "Routing",
        subcategory: "Pages and Layouts",
        complexity: "hard",
        tags: ["controllers", "routes"],
        summary: "This example demonstrates how to define controller actions in a web application.",
        text: "In this example, we will explore how to define controller actions in a web application. We will also look at how to associate these actions with specific routes.",
        code: `const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('GET request to the homepage');
});

router.post('/', (req, res) => {
    res.send('POST request to the homepage');
});

module.exports = router;`
    },
    {
        title: "Component State Management",
        date: "2023-07-06",
        author: "Author 6",
        category: "Data Fetching",
        subcategory: "Fetching",
        complexity: "medium",
        tags: ["components", "views"],
        summary: "This example demonstrates how to manage state within components in a web application.",
        text: "In this example, we will explore how to manage state within components in a web application. We will look at how to use hooks to manage state and how to pass state between components.",
        code: `import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

export default Counter;`
    },
    {
        title: "Routing with Parameters",
        date: "2023-07-07",
        author: "Author 7",
        category: "Configuring",
        subcategory: "TypeScript",
        complexity: "easy",
        tags: ["routes", "controllers"],
        summary: "This example demonstrates how to define routes with parameters in a web application.",
        text: "In this example, we will explore how to define routes with parameters in a web application. We will also look at how to access these parameters from within a controller action.",
        code: `const express = require('express');
const app = express();

app.get('/users/:userId', (req, res) => {
    res.send(req.params);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});`
    },
    {
        title: "Model Associations",
        date: "2023-07-08",
        author: "Author 8",
        category: "API Reference",
        subcategory: "Components",
        complexity: "hard",
        tags: ["models"],
        summary: "This example demonstrates how to define associations between models in a web application.",
        text: "In this example, we will explore how to define associations between models in a web application. We will look at how to define one-to-many and many-to-many relationships between models.",
        code: `const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    title: String,
    content: String,
    author: { type: Schema.Types.ObjectId, ref: 'User' }
});

const userSchema = new Schema({
    name: String,
    email: String,
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }]
});

const User = mongoose.model('User', userSchema);
const Post = mongoose.model('Post', postSchema);

module.exports = { User, Post };`
    },
    {
        title: "Advanced Routing",
        date: "2023-07-09",
        author: "Author 9",
        category: "Upgrading",
        subcategory: "Codemods",
        complexity: "medium",
        tags: ["routes", "controllers"],
        summary: "This example demonstrates advanced techniques for defining routes in a web application.",
        text: "In this example, we will explore some advanced techniques for defining routes in a web application. We will look at how to define nested routes and how to use middleware to protect certain routes.",
        code: `const express = require('express');
const router = express.Router();

router.get('/users/:userId/posts/:postId', (req, res) => {
    res.send(req.params);
});

const authMiddleware = (req, res, next) => {
    if (!req.user) {
        res.status(401).send('You must be logged in to access this route');
    } else {
        next();
    }
};

router.get('/protected', authMiddleware, (req, res) => {
    res.send('You are authorized to access this route');
});

module.exports = router;`
    },
    {
        title: "Component Lifecycle",
        date: "2023-07-10",
        author: "Author 10",
        category: "Deploying",
        subcategory: "Static Exports",
        complexity: "hard",
        tags: ["components", "views"],
        summary: "This example demonstrates how to work with the component lifecycle in a web application.",
        text: "In this example, we will explore how to work with the component lifecycle in a web application. We will look at how to use lifecycle methods to manage state and side effects within components.",
        code: `import React, { Component } from 'react';

class LifecycleExample extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    componentDidMount() {
        console.log('Component did mount');
    }

    componentDidUpdate() {
        console.log('Component did update');
    }

    componentWillUnmount() {
        console.log('Component will unmount');
    }

    render() {
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click me
                </button>
            </div>
        );
    }
}

export default LifecycleExample;`
    },
];