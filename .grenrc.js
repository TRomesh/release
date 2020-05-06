module.exports = {
  dataSource: "milestones",
  prefix: "",
  milestoneMatch: "Release {{tag_name}}",
  changelogFilename: "CHANGELOG.md",
  ignoreIssuesWith: ["duplicate", "wontfix", "invalid", "help wanted"],
  template: {
    commit: ({ message, url, author, name }) =>
      `- [${message}](${url}) - ${author ? `@${author}` : name}`,
    issue: "- {{labels}} {{name}} [{{text}}]({{url}})",
    label: "[**{{label}}**]",
    noLabel: "closed",
    group: "\n#### {{heading}}\n",
    changelogTitle: "# Changelog\n\n",
    release: "## {{release}} ({{date}})\n{{body}}",
    releaseSeparator: "\n---\n\n",
  },
  groupBy: {
    "Enhancements:": ["enhancement", "internal"],
    "Bug Fixes:": ["bug"],
  },
};
