module.exports = {
  dataSource: "milestones",
  prefix: "v",
  groupBy: "label",
  milestoneMatch: "Release {{tag_name}}",
  changelogFilename: "CHANGELOG.md",
  ignoreIssuesWith: ["duplicate", "wontfix", "invalid", "help wanted"],
  template: {
    issue: "- [{{text}}]({{url}}) {{name}}",
  },
  groupBy: {
    "Enhancements:": ["enhancement", "internal"],
    "Bug Fixes:": ["bug"],
  },
};
