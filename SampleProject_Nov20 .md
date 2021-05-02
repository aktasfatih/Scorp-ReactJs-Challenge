# Sample Project Spec

The purpose of this project is for us to get an idea of your skillset.
You will build a functional sample/dummy website with three pages and one modal.

No backend code is needed. You don't need a mock server, but you can still use one if you would like to. This project solely aims to showcase your understanding of web development basics.

You are only required to support the latest Mobile and Desktop versions of Chrome and/or Safari.

If you have any questions, please contact us.


## Main Goals
- Showcasing understanding of modern web fundamentals:
	- Basic UI/UX
		- Sample project doesn't need to look good. Don't ignore the basics. No need for placeholder images or fancy designs.
	- "Responsive" Design
	- Modern JS Frameworks
	- CSS / CSS Frameworks
- Delivering a fully functional website.

## Tools/Technologies Suggested
- webpack
- npm (with Node.js 10-14 LTS)
- Vue.JS / Angular.JS / React or any other modern framework.
	- No JQuery
- CSS
	- LESS, SASS, SCSS, etc are not needed. If you are faster with a framework, use it.


--------------------

## Task Itself

Build a Single Page Application with the following pages and features.

### Website Wide Features

#### State Management
This feature shows your ability to pass "state" or "updates"/"events" among the components of the web application. Navigating between pages should not reset the site-wide/global state.

Reloading the page can clear the state. Persistence is not required.

You can use a Vue.js event bus or your preferred module/tool for your preferred framework.

What to store:
- Language (See Localization)
- "User Info" (See Login Modal)

#### Localization
- You can use your preferred localization module/tool for the JS framework you use.
- Only 2 languages will be enough. (e.g. tr/en)
- You can set the language to the browser language or use a default one (e.g. "en")
- User should stay on the same page when localization changes.
	- Do not reload the page.
	- All text on the page should update.
		- Some elements may re-render from scratch. Most should only update the text shown.
- Navigating to a new page or going back should not change the language set. (See State Management)

#### Desktop Navigation bar

The navigation bar should be present on all pages. 

- Left side
	- Dummy icon
		- You can use your favourte icon pack.
		- You can also use a harcoded base64 image.
	- Current page name
		- Homepage should use the website name instead (e.g. Sample or Dummy)
- Right side
	- Links/Buttons to other pages.
	- Localization/Locale picker dropdown
	- Login button (only shown if no "User Info")
		- Opens "Login" modal
	- "User Name" button with dropdown or popover element (only shown if "User Info" exists)
		- Element will display email
		- Element will have "Logout" button

Logout button deletes "User Info" from site-wide/global state. (No server interaction needed)
"Login" and "User Name" buttons should update based on site-wide/global state.

#### Mobile Navigation Bar
- Current page name should be on the left.
- Menu button should be on the right.
	- Can be a "hamburger" button or any other icon.
	- Should indicate open or close state.
- Menu should include the rest of the things from the Desktop Navigation Bar. The order does not matter.
	- User info can be visible. No need for a dropdown or popover. 

#### Dummy footer
- Should exists on all pages. What is included in the footer does not matter.



### Homepage
- Title
- Dummy text (e.g. Lorem Ipsum)
	- Please make sure to use different dummy text for different languages.


### "Login" Modal
You don't need to have a backend or mock server. The only purpose of this component/modal/page is to trigger an update that will update all relevant parts of the website. (e.g. name shown on navigation bar should be updated when )

- Title
- Name field
- Email field
- Password field
- Login button
- Locale selector on one of the corners.
- Close button (Optional)

You can have an exit button or only close the modal when the user presses the "Login" button.

When the user presses "Login" button, you should update the "User Info" stored in the site-wide/global state. (The components displaying "User Info" should also update) 

### Contact Us Page

Should prefill and update `name` and `email` fields based on "User Info" from site-wide/global state (See Login Modal).

- Title
- Name field
- Email field
	- Please check if characters entered are valid and inform the user (e.g. red/green border)
		- You can use a tool but html5 
- Phone number field
	- Please check if characters entered are valid and inform the user (e.g. red/green border)
	- No need for a separate extension code selector.
	- No need to format the text entered.
- Country Selector with suggestion/search
	- Entering text should suggest possible countries to the user.
		- This should be done without a server.
	- You can implement a basic search yourself or use a module/tool.
	- Country names should be localized. Search results should update if localization changes.
- Text field
	- Can use a `textarea` element.
- Send button

For Country Selector, you can use the full list of countries or the following list.
``` javascript
const countryList = [
	{ id: "TR", name: "Turkey" },
	{ id: "US", name: "United States of America" },
	{ id: "GB", name: "United Kingdom" },
	{ id: "DE", name: "Germany" },
	{ id: "SE", name: "Sweden" },
	{ id: "KE", name: "Kenya" },
	{ id: "BR", name: "Brazil" },
	{ id: "ZW", name: "Zimbabwe" }
]
```

Pressing "Send" should prepare a JSON. You can send a POST request to "example.com" or just `console.log(...)` it.

You can use the following example for formatting your JSON:
``` json
{
	"name": "...",
	"email": "...",
	"phonenumber": "000000000000",
	"country_code": "TR",
	"text": "..."
}
```

--------------------

## Deliverables
- Source code
- Short `readme.md` file or equivalent.
	- If you skipped some features, please specify in this file.
	- Include steps for how to open the website.
		- If you are not using a build tool, please tell us where to look for the `index.html`
		- If you are using a build tool, tell us how to run/serve/build the project.
			- For example: `npm i; npm run serve`
- Feel free to include any config or setup file relevant to this project. (e.g. `.gitignore`, `.editorconfig`)

## Delivery
Public git repo or a zip file.
