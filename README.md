**README Fetcher 🚀**

This project is a simple, client-side web application that empowers users to effortlessly fetch and display the README.md file from any specified public GitHub repository.

**Table of Contents**

1)Features

2)How It Works

3)Files

4)Setup

5)Usage

6)Styling

**Features ✨**

**Fetch READMEs:** Seamlessly retrieve the README.md content from any public GitHub repository by simply providing the username and repository name.

**User-Friendly Interface:** A clean and straightforward form designed for intuitive input of GitHub credentials.

**Dynamic Content Display:** Displays the fetched README content in a clearly formatted, scrollable block, preserving its original structure.

**How It Works ⚙️**

The application leverages a combination of HTML for structure and JavaScript for dynamic functionality:

1)**User Input:** The user provides a GitHub username and a repository name into the dedicated input fields on the webpage.

2)**API Request Construction:** Upon clicking the "Fetch README" button, the JavaScript code dynamically constructs a GitHub API URL targeting the README.md file within the specified repository.

Example URL Structure: 

          https://api.github.com/repos/{username}/{repository}/contents/README.md

3)**Data Fetching:** An asynchronous fetch request is then made to this constructed GitHub API endpoint.

4)**Content Decoding:** The API response contains the README.md file's content encoded in Base64. The JavaScript decodes this Base64 string back into readable text.

5)**Display:** Finally, the decoded Markdown content is injected into a preformatted HTML element (<pre>) on the web page for clear display.

**Files 📂**

  index.html: The core HTML file that defines the application's layout, including the input form, the "Fetch README" button, and the area where the README content will be displayed. It also contains inline CSS for basic styling.
  
  one.js: The JavaScript file responsible for all the dynamic behavior. This includes:
  
Handling user input from the form.

Making the fetch request to the GitHub API.

Decoding the Base64 encoded content.

Updating the DOM to display the fetched README.

**Setup 🚀**

To get this application up and running on your local machine:

  1)**Download Files:** Ensure both index.html and one.js are saved in the same directory.

  2)**Open in Browser:** Simply open the index.html file using your preferred web browser. No web server is required for this client-side application.

**Usage 💡**

Follow these steps to fetch a README:

  1)**Launch the App:** Open index.html in your web browser.

  2)**Enter Username:** In the field labeled "ENTER USER NAME:", type the GitHub username of the repository owner (e.g., octocat).

  3)**Enter Repository Name:** In the field labeled "ENTER REPOSITORY NAME:", type the exact name of the GitHub repository (e.g., Spoon-Knife).
  
  4)**Fetch:** Click the "Fetch README" button.
  
  5)**View Content:** The README.md content from the specified repository will then appear in the black display area below the form.

**Styling 🎨**

The index.html file incorporates inline CSS to provide a clean and functional aesthetic:

Layout: Uses flexbox for centering and organizing elements.

Form: Styled with a clear column layout, padding, rounded corners, and a subtle box-shadow.

Inputs & Button: Standardized padding, rounded borders, and a distinct background color for the "Fetch README" button.

Content Display: The div with id="content" is styled with a black background and white text, making it suitable for displaying code or preformatted text, and includes overflow: auto for scrollability.
