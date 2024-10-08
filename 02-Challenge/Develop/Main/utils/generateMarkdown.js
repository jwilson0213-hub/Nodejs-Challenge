// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `(![GitHub License](https://img.shields.io/github/license/${license})
 ${license})`;

  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `\n* [License](#license) \n`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License
      
    Licensed under the ${license} license.`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  By ${data.name}
  ${renderLicenseBadge(data.license)}
  ## table of Contents
  * [Description](#description)
  * [Requirements](#requirements)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contact Me](#name)
  * [Contributions](#contribution)
  * [Testing](#testing)
  ${renderLicenseLink(data.license)}
  ## Description
  ${data.description}
  ## Requirements
  ${data.require}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contact Me
  * Name: ${data.name}
  * Email: ${data.email}
  * GitHub: ${data.gitHub}
  ## Contributors
  ${data.contribution}
  ## Testing
  ${data.test}
  ${renderLicenseSection(data.license)}
`;
}

export default generateMarkdown;
