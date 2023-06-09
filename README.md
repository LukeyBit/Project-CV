# Project CV

This repository contains a full-stack web application built with Next.js, Express.js, and MongoDB using TypeScript.

## Front-end

This repository contains a Next.js 13 app, which is a powerful React framework for building modern web applications. It combines the simplicity of React with server-side rendering, automatic code splitting, and optimized performance. The Next.js app is located in the client directory. As the app is built using Next.js 13 and is meant to be a example for other developers, the routing is done using the, now recommended, app router. Unit tests are implemented using Jest.

### Pages

- **Home**: The home page serves as the landing page for the website, providing an introduction and overview of your personal brand or the purpose of the website.

- **Resume**: The resume page showcases your professional experience, skills, education, and any other relevant information to highlight your qualifications.

- **Portfolio**: The portfolio page displays a collection of your work, such as projects, case studies, or creative endeavors. It provides visitors with an opportunity to explore and learn more about your previous achievements.

- **Contact**: The contact page allows visitors to reach out to you. It typically includes a contact form where users can submit inquiries, messages, or requests. The submitted contact form messages are stored in a MongoDB database by the back-end server and can be sent to an email address through the specified SMTP server in the .env file in the server.

Feel free to customize and expand these pages to suit your specific needs. Each page can be further enhanced with additional components, styling, and functionality to create a personalized and engaging user experience.

### Performance

The website benchmarking tool [Unlighthouse](https://unlighthouse.dev/), is used to benchmark the performance, accessibility, SEO (Search Engine Optimization) and comformity to best practices of a website. The tool is a open source project and is used to run a Lighthouse report for each page/route of the target website, collect and display the results through a very user friendly and intuitive GUI through a browser.

[![Unlighthouse](https://img.shields.io/badge/Learn%20more-Unlighthouse-black?logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgY2xhc3M9Imljb25pZnkgaWNvbmlmeS0tdHdlbW9qaSIgcm9sZT0iaW1nIiBhcmlhLWhpZGRlbj0idHJ1ZSI+CgogPGc+CiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogIDxnIGlkPSJzdmdfOSI+CiAgIDxwYXRoIGlkPSJzdmdfMSIgZD0ibTMxLjQ5NzQ5LDM3LjM0NjA1YTEsMSAwIDEgMSAtMiwwbDAsLTI1YTEsMSAwIDAgMSAyLDBsMCwyNXoiIGZpbGw9IndoaXRlIi8+CiAgIDxwYXRoIGlkPSJzdmdfMiIgZD0ibTE0LjQ5NzQ5LDM1LjM0NjA1bDMxLDBsMCw4bC0yMiwwYy02LDAgLTksLTggLTksLTh6IiBmaWxsPSJ3aGl0ZSIvPgogICA8cGF0aCBpZD0ic3ZnXzQiIGQ9Im0xNi40OTc0OSwzMy4zNDYwNXMyLC01IDUsLTlzOCwtOCA4LC04cy0xLDExIC0xLDE2bDAsMXMtMywtMSAtNiwtMXMtNiwxIC02LDF6IiBmaWxsPSJ3aGl0ZSIvPgogICA8cGF0aCBpZD0ic3ZnXzUiIGQ9Im0zMS40OTc0OSwxMy4zNDYwNXM2LDYgOSwxMWMyLjc3MSw0LjYxOCA0LDkgNCw5cy0zLC0xIC02LC0xcy02LDEgLTYsMWwwLC0xYzAsLTkgLTEsLTE5IC0xLC0xOXoiIGZpbGw9IndoaXRlIi8+CiAgIDxwYXRoIGlkPSJzdmdfNiIgZD0ibTEzLjQ5NzQ5LDM1LjM0NjA1YTEsMSAwIDEgMCAwLDJsMzMsMGwwLC0ybC0zMywweiIgZmlsbD0id2hpdGUiLz4KICA8L2c+CiAgPHBhdGggc3Ryb2tlPSJudWxsIiBpZD0ic3ZnXzE0IiBkPSJtMi44NjE2MywyOS45OTk2N2wwLDBjMCwtMTQuOTg4MTEgMTIuMTUwMjcsLTI3LjEzODM4IDI3LjEzODM3LC0yNy4xMzgzOGwwLDBjNy4xOTc1NCwwIDE0LjEwMDMsMi44NTkyMSAxOS4xODk3Miw3Ljk0ODY1YzUuMDg5NDMsNS4wODk0MyA3Ljk0ODY1LDExLjk5MjE4IDcuOTQ4NjUsMTkuMTg5NzNsMCwwYzAsMTQuOTg4MTEgLTEyLjE1MDI2LDI3LjEzODM4IC0yNy4xMzgzNywyNy4xMzgzOGwwLDBjLTE0Ljk4ODEsMCAtMjcuMTM4MzcsLTEyLjE1MDI3IC0yNy4xMzgzNywtMjcuMTM4Mzh6bTQuMDgxNSwwLjAyMjYybDAuMDE0NjgsMC4zMTQ0OGMwLDMuNzQ3MDMgMi4yODY1NSwxMC45ODkyOCA2LjkxNjM5LDE1LjkwMDZjNC42Mjk4NSw0LjkxMTMxIDEyLjY1ODc2LDcuMzk1MDggMTYuNjA2NzksNy4zMjgwOGMzLjk0ODAzLC0wLjA2NyAxMS43MjI5OSwtMi4xODg1NSAxNi41MDA4OSwtNi43MDQxNGM0Ljc3NzkxLC00LjUxNTU4IDYuNTU4NzYsLTExLjQyNTIyIDYuNTU4NzYsLTE1LjE3MjI1YzAsLTMuNzQ3MDMgLTEuMTM3NDYsLTExLjU2MDg4IC02LjAyNTc0LC0xNi45NjM5NWMtNC44ODgyOCwtNS40MDMwNiAtMTMuNjUwNDEsLTguNTMyMzUgLTE3LjM5NzQzLC04LjUzMjM1bC0wLjQzODEyLC0wLjAyMzMyYy0zLjc0NzAyLDAgLTEyLjY0NzU1LDMuNTY4MDggLTE3LjEyNzI0LDguNjA4OTJjLTQuNDc5NjksNS4wNDA4NCAtNS42MDg5OCwxMS40OTY5MSAtNS42MDg5OCwxNS4yNDM5M3oiIGZpbGw9IndoaXRlIi8+CiA8L2c+Cjwvc3ZnPgo=)](https://unlighthouse.dev/)

## Design

The design for this project was created using Figma. You can find the complete set of page designs in our Figma project:

[![Figma](https://img.shields.io/badge/View%20Designs-Figma-F24E1E?logo=figma&logoColor=white)](https://www.figma.com/file/onmg9Kh2y0rD6DNVDvLk0V/Project-CV?type=design&node-id=2%3A125&t=jbjvLg5TtYPx9qu8-1)

Feel free to explore the designs, inspect individual components, and get a visual representation of how the project looks and feels.

If you have any suggestions or feedback regarding the designs, please don't hesitate to let us know!

## Back-end

The backend server of this project is built with Node.js and Express.js, providing the necessary APIs and functionality to handle form submissions from the contact page.

### Functionality

- **Contact Form Submission**: When a user submits the contact form, the backend server processes the form data and uses Nodemailer to send the submission to the email specified by the `IN_EMAIL` environment variable in the `.env` file. This ensures that you receive the messages directly in your email inbox.

- **Submission Storage**: In addition to sending the submissions via email, the backend server also stores the form submissions in a MongoDB database. The database is located in the `/data/db/` directory, and each submission is stored as a document in the database collection.

- **Rate Limiting**: To prevent abuse or spamming, the backend server utilizes `express-rate-limiter` to implement rate limiting functionality. This limits the number of form submissions that can be made from a single IP address within a specified time frame, helping to protect the server and ensure fair usage.

## Code overview

![Visualization of this repo](./.github/images/diagram.svg)

## Getting Started

To get started, follow these steps:

1. Clone the repository to your local machine: `git clone https://github.com/LukeyBit/Project-CV.git`

2. Install dependencies for both the client and server:

* For the client: `cd client && npm install`
* For the server: `cd server && npm install`

3. Set the environment variables:

* In the server directory, copy the contents from the .env.example file into a new file called .env and set the following values:

- PORT: The port the server will run on
- MONGO_URL: The url of the mongo database
- SMTP_HOST: The IP address of the SMTP server
- SMTP_PORT: The port of the SMTP server
- OUT_EMAIL: The email address to send emails from
- IN_EMAIL: The email address to send emails to
- PASSWORD: The password of the email address to send emails from

4. Create a MongoDB database by running the following command in the server directory 
```bash
mongod --dbpath ./data/db
```
This requires [MongoDB Community Server](https://www.mongodb.com/try/download/community) to be installed

5. Start the development server:

* For the client: cd client && npm run dev
* For the server: cd server && npm run dev

6. Open http://localhost:3000 in your browser to see the app.

## Contributing

We welcome contributions from everyone! Before getting started, please read our [Code of Conduct](./CODE_OF_CONDUCT.md) and [Contribution](.github/CONTRIBUTING.md) guidelines.

## License
This project is licensed under the [MIT License](./LICENSE).

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

## Contact

If you wish to contact me, the creator of the repository, you can do so through Reddit at [u/LukeyBit](https://www.reddit.com/user/LukeyBit).

[![Reddit user LukeyBit](https://img.shields.io/badge/Follow%20me-Reddit-red?logo=reddit&logoColor=white)](https://www.reddit.com/user/LukeyBit)

