class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowercase = message.toLowerCase();
      if (lowercase.includes("skills")) {
        this.actionProvider.handleSkills();
      } else if (lowercase.includes("projects")) {
        this.actionProvider.handleProjects();
      } else if (lowercase.includes("experience")) {
        this.actionProvider.handleExperience();
      }
    }
  }
  
  export default MessageParser;
  