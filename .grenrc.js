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
    changelogTitle: "# Changelog\n\n",
    release: "## {{release}} ({{date}})\n{{body}}",
    releaseSeparator: "\n---\n\n",
    group: function (placeholders) {
      var icon = "🙈";
      if (placeholders.heading == "Enhancements") {
        icon = "🚀";
      } else if (placeholders.heading == "Bug Fixes" || "Bugs") {
        icon = "🐛";
      } else if (placeholders.heading == "Documentation") {
        icon = "📚";
      } else if (placeholders.heading == "No user affected") {
        icon = "🙈";
      } else if (placeholders.heading == "Technical Tasks") {
        icon = "⚙️";
      }
      return "\n#### " + icon + " " + placeholders.heading + "\n";
    },
  },
  groupBy: {
    "Enhancements:": ["enhancement", "internal"],
    "Bug Fixes:": ["bug"],
  },
};
